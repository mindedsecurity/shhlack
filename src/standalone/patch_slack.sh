#!/bin/bash

##  patch_slack.sh [/ABSOLUTEPATH/TO/usr/lib/slack/resources/app.asar.unpacked]
##  The argument will override default location of Slack installation directory
##  on Linux and on Mac.

MAC_DEFAULT_LOCATION="/Applications/Slack.app/Contents/Resources/"

LINUX_DEFAULT_LOCATION="/usr/lib/slack/resources/"
########################################

FULLSLACKPATH=$1

SHHLACK_HOME="$HOME/.shhlack/"

SHHLACK_PACKAGE="./package.json"
SHHLACK_FILE="./shhlack.js"
SHHLACK_PATCHER_FILE="./patch.js"

RELATIVE_FILE="app.asar.unpacked/src/static/ssb-interop.js"

# Creates shhlack home dir if it does not exists.
if [ ! -d "$SHHLACK_HOME" ]
  then
    echo "Creating $SHHLACK_HOME"
    mkdir "$SHHLACK_HOME"
fi

# Copying shhlack.js and package.json to shhlack home dir
    echo "Copying files to $SHHLACK_HOME"
cp -f $SHHLACK_FILE $SHHLACK_HOME
cp -f $SHHLACK_PACKAGE $SHHLACK_HOME

case "$(uname -s)" in

   Darwin)
      PREPATH=$MAC_DEFAULT_LOCATION
     ;;

   Linux)
      PREPATH=$LINUX_DEFAULT_LOCATION
     ;;
   *)
   echo "Error: unsupported OS"
   exit 1;
     ;;
esac

if [ -e "$PREPATH/$RELATIVE_FILE" ]
  then
    if [ -e "$FULLSLACKPATH/$RELATIVE_FILE" ]
      then
        PRELOAD_FILE="$FULLSLACKPATH/$RELATIVE_FILE"
      else
        PRELOAD_FILE="$PREPATH/$RELATIVE_FILE"
    fi
  else
    PRELOAD_FILE="$FULLSLACKPATH/$RELATIVE_FILE"
fi

if [ -e "$PRELOAD_FILE" ]
then
 IS_PATCHED=`grep PATCHED $PRELOAD_FILE > /dev/null && echo "ALREADY PATCHED"`
 if [ "$IS_PATCHED" == "ALREADY PATCHED" ]
  then #Already patched
    if [ -e "$PRELOAD_FILE.bak" ] #Look for original backup
      then
        echo "Already patched. Do you want to repatch the original?(y/n): "
        read OVERWRITE
        if [ "$OVERWRITE" == "y" ]
          then
           sudo cp -f "$PRELOAD_FILE.bak" $PRELOAD_FILE
           echo "Patching $PRELOAD_FILE"
           cat $SHHLACK_PATCHER_FILE | sudo tee -a $PRELOAD_FILE > /dev/null
        fi
      else # No original backup was found, you're on your own
        echo "$PRELOAD_FILE is already patched but no back-up was found. Patching must be done manually."
        exit 1
    fi
  else # Not patched, let's create a copy and patch it
    echo "Creating backup copy $PRELOAD_FILE.bak of the original"
    sudo cp -f $PRELOAD_FILE "$PRELOAD_FILE.bak"
    echo "Patching $PRELOAD_FILE"
    cat $SHHLACK_PATCHER_FILE | sudo tee -a $PRELOAD_FILE > /dev/null
  fi
else
    echo "Can't find $PRELOAD_FILE"
  # exit 1
fi


