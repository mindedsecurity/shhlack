####Build ###

to create slack app patcher and browser extension:
```
node build.js
```
It'll create in two dirs in build/
```
build/extension/ // << Browser extension 
build/native/    // << standalone patcher
```



Just add this extension to your chrome and log in to your slack team

when you want to send encrypted msg to the channel
just add a predefined prefix - @@@@ - followed by your text.
Eg

@@@@ Hello world.

Also since the enrypted content is not going to be searchable on slack,
you can add a title which wont' be encrypted so it'll be indexed.

The format is:

title@@@@message

You and all your mates using shhlack will see the decrypted msg
on your client but on the server it'll be @@@@Base64(rawAESenc)

By clicking on the extension icon you'll get a nice form that will 
add the @@@@ for you and send it over the channel.

TODO:
- Edit Passphrase from UI [DONE!]
- Multi passphrases [DONE!]
- Save them in localstorage [DONE!]
- Sign messages [DONE!]
- Enc. snippets 
- find other html elements like search divs etc. 
- go at message level?

