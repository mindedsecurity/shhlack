# WARNING
**This is an experimental and ongoing project. You can fork it, install it, play with it, but it's surely not ready for real use. So use it with grain of salt!**


# Shhlack
Shhlack is an encryptor/decryptor to improve privacy in peer-to-peer messages in Slack created by  <a href="http://www.mindedsecurity.com" target="_new">Minded Security</a>.
It relies on pre-shared keys between the peers so only the peers with the right passphrase will be able to see the encrypted message. 

<img src="https://user-images.githubusercontent.com/1196560/39006967-ec14799e-4404-11e8-8ebc-cbf387c3806f.png" width="500">

Everyone else will see encrypted content, such as:

```
Sample Title@@@@BASE64ENCRYPTEDCONTENT####HMAC
```

In order to facilitate search a title in clear text can be used.

# Build

To create slack app patcher and browser extension:
```
node build.js
```
This will create two diretories in `build/`:
```
build/extension/ // << Browser extension 
build/standalone/    // << standalone patcher
```
# Installing the extension for Chrome

The extension will be available once it's tested.
For now, installation is achieved by building the source accoridng to the above instructions and then using Chrome's "Load Unpacked" feature. Developer mode must be enabled in order to do this.

Once installed you can click on the Shhlack icon (a colourful lock next to where text is input) and, if you're on a slack chat room, the Shhlack dialog will appear.
Alternatively you can use `Alt-s` shortcut on Windows.

# Installing the patch for standalone

On Linux/MacOS:
```
cd build/standalone/
./patch_slack.sh
```
The script will ask for root password since it will try to write in an root directory.

On windows:
```
cd build/standalone/
./patch_slack.bat
```

During the process, a backup copy of the original file is created.

# Uninstalling the patch for standalone
On Linux/MacOS:
```
cd build/standalone/
./unpatch_slack.sh
```
The script will ask for root password since it will try to write in a directory owned by root.

On windows:
```
cd build/standalone/
./unpatch_slack.bat
```

# Usage

After building and running the install script, Shhlack should work when you login to the standalone client, or when the extension is added and enabled in Chrome.

The first time you use Shhlack, you will be asked to add at least one passphrase to use for encryption/decryption. 
You can alternatively give a previously saved file to share the passphrases between clients/PCs/peers.

Press `Alt-S` or click on the Shhlack extension icon (extension only) and you'll get:

<img src="https://user-images.githubusercontent.com/1196560/39006265-d8114e10-4402-11e8-873c-266c6be34a04.png" width="250">

If there is more than one passphrase the dropdown menu will show a list of mnemonic keys and you'll be able to choose a passphrase used to encrypt the message.
Alternatively you can send a raw message without the fancy dialog by adding the prefix `@@@@` to your text.

For example:
```
@@@@ Hello world.
```
This will be encrypted by Shhlack using the current passphrase.

Encrypted content will not be searchable, however you can add a title that can be searched on.

The format is:
```
title@@@@message
```
You and all your mates using shhlack will see the decrypted message
on your client but on the server it'll appear as
```
ClearTextTitle@@@@Base64(rawAESenc)#HMAC
```


TODO:
- Encrypt snippets 
- Add Master Passphrase with Crypto Web APIs 
- Option to Encrypt every message (Encrypted chat)
- Add support for encrypted rich content.
