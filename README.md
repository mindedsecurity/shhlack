# Shhlack
Shhlack is an encryptor/decryptor or peer to peer messages in Slack created by  <a href="http://www.mindedsecurity.com" target="_new">Minded Security</a>.
It relies on pre shared keys between the peers so only the peers with the right passphrase will be able to see the encrypted message. 

<img src="https://user-images.githubusercontent.com/1196560/39006967-ec14799e-4404-11e8-8ebc-cbf387c3806f.png" width="500">

Everyone else will see some garbage content like:

```
Sample Title@@@@BASE64ENCRYPTEDCONTENT####HMAC
```

In order to facilitate search a title in clear text can be used.

# Build

to create slack app patcher and browser extension:
```
node build.js
```
It'll create in two dirs in build/
```
build/extension/ // << Browser extension 
build/native/    // << standalone patcher
```
# Installing the extension for Chrome

The extension will be available once it's tested.
Anyway you can build it up and add the extension to chrome in developer mode using the `load unpacked` feature.

Once installed you can click on the Shhlack icon and, if you're on a slack chat room the Shhlack dialog will appear.
Alternatively you can use `Alt-s` shortcut.

# Installing the patch for standalone

On Linux/MacOS:
```
cd build/native/
./patch_slack.sh
```
The script will ask for root password since it will try to write in an root directory.

On windows:
```
cd build/native/
./patch_slack.bat
```

During the process, a backup copy of the patched file is created.

# Uninstalling the patch for standalone
On Linux/MacOS:
```
cd build/native/
./unpatch_slack.sh
```
The script will ask for root password since it will try to write in an root directory.

On windows:
```
cd build/native/
./unpatch_slack.bat
```

Remember that every 

# Usage

Just add shhlack to your chrome/desktop app and log in to your slack team.

The first time you will be asked to add at least on passphrase.
You can alternatively give a previously saved file to share the passphrases between clients/PCs/peers.

When you want to send encrypted msg to the channel you'll have several ways to launch the encryption dialog.
Press `Alt-S` or click on the Shhlack extension icon (extension only) and you'll get:

<img src="https://user-images.githubusercontent.com/1196560/39006265-d8114e10-4402-11e8-873c-266c6be34a04.png" width="250">

If there is more than one passphrase the dropdown menu will show a list of mnemonic keys and you'll be able to chose which passphrase use to encrypt the message.
Alternatively you can also send a raw message without the fancy dialog.

Just add a predefined prefix - @@@@ - followed by your text.

```
@@@@ Hello world.
```
It will be captured by Shhlack and encrypted using the current passphrase.

Also since the encrypted content is not going to be searchable on slack,
you can add a title which won't be encrypted so it'll be indexed.

The format is:
```
title@@@@message
```
You and all your mates using shhlack will see the decrypted msg
on your client but on the server it'll be 
```
ClearTextTitle@@@@Base64(rawAESenc)#HMAC
```


TODO:
- Encrypt snippets 
- Add Master Passphrase with Crypto Web APIs 

