@echo off
setlocal
set OLDDIR=%cd%
rem cd /d %~dp0

SET WIN_DEFAULT_LOCATION=%LOCALAPPDATA%\slack

rem Check for default location
if exist %WIN_DEFAULT_LOCATION% (
  CD %WIN_DEFAULT_LOCATION%\app-*\resources\app.asar.unpacked\src\static
  find "PATCHED" ssb-interop.js >nul|| goto notfound
rem Found, It's already Patched
  if exist ssb-interop.js.bak (
   rem found the patch and the backup, let's convert back to the original!
    xcopy /Y ssb-interop.js.bak ssb-interop.js
    goto done
  ) else (
  rem no backup file found. Exit.
    @echo on
    @echo "Backup File ssb-interop.js.bak not found, you'll have to do it manually"
    @echo off
  goto done
  )
rem OK, Not Patched
:notfound
  rem Creating Backup
  @echo on
  @echo "It doesn't seem ssb-interop.js is patched"
  @echo off
  goto done
) else (
    @echo on
    @echo "Slack Directory not found!"
    @echo off
    pause
)
:done

CD %OLDDIR%
@echo on
@echo "Done! Slack File has been unpatched! Press Any Key to Exit."
@echo off