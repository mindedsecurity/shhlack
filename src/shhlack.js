function _____INJECT_____() {
  var cryptojs = {};
  // npm install crypto-js && cd node_modules/crypto-js/ && echo "cryptojs = require('crypto-js');"  > ./test_crypt.js && browserify ./test_crypt.js > /tmp/test_crypt_browseryfied.js && cd /tmp/ && uglify -s ./test_crypt_browseryfied.js -o ./test_crypt_browseryfied.min.js
  // browserified crypto-js
  !function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);var j=new Error("Cannot find module '"+g+"'");throw j.code="MODULE_NOT_FOUND",j}var k=c[g]={exports:{}};b[g][0].call(k.exports,function(a){var c=b[g][1][a];return e(c?c:a)},k,k.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({1:[function(a,b,c){!function(d,e,f){"object"==typeof c?b.exports=c=e(a("./core"),a("./enc-base64"),a("./md5"),a("./evpkdf"),a("./cipher-core")):"function"==typeof define&&define.amd?define(["./core","./enc-base64","./md5","./evpkdf","./cipher-core"],e):e(d.CryptoJS)}(this,function(a){return function(){var b=a,c=b.lib,d=c.BlockCipher,e=b.algo,f=[],g=[],h=[],i=[],j=[],k=[],l=[],m=[],n=[],o=[];!function(){for(var a=[],b=0;256>b;b++)128>b?a[b]=b<<1:a[b]=b<<1^283;for(var c=0,d=0,b=0;256>b;b++){var e=d^d<<1^d<<2^d<<3^d<<4;e=e>>>8^255&e^99,f[c]=e,g[e]=c;var p=a[c],q=a[p],r=a[q],s=257*a[e]^16843008*e;h[c]=s<<24|s>>>8,i[c]=s<<16|s>>>16,j[c]=s<<8|s>>>24,k[c]=s;var s=16843009*r^65537*q^257*p^16843008*c;l[e]=s<<24|s>>>8,m[e]=s<<16|s>>>16,n[e]=s<<8|s>>>24,o[e]=s,c?(c=p^a[a[a[r^p]]],d^=a[a[d]]):c=d=1}}();var p=[0,1,2,4,8,16,32,64,128,27,54],q=e.AES=d.extend({_doReset:function(){if(!this._nRounds||this._keyPriorReset!==this._key){for(var a=this._keyPriorReset=this._key,b=a.words,c=a.sigBytes/4,d=this._nRounds=c+6,e=4*(d+1),g=this._keySchedule=[],h=0;e>h;h++)if(c>h)g[h]=b[h];else{var i=g[h-1];h%c?c>6&&h%c==4&&(i=f[i>>>24]<<24|f[i>>>16&255]<<16|f[i>>>8&255]<<8|f[255&i]):(i=i<<8|i>>>24,i=f[i>>>24]<<24|f[i>>>16&255]<<16|f[i>>>8&255]<<8|f[255&i],i^=p[h/c|0]<<24),g[h]=g[h-c]^i}for(var j=this._invKeySchedule=[],k=0;e>k;k++){var h=e-k;if(k%4)var i=g[h];else var i=g[h-4];4>k||4>=h?j[k]=i:j[k]=l[f[i>>>24]]^m[f[i>>>16&255]]^n[f[i>>>8&255]]^o[f[255&i]]}}},encryptBlock:function(a,b){this._doCryptBlock(a,b,this._keySchedule,h,i,j,k,f)},decryptBlock:function(a,b){var c=a[b+1];a[b+1]=a[b+3],a[b+3]=c,this._doCryptBlock(a,b,this._invKeySchedule,l,m,n,o,g);var c=a[b+1];a[b+1]=a[b+3],a[b+3]=c},_doCryptBlock:function(a,b,c,d,e,f,g,h){for(var i=this._nRounds,j=a[b]^c[0],k=a[b+1]^c[1],l=a[b+2]^c[2],m=a[b+3]^c[3],n=4,o=1;i>o;o++){var p=d[j>>>24]^e[k>>>16&255]^f[l>>>8&255]^g[255&m]^c[n++],q=d[k>>>24]^e[l>>>16&255]^f[m>>>8&255]^g[255&j]^c[n++],r=d[l>>>24]^e[m>>>16&255]^f[j>>>8&255]^g[255&k]^c[n++],s=d[m>>>24]^e[j>>>16&255]^f[k>>>8&255]^g[255&l]^c[n++];j=p,k=q,l=r,m=s}var p=(h[j>>>24]<<24|h[k>>>16&255]<<16|h[l>>>8&255]<<8|h[255&m])^c[n++],q=(h[k>>>24]<<24|h[l>>>16&255]<<16|h[m>>>8&255]<<8|h[255&j])^c[n++],r=(h[l>>>24]<<24|h[m>>>16&255]<<16|h[j>>>8&255]<<8|h[255&k])^c[n++],s=(h[m>>>24]<<24|h[j>>>16&255]<<16|h[k>>>8&255]<<8|h[255&l])^c[n++];a[b]=p,a[b+1]=q,a[b+2]=r,a[b+3]=s},keySize:8});b.AES=d._createHelper(q)}(),a.AES})},{"./cipher-core":2,"./core":3,"./enc-base64":4,"./evpkdf":6,"./md5":11}],2:[function(a,b,c){!function(d,e,f){"object"==typeof c?b.exports=c=e(a("./core"),a("./evpkdf")):"function"==typeof define&&define.amd?define(["./core","./evpkdf"],e):e(d.CryptoJS)}(this,function(a){a.lib.Cipher||function(b){var c=a,d=c.lib,e=d.Base,f=d.WordArray,g=d.BufferedBlockAlgorithm,h=c.enc,i=(h.Utf8,h.Base64),j=c.algo,k=j.EvpKDF,l=d.Cipher=g.extend({cfg:e.extend(),createEncryptor:function(a,b){return this.create(this._ENC_XFORM_MODE,a,b)},createDecryptor:function(a,b){return this.create(this._DEC_XFORM_MODE,a,b)},init:function(a,b,c){this.cfg=this.cfg.extend(c),this._xformMode=a,this._key=b,this.reset()},reset:function(){g.reset.call(this),this._doReset()},process:function(a){return this._append(a),this._process()},finalize:function(a){a&&this._append(a);var b=this._doFinalize();return b},keySize:4,ivSize:4,_ENC_XFORM_MODE:1,_DEC_XFORM_MODE:2,_createHelper:function(){function a(a){return"string"==typeof a?x:u}return function(b){return{encrypt:function(c,d,e){return a(d).encrypt(b,c,d,e)},decrypt:function(c,d,e){return a(d).decrypt(b,c,d,e)}}}}()}),m=(d.StreamCipher=l.extend({_doFinalize:function(){var a=this._process(!0);return a},blockSize:1}),c.mode={}),n=d.BlockCipherMode=e.extend({createEncryptor:function(a,b){return this.Encryptor.create(a,b)},createDecryptor:function(a,b){return this.Decryptor.create(a,b)},init:function(a,b){this._cipher=a,this._iv=b}}),o=m.CBC=function(){function a(a,c,d){var e=this._iv;if(e){var f=e;this._iv=b}else var f=this._prevBlock;for(var g=0;d>g;g++)a[c+g]^=f[g]}var c=n.extend();return c.Encryptor=c.extend({processBlock:function(b,c){var d=this._cipher,e=d.blockSize;a.call(this,b,c,e),d.encryptBlock(b,c),this._prevBlock=b.slice(c,c+e)}}),c.Decryptor=c.extend({processBlock:function(b,c){var d=this._cipher,e=d.blockSize,f=b.slice(c,c+e);d.decryptBlock(b,c),a.call(this,b,c,e),this._prevBlock=f}}),c}(),p=c.pad={},q=p.Pkcs7={pad:function(a,b){for(var c=4*b,d=c-a.sigBytes%c,e=d<<24|d<<16|d<<8|d,g=[],h=0;d>h;h+=4)g.push(e);var i=f.create(g,d);a.concat(i)},unpad:function(a){var b=255&a.words[a.sigBytes-1>>>2];a.sigBytes-=b}},r=(d.BlockCipher=l.extend({cfg:l.cfg.extend({mode:o,padding:q}),reset:function(){l.reset.call(this);var a=this.cfg,b=a.iv,c=a.mode;if(this._xformMode==this._ENC_XFORM_MODE)var d=c.createEncryptor;else{var d=c.createDecryptor;this._minBufferSize=1}this._mode&&this._mode.__creator==d?this._mode.init(this,b&&b.words):(this._mode=d.call(c,this,b&&b.words),this._mode.__creator=d)},_doProcessBlock:function(a,b){this._mode.processBlock(a,b)},_doFinalize:function(){var a=this.cfg.padding;if(this._xformMode==this._ENC_XFORM_MODE){a.pad(this._data,this.blockSize);var b=this._process(!0)}else{var b=this._process(!0);a.unpad(b)}return b},blockSize:4}),d.CipherParams=e.extend({init:function(a){this.mixIn(a)},toString:function(a){return(a||this.formatter).stringify(this)}})),s=c.format={},t=s.OpenSSL={stringify:function(a){var b=a.ciphertext,c=a.salt;if(c)var d=f.create([1398893684,1701076831]).concat(c).concat(b);else var d=b;return d.toString(i)},parse:function(a){var b=i.parse(a),c=b.words;if(1398893684==c[0]&&1701076831==c[1]){var d=f.create(c.slice(2,4));c.splice(0,4),b.sigBytes-=16}return r.create({ciphertext:b,salt:d})}},u=d.SerializableCipher=e.extend({cfg:e.extend({format:t}),encrypt:function(a,b,c,d){d=this.cfg.extend(d);var e=a.createEncryptor(c,d),f=e.finalize(b),g=e.cfg;return r.create({ciphertext:f,key:c,iv:g.iv,algorithm:a,mode:g.mode,padding:g.padding,blockSize:a.blockSize,formatter:d.format})},decrypt:function(a,b,c,d){d=this.cfg.extend(d),b=this._parse(b,d.format);var e=a.createDecryptor(c,d).finalize(b.ciphertext);return e},_parse:function(a,b){return"string"==typeof a?b.parse(a,this):a}}),v=c.kdf={},w=v.OpenSSL={execute:function(a,b,c,d){d||(d=f.random(8));var e=k.create({keySize:b+c}).compute(a,d),g=f.create(e.words.slice(b),4*c);return e.sigBytes=4*b,r.create({key:e,iv:g,salt:d})}},x=d.PasswordBasedCipher=u.extend({cfg:u.cfg.extend({kdf:w}),encrypt:function(a,b,c,d){d=this.cfg.extend(d);var e=d.kdf.execute(c,a.keySize,a.ivSize);d.iv=e.iv;var f=u.encrypt.call(this,a,b,e.key,d);return f.mixIn(e),f},decrypt:function(a,b,c,d){d=this.cfg.extend(d),b=this._parse(b,d.format);var e=d.kdf.execute(c,a.keySize,a.ivSize,b.salt);d.iv=e.iv;var f=u.decrypt.call(this,a,b,e.key,d);return f}})}()})},{"./core":3,"./evpkdf":6}],3:[function(a,b,c){!function(a,d){"object"==typeof c?b.exports=c=d():"function"==typeof define&&define.amd?define([],d):a.CryptoJS=d()}(this,function(){var a=a||function(a,b){var c=Object.create||function(){function a(){}return function(b){var c;return a.prototype=b,c=new a,a.prototype=null,c}}(),d={},e=d.lib={},f=e.Base=function(){return{extend:function(a){var b=c(this);return a&&b.mixIn(a),b.hasOwnProperty("init")&&this.init!==b.init||(b.init=function(){b.$super.init.apply(this,arguments)}),b.init.prototype=b,b.$super=this,b},create:function(){var a=this.extend();return a.init.apply(a,arguments),a},init:function(){},mixIn:function(a){for(var b in a)a.hasOwnProperty(b)&&(this[b]=a[b]);a.hasOwnProperty("toString")&&(this.toString=a.toString)},clone:function(){return this.init.prototype.extend(this)}}}(),g=e.WordArray=f.extend({init:function(a,c){a=this.words=a||[],c!=b?this.sigBytes=c:this.sigBytes=4*a.length},toString:function(a){return(a||i).stringify(this)},concat:function(a){var b=this.words,c=a.words,d=this.sigBytes,e=a.sigBytes;if(this.clamp(),d%4)for(var f=0;e>f;f++){var g=c[f>>>2]>>>24-f%4*8&255;b[d+f>>>2]|=g<<24-(d+f)%4*8}else for(var f=0;e>f;f+=4)b[d+f>>>2]=c[f>>>2];return this.sigBytes+=e,this},clamp:function(){var b=this.words,c=this.sigBytes;b[c>>>2]&=4294967295<<32-c%4*8,b.length=a.ceil(c/4)},clone:function(){var a=f.clone.call(this);return a.words=this.words.slice(0),a},random:function(b){for(var c,d=[],e=function(b){var b=b,c=987654321,d=4294967295;return function(){c=36969*(65535&c)+(c>>16)&d,b=18e3*(65535&b)+(b>>16)&d;var e=(c<<16)+b&d;return e/=4294967296,e+=.5,e*(a.random()>.5?1:-1)}},f=0;b>f;f+=4){var h=e(4294967296*(c||a.random()));c=987654071*h(),d.push(4294967296*h()|0)}return new g.init(d,b)}}),h=d.enc={},i=h.Hex={stringify:function(a){for(var b=a.words,c=a.sigBytes,d=[],e=0;c>e;e++){var f=b[e>>>2]>>>24-e%4*8&255;d.push((f>>>4).toString(16)),d.push((15&f).toString(16))}return d.join("")},parse:function(a){for(var b=a.length,c=[],d=0;b>d;d+=2)c[d>>>3]|=parseInt(a.substr(d,2),16)<<24-d%8*4;return new g.init(c,b/2)}},j=h.Latin1={stringify:function(a){for(var b=a.words,c=a.sigBytes,d=[],e=0;c>e;e++){var f=b[e>>>2]>>>24-e%4*8&255;d.push(String.fromCharCode(f))}return d.join("")},parse:function(a){for(var b=a.length,c=[],d=0;b>d;d++)c[d>>>2]|=(255&a.charCodeAt(d))<<24-d%4*8;return new g.init(c,b)}},k=h.Utf8={stringify:function(a){try{return decodeURIComponent(escape(j.stringify(a)))}catch(b){throw new Error("Malformed UTF-8 data")}},parse:function(a){return j.parse(unescape(encodeURIComponent(a)))}},l=e.BufferedBlockAlgorithm=f.extend({reset:function(){this._data=new g.init,this._nDataBytes=0},_append:function(a){"string"==typeof a&&(a=k.parse(a)),this._data.concat(a),this._nDataBytes+=a.sigBytes},_process:function(b){var c=this._data,d=c.words,e=c.sigBytes,f=this.blockSize,h=4*f,i=e/h;i=b?a.ceil(i):a.max((0|i)-this._minBufferSize,0);var j=i*f,k=a.min(4*j,e);if(j){for(var l=0;j>l;l+=f)this._doProcessBlock(d,l);var m=d.splice(0,j);c.sigBytes-=k}return new g.init(m,k)},clone:function(){var a=f.clone.call(this);return a._data=this._data.clone(),a},_minBufferSize:0}),m=(e.Hasher=l.extend({cfg:f.extend(),init:function(a){this.cfg=this.cfg.extend(a),this.reset()},reset:function(){l.reset.call(this),this._doReset()},update:function(a){return this._append(a),this._process(),this},finalize:function(a){a&&this._append(a);var b=this._doFinalize();return b},blockSize:16,_createHelper:function(a){return function(b,c){return new a.init(c).finalize(b)}},_createHmacHelper:function(a){return function(b,c){return new m.HMAC.init(a,c).finalize(b)}}}),d.algo={});return d}(Math);return a})},{}],4:[function(a,b,c){!function(d,e){"object"==typeof c?b.exports=c=e(a("./core")):"function"==typeof define&&define.amd?define(["./core"],e):e(d.CryptoJS)}(this,function(a){return function(){function b(a,b,c){for(var d=[],f=0,g=0;b>g;g++)if(g%4){var h=c[a.charCodeAt(g-1)]<<g%4*2,i=c[a.charCodeAt(g)]>>>6-g%4*2;d[f>>>2]|=(h|i)<<24-f%4*8,f++}return e.create(d,f)}var c=a,d=c.lib,e=d.WordArray,f=c.enc;f.Base64={stringify:function(a){var b=a.words,c=a.sigBytes,d=this._map;a.clamp();for(var e=[],f=0;c>f;f+=3)for(var g=b[f>>>2]>>>24-f%4*8&255,h=b[f+1>>>2]>>>24-(f+1)%4*8&255,i=b[f+2>>>2]>>>24-(f+2)%4*8&255,j=g<<16|h<<8|i,k=0;4>k&&c>f+.75*k;k++)e.push(d.charAt(j>>>6*(3-k)&63));var l=d.charAt(64);if(l)for(;e.length%4;)e.push(l);return e.join("")},parse:function(a){var c=a.length,d=this._map,e=this._reverseMap;if(!e){e=this._reverseMap=[];for(var f=0;f<d.length;f++)e[d.charCodeAt(f)]=f}var g=d.charAt(64);if(g){var h=a.indexOf(g);-1!==h&&(c=h)}return b(a,c,e)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="}}(),a.enc.Base64})},{"./core":3}],5:[function(a,b,c){!function(d,e){"object"==typeof c?b.exports=c=e(a("./core")):"function"==typeof define&&define.amd?define(["./core"],e):e(d.CryptoJS)}(this,function(a){return function(){function b(a){return a<<8&4278255360|a>>>8&16711935}var c=a,d=c.lib,e=d.WordArray,f=c.enc;f.Utf16=f.Utf16BE={stringify:function(a){for(var b=a.words,c=a.sigBytes,d=[],e=0;c>e;e+=2){var f=b[e>>>2]>>>16-e%4*8&65535;d.push(String.fromCharCode(f))}return d.join("")},parse:function(a){for(var b=a.length,c=[],d=0;b>d;d++)c[d>>>1]|=a.charCodeAt(d)<<16-d%2*16;return e.create(c,2*b)}};f.Utf16LE={stringify:function(a){for(var c=a.words,d=a.sigBytes,e=[],f=0;d>f;f+=2){var g=b(c[f>>>2]>>>16-f%4*8&65535);e.push(String.fromCharCode(g))}return e.join("")},parse:function(a){for(var c=a.length,d=[],f=0;c>f;f++)d[f>>>1]|=b(a.charCodeAt(f)<<16-f%2*16);return e.create(d,2*c)}}}(),a.enc.Utf16})},{"./core":3}],6:[function(a,b,c){!function(d,e,f){"object"==typeof c?b.exports=c=e(a("./core"),a("./sha1"),a("./hmac")):"function"==typeof define&&define.amd?define(["./core","./sha1","./hmac"],e):e(d.CryptoJS)}(this,function(a){return function(){var b=a,c=b.lib,d=c.Base,e=c.WordArray,f=b.algo,g=f.MD5,h=f.EvpKDF=d.extend({cfg:d.extend({keySize:4,hasher:g,iterations:1}),init:function(a){this.cfg=this.cfg.extend(a)},compute:function(a,b){for(var c=this.cfg,d=c.hasher.create(),f=e.create(),g=f.words,h=c.keySize,i=c.iterations;g.length<h;){j&&d.update(j);var j=d.update(a).finalize(b);d.reset();for(var k=1;i>k;k++)j=d.finalize(j),d.reset();f.concat(j)}return f.sigBytes=4*h,f}});b.EvpKDF=function(a,b,c){return h.create(c).compute(a,b)}}(),a.EvpKDF})},{"./core":3,"./hmac":8,"./sha1":27}],7:[function(a,b,c){!function(d,e,f){"object"==typeof c?b.exports=c=e(a("./core"),a("./cipher-core")):"function"==typeof define&&define.amd?define(["./core","./cipher-core"],e):e(d.CryptoJS)}(this,function(a){return function(b){var c=a,d=c.lib,e=d.CipherParams,f=c.enc,g=f.Hex,h=c.format;h.Hex={stringify:function(a){return a.ciphertext.toString(g)},parse:function(a){var b=g.parse(a);return e.create({ciphertext:b})}}}(),a.format.Hex})},{"./cipher-core":2,"./core":3}],8:[function(a,b,c){!function(d,e){"object"==typeof c?b.exports=c=e(a("./core")):"function"==typeof define&&define.amd?define(["./core"],e):e(d.CryptoJS)}(this,function(a){!function(){var b=a,c=b.lib,d=c.Base,e=b.enc,f=e.Utf8,g=b.algo;g.HMAC=d.extend({init:function(a,b){a=this._hasher=new a.init,"string"==typeof b&&(b=f.parse(b));var c=a.blockSize,d=4*c;b.sigBytes>d&&(b=a.finalize(b)),b.clamp();for(var e=this._oKey=b.clone(),g=this._iKey=b.clone(),h=e.words,i=g.words,j=0;c>j;j++)h[j]^=1549556828,i[j]^=909522486;e.sigBytes=g.sigBytes=d,this.reset()},reset:function(){var a=this._hasher;a.reset(),a.update(this._iKey)},update:function(a){return this._hasher.update(a),this},finalize:function(a){var b=this._hasher,c=b.finalize(a);b.reset();var d=b.finalize(this._oKey.clone().concat(c));return d}})}()})},{"./core":3}],9:[function(a,b,c){!function(d,e,f){"object"==typeof c?b.exports=c=e(a("./core"),a("./x64-core"),a("./lib-typedarrays"),a("./enc-utf16"),a("./enc-base64"),a("./md5"),a("./sha1"),a("./sha256"),a("./sha224"),a("./sha512"),a("./sha384"),a("./sha3"),a("./ripemd160"),a("./hmac"),a("./pbkdf2"),a("./evpkdf"),a("./cipher-core"),a("./mode-cfb"),a("./mode-ctr"),a("./mode-ctr-gladman"),a("./mode-ofb"),a("./mode-ecb"),a("./pad-ansix923"),a("./pad-iso10126"),a("./pad-iso97971"),a("./pad-zeropadding"),a("./pad-nopadding"),a("./format-hex"),a("./aes"),a("./tripledes"),a("./rc4"),a("./rabbit"),a("./rabbit-legacy")):"function"==typeof define&&define.amd?define(["./core","./x64-core","./lib-typedarrays","./enc-utf16","./enc-base64","./md5","./sha1","./sha256","./sha224","./sha512","./sha384","./sha3","./ripemd160","./hmac","./pbkdf2","./evpkdf","./cipher-core","./mode-cfb","./mode-ctr","./mode-ctr-gladman","./mode-ofb","./mode-ecb","./pad-ansix923","./pad-iso10126","./pad-iso97971","./pad-zeropadding","./pad-nopadding","./format-hex","./aes","./tripledes","./rc4","./rabbit","./rabbit-legacy"],e):d.CryptoJS=e(d.CryptoJS)}(this,function(a){return a})},{"./aes":1,"./cipher-core":2,"./core":3,"./enc-base64":4,"./enc-utf16":5,"./evpkdf":6,"./format-hex":7,"./hmac":8,"./lib-typedarrays":10,"./md5":11,"./mode-cfb":12,"./mode-ctr":14,"./mode-ctr-gladman":13,"./mode-ecb":15,"./mode-ofb":16,"./pad-ansix923":17,"./pad-iso10126":18,"./pad-iso97971":19,"./pad-nopadding":20,"./pad-zeropadding":21,"./pbkdf2":22,"./rabbit":24,"./rabbit-legacy":23,"./rc4":25,"./ripemd160":26,"./sha1":27,"./sha224":28,"./sha256":29,"./sha3":30,"./sha384":31,"./sha512":32,"./tripledes":34,"./x64-core":35}],10:[function(a,b,c){!function(d,e){"object"==typeof c?b.exports=c=e(a("./core")):"function"==typeof define&&define.amd?define(["./core"],e):e(d.CryptoJS)}(this,function(a){return function(){if("function"==typeof ArrayBuffer){var b=a,c=b.lib,d=c.WordArray,e=d.init,f=d.init=function(a){if(a instanceof ArrayBuffer&&(a=new Uint8Array(a)),(a instanceof Int8Array||"undefined"!=typeof Uint8ClampedArray&&a instanceof Uint8ClampedArray||a instanceof Int16Array||a instanceof Uint16Array||a instanceof Int32Array||a instanceof Uint32Array||a instanceof Float32Array||a instanceof Float64Array)&&(a=new Uint8Array(a.buffer,a.byteOffset,a.byteLength)),a instanceof Uint8Array){for(var b=a.byteLength,c=[],d=0;b>d;d++)c[d>>>2]|=a[d]<<24-d%4*8;e.call(this,c,b)}else e.apply(this,arguments)};f.prototype=d}}(),a.lib.WordArray})},{"./core":3}],11:[function(a,b,c){!function(d,e){"object"==typeof c?b.exports=c=e(a("./core")):"function"==typeof define&&define.amd?define(["./core"],e):e(d.CryptoJS)}(this,function(a){return function(b){function c(a,b,c,d,e,f,g){var h=a+(b&c|~b&d)+e+g;return(h<<f|h>>>32-f)+b}function d(a,b,c,d,e,f,g){var h=a+(b&d|c&~d)+e+g;return(h<<f|h>>>32-f)+b}function e(a,b,c,d,e,f,g){var h=a+(b^c^d)+e+g;return(h<<f|h>>>32-f)+b}function f(a,b,c,d,e,f,g){var h=a+(c^(b|~d))+e+g;return(h<<f|h>>>32-f)+b}var g=a,h=g.lib,i=h.WordArray,j=h.Hasher,k=g.algo,l=[];!function(){for(var a=0;64>a;a++)l[a]=4294967296*b.abs(b.sin(a+1))|0}();var m=k.MD5=j.extend({_doReset:function(){this._hash=new i.init([1732584193,4023233417,2562383102,271733878])},_doProcessBlock:function(a,b){for(var g=0;16>g;g++){var h=b+g,i=a[h];a[h]=16711935&(i<<8|i>>>24)|4278255360&(i<<24|i>>>8)}var j=this._hash.words,k=a[b+0],m=a[b+1],n=a[b+2],o=a[b+3],p=a[b+4],q=a[b+5],r=a[b+6],s=a[b+7],t=a[b+8],u=a[b+9],v=a[b+10],w=a[b+11],x=a[b+12],y=a[b+13],z=a[b+14],A=a[b+15],B=j[0],C=j[1],D=j[2],E=j[3];B=c(B,C,D,E,k,7,l[0]),E=c(E,B,C,D,m,12,l[1]),D=c(D,E,B,C,n,17,l[2]),C=c(C,D,E,B,o,22,l[3]),B=c(B,C,D,E,p,7,l[4]),E=c(E,B,C,D,q,12,l[5]),D=c(D,E,B,C,r,17,l[6]),C=c(C,D,E,B,s,22,l[7]),B=c(B,C,D,E,t,7,l[8]),E=c(E,B,C,D,u,12,l[9]),D=c(D,E,B,C,v,17,l[10]),C=c(C,D,E,B,w,22,l[11]),B=c(B,C,D,E,x,7,l[12]),E=c(E,B,C,D,y,12,l[13]),D=c(D,E,B,C,z,17,l[14]),C=c(C,D,E,B,A,22,l[15]),B=d(B,C,D,E,m,5,l[16]),E=d(E,B,C,D,r,9,l[17]),D=d(D,E,B,C,w,14,l[18]),C=d(C,D,E,B,k,20,l[19]),B=d(B,C,D,E,q,5,l[20]),E=d(E,B,C,D,v,9,l[21]),D=d(D,E,B,C,A,14,l[22]),C=d(C,D,E,B,p,20,l[23]),B=d(B,C,D,E,u,5,l[24]),E=d(E,B,C,D,z,9,l[25]),D=d(D,E,B,C,o,14,l[26]),C=d(C,D,E,B,t,20,l[27]),B=d(B,C,D,E,y,5,l[28]),E=d(E,B,C,D,n,9,l[29]),D=d(D,E,B,C,s,14,l[30]),C=d(C,D,E,B,x,20,l[31]),B=e(B,C,D,E,q,4,l[32]),E=e(E,B,C,D,t,11,l[33]),D=e(D,E,B,C,w,16,l[34]),C=e(C,D,E,B,z,23,l[35]),B=e(B,C,D,E,m,4,l[36]),E=e(E,B,C,D,p,11,l[37]),D=e(D,E,B,C,s,16,l[38]),C=e(C,D,E,B,v,23,l[39]),B=e(B,C,D,E,y,4,l[40]),E=e(E,B,C,D,k,11,l[41]),D=e(D,E,B,C,o,16,l[42]),C=e(C,D,E,B,r,23,l[43]),B=e(B,C,D,E,u,4,l[44]),E=e(E,B,C,D,x,11,l[45]),D=e(D,E,B,C,A,16,l[46]),C=e(C,D,E,B,n,23,l[47]),B=f(B,C,D,E,k,6,l[48]),E=f(E,B,C,D,s,10,l[49]),D=f(D,E,B,C,z,15,l[50]),C=f(C,D,E,B,q,21,l[51]),B=f(B,C,D,E,x,6,l[52]),E=f(E,B,C,D,o,10,l[53]),D=f(D,E,B,C,v,15,l[54]),C=f(C,D,E,B,m,21,l[55]),B=f(B,C,D,E,t,6,l[56]),E=f(E,B,C,D,A,10,l[57]),D=f(D,E,B,C,r,15,l[58]),C=f(C,D,E,B,y,21,l[59]),B=f(B,C,D,E,p,6,l[60]),E=f(E,B,C,D,w,10,l[61]),D=f(D,E,B,C,n,15,l[62]),C=f(C,D,E,B,u,21,l[63]),j[0]=j[0]+B|0,j[1]=j[1]+C|0,j[2]=j[2]+D|0,j[3]=j[3]+E|0},_doFinalize:function(){var a=this._data,c=a.words,d=8*this._nDataBytes,e=8*a.sigBytes;c[e>>>5]|=128<<24-e%32;var f=b.floor(d/4294967296),g=d;c[(e+64>>>9<<4)+15]=16711935&(f<<8|f>>>24)|4278255360&(f<<24|f>>>8),c[(e+64>>>9<<4)+14]=16711935&(g<<8|g>>>24)|4278255360&(g<<24|g>>>8),a.sigBytes=4*(c.length+1),this._process();for(var h=this._hash,i=h.words,j=0;4>j;j++){var k=i[j];i[j]=16711935&(k<<8|k>>>24)|4278255360&(k<<24|k>>>8)}return h},clone:function(){var a=j.clone.call(this);return a._hash=this._hash.clone(),a}});g.MD5=j._createHelper(m),g.HmacMD5=j._createHmacHelper(m)}(Math),a.MD5})},{"./core":3}],12:[function(a,b,c){!function(d,e,f){"object"==typeof c?b.exports=c=e(a("./core"),a("./cipher-core")):"function"==typeof define&&define.amd?define(["./core","./cipher-core"],e):e(d.CryptoJS)}(this,function(a){return a.mode.CFB=function(){function b(a,b,c,d){var e=this._iv;if(e){var f=e.slice(0);this._iv=void 0}else var f=this._prevBlock;d.encryptBlock(f,0);for(var g=0;c>g;g++)a[b+g]^=f[g]}var c=a.lib.BlockCipherMode.extend();return c.Encryptor=c.extend({processBlock:function(a,c){var d=this._cipher,e=d.blockSize;b.call(this,a,c,e,d),this._prevBlock=a.slice(c,c+e)}}),c.Decryptor=c.extend({processBlock:function(a,c){var d=this._cipher,e=d.blockSize,f=a.slice(c,c+e);b.call(this,a,c,e,d),this._prevBlock=f}}),c}(),a.mode.CFB})},{"./cipher-core":2,"./core":3}],13:[function(a,b,c){!function(d,e,f){"object"==typeof c?b.exports=c=e(a("./core"),a("./cipher-core")):"function"==typeof define&&define.amd?define(["./core","./cipher-core"],e):e(d.CryptoJS)}(this,function(a){return a.mode.CTRGladman=function(){function b(a){if(255===(a>>24&255)){var b=a>>16&255,c=a>>8&255,d=255&a;255===b?(b=0,255===c?(c=0,255===d?d=0:++d):++c):++b,a=0,a+=b<<16,a+=c<<8,a+=d}else a+=1<<24;return a}function c(a){return 0===(a[0]=b(a[0]))&&(a[1]=b(a[1])),a}var d=a.lib.BlockCipherMode.extend(),e=d.Encryptor=d.extend({processBlock:function(a,b){var d=this._cipher,e=d.blockSize,f=this._iv,g=this._counter;f&&(g=this._counter=f.slice(0),this._iv=void 0),c(g);var h=g.slice(0);d.encryptBlock(h,0);for(var i=0;e>i;i++)a[b+i]^=h[i]}});return d.Decryptor=e,d}(),a.mode.CTRGladman})},{"./cipher-core":2,"./core":3}],14:[function(a,b,c){!function(d,e,f){"object"==typeof c?b.exports=c=e(a("./core"),a("./cipher-core")):"function"==typeof define&&define.amd?define(["./core","./cipher-core"],e):e(d.CryptoJS)}(this,function(a){return a.mode.CTR=function(){var b=a.lib.BlockCipherMode.extend(),c=b.Encryptor=b.extend({processBlock:function(a,b){var c=this._cipher,d=c.blockSize,e=this._iv,f=this._counter;e&&(f=this._counter=e.slice(0),this._iv=void 0);var g=f.slice(0);c.encryptBlock(g,0),f[d-1]=f[d-1]+1|0;for(var h=0;d>h;h++)a[b+h]^=g[h]}});return b.Decryptor=c,b}(),a.mode.CTR})},{"./cipher-core":2,"./core":3}],15:[function(a,b,c){!function(d,e,f){"object"==typeof c?b.exports=c=e(a("./core"),a("./cipher-core")):"function"==typeof define&&define.amd?define(["./core","./cipher-core"],e):e(d.CryptoJS)}(this,function(a){return a.mode.ECB=function(){var b=a.lib.BlockCipherMode.extend();return b.Encryptor=b.extend({processBlock:function(a,b){this._cipher.encryptBlock(a,b)}}),b.Decryptor=b.extend({processBlock:function(a,b){this._cipher.decryptBlock(a,b)}}),b}(),a.mode.ECB})},{"./cipher-core":2,"./core":3}],16:[function(a,b,c){!function(d,e,f){"object"==typeof c?b.exports=c=e(a("./core"),a("./cipher-core")):"function"==typeof define&&define.amd?define(["./core","./cipher-core"],e):e(d.CryptoJS)}(this,function(a){return a.mode.OFB=function(){var b=a.lib.BlockCipherMode.extend(),c=b.Encryptor=b.extend({processBlock:function(a,b){var c=this._cipher,d=c.blockSize,e=this._iv,f=this._keystream;e&&(f=this._keystream=e.slice(0),this._iv=void 0),c.encryptBlock(f,0);for(var g=0;d>g;g++)a[b+g]^=f[g]}});return b.Decryptor=c,b}(),a.mode.OFB})},{"./cipher-core":2,"./core":3}],17:[function(a,b,c){!function(d,e,f){"object"==typeof c?b.exports=c=e(a("./core"),a("./cipher-core")):"function"==typeof define&&define.amd?define(["./core","./cipher-core"],e):e(d.CryptoJS)}(this,function(a){return a.pad.AnsiX923={pad:function(a,b){var c=a.sigBytes,d=4*b,e=d-c%d,f=c+e-1;a.clamp(),a.words[f>>>2]|=e<<24-f%4*8,a.sigBytes+=e},unpad:function(a){var b=255&a.words[a.sigBytes-1>>>2];a.sigBytes-=b}},a.pad.Ansix923})},{"./cipher-core":2,"./core":3}],18:[function(a,b,c){!function(d,e,f){"object"==typeof c?b.exports=c=e(a("./core"),a("./cipher-core")):"function"==typeof define&&define.amd?define(["./core","./cipher-core"],e):e(d.CryptoJS)}(this,function(a){return a.pad.Iso10126={pad:function(b,c){var d=4*c,e=d-b.sigBytes%d;b.concat(a.lib.WordArray.random(e-1)).concat(a.lib.WordArray.create([e<<24],1))},unpad:function(a){var b=255&a.words[a.sigBytes-1>>>2];a.sigBytes-=b}},a.pad.Iso10126})},{"./cipher-core":2,"./core":3}],19:[function(a,b,c){!function(d,e,f){"object"==typeof c?b.exports=c=e(a("./core"),a("./cipher-core")):"function"==typeof define&&define.amd?define(["./core","./cipher-core"],e):e(d.CryptoJS)}(this,function(a){return a.pad.Iso97971={pad:function(b,c){b.concat(a.lib.WordArray.create([2147483648],1)),a.pad.ZeroPadding.pad(b,c)},unpad:function(b){a.pad.ZeroPadding.unpad(b),b.sigBytes--}},a.pad.Iso97971})},{"./cipher-core":2,"./core":3}],20:[function(a,b,c){!function(d,e,f){"object"==typeof c?b.exports=c=e(a("./core"),a("./cipher-core")):"function"==typeof define&&define.amd?define(["./core","./cipher-core"],e):e(d.CryptoJS)}(this,function(a){return a.pad.NoPadding={pad:function(){},unpad:function(){}},a.pad.NoPadding})},{"./cipher-core":2,"./core":3}],21:[function(a,b,c){!function(d,e,f){"object"==typeof c?b.exports=c=e(a("./core"),a("./cipher-core")):"function"==typeof define&&define.amd?define(["./core","./cipher-core"],e):e(d.CryptoJS)}(this,function(a){return a.pad.ZeroPadding={pad:function(a,b){var c=4*b;a.clamp(),a.sigBytes+=c-(a.sigBytes%c||c)},unpad:function(a){for(var b=a.words,c=a.sigBytes-1;!(b[c>>>2]>>>24-c%4*8&255);)c--;a.sigBytes=c+1}},a.pad.ZeroPadding})},{"./cipher-core":2,"./core":3}],22:[function(a,b,c){!function(d,e,f){"object"==typeof c?b.exports=c=e(a("./core"),a("./sha1"),a("./hmac")):"function"==typeof define&&define.amd?define(["./core","./sha1","./hmac"],e):e(d.CryptoJS)}(this,function(a){return function(){var b=a,c=b.lib,d=c.Base,e=c.WordArray,f=b.algo,g=f.SHA1,h=f.HMAC,i=f.PBKDF2=d.extend({cfg:d.extend({keySize:4,hasher:g,iterations:1}),init:function(a){this.cfg=this.cfg.extend(a)},compute:function(a,b){for(var c=this.cfg,d=h.create(c.hasher,a),f=e.create(),g=e.create([1]),i=f.words,j=g.words,k=c.keySize,l=c.iterations;i.length<k;){var m=d.update(b).finalize(g);d.reset();for(var n=m.words,o=n.length,p=m,q=1;l>q;q++){p=d.finalize(p),d.reset();for(var r=p.words,s=0;o>s;s++)n[s]^=r[s]}f.concat(m),j[0]++}return f.sigBytes=4*k,f}});b.PBKDF2=function(a,b,c){return i.create(c).compute(a,b)}}(),a.PBKDF2})},{"./core":3,"./hmac":8,"./sha1":27}],23:[function(a,b,c){!function(d,e,f){"object"==typeof c?b.exports=c=e(a("./core"),a("./enc-base64"),a("./md5"),a("./evpkdf"),a("./cipher-core")):"function"==typeof define&&define.amd?define(["./core","./enc-base64","./md5","./evpkdf","./cipher-core"],e):e(d.CryptoJS)}(this,function(a){return function(){function b(){for(var a=this._X,b=this._C,c=0;8>c;c++)h[c]=b[c];b[0]=b[0]+1295307597+this._b|0,b[1]=b[1]+3545052371+(b[0]>>>0<h[0]>>>0?1:0)|0,b[2]=b[2]+886263092+(b[1]>>>0<h[1]>>>0?1:0)|0,b[3]=b[3]+1295307597+(b[2]>>>0<h[2]>>>0?1:0)|0,b[4]=b[4]+3545052371+(b[3]>>>0<h[3]>>>0?1:0)|0,b[5]=b[5]+886263092+(b[4]>>>0<h[4]>>>0?1:0)|0,b[6]=b[6]+1295307597+(b[5]>>>0<h[5]>>>0?1:0)|0,b[7]=b[7]+3545052371+(b[6]>>>0<h[6]>>>0?1:0)|0,this._b=b[7]>>>0<h[7]>>>0?1:0;for(var c=0;8>c;c++){var d=a[c]+b[c],e=65535&d,f=d>>>16,g=((e*e>>>17)+e*f>>>15)+f*f,j=((4294901760&d)*d|0)+((65535&d)*d|0);i[c]=g^j}a[0]=i[0]+(i[7]<<16|i[7]>>>16)+(i[6]<<16|i[6]>>>16)|0,a[1]=i[1]+(i[0]<<8|i[0]>>>24)+i[7]|0,a[2]=i[2]+(i[1]<<16|i[1]>>>16)+(i[0]<<16|i[0]>>>16)|0,a[3]=i[3]+(i[2]<<8|i[2]>>>24)+i[1]|0,a[4]=i[4]+(i[3]<<16|i[3]>>>16)+(i[2]<<16|i[2]>>>16)|0,a[5]=i[5]+(i[4]<<8|i[4]>>>24)+i[3]|0,a[6]=i[6]+(i[5]<<16|i[5]>>>16)+(i[4]<<16|i[4]>>>16)|0,a[7]=i[7]+(i[6]<<8|i[6]>>>24)+i[5]|0}var c=a,d=c.lib,e=d.StreamCipher,f=c.algo,g=[],h=[],i=[],j=f.RabbitLegacy=e.extend({_doReset:function(){var a=this._key.words,c=this.cfg.iv,d=this._X=[a[0],a[3]<<16|a[2]>>>16,a[1],a[0]<<16|a[3]>>>16,a[2],a[1]<<16|a[0]>>>16,a[3],a[2]<<16|a[1]>>>16],e=this._C=[a[2]<<16|a[2]>>>16,4294901760&a[0]|65535&a[1],a[3]<<16|a[3]>>>16,4294901760&a[1]|65535&a[2],a[0]<<16|a[0]>>>16,4294901760&a[2]|65535&a[3],a[1]<<16|a[1]>>>16,4294901760&a[3]|65535&a[0]];this._b=0;for(var f=0;4>f;f++)b.call(this);for(var f=0;8>f;f++)e[f]^=d[f+4&7];if(c){var g=c.words,h=g[0],i=g[1],j=16711935&(h<<8|h>>>24)|4278255360&(h<<24|h>>>8),k=16711935&(i<<8|i>>>24)|4278255360&(i<<24|i>>>8),l=j>>>16|4294901760&k,m=k<<16|65535&j;e[0]^=j,e[1]^=l,e[2]^=k,e[3]^=m,e[4]^=j,e[5]^=l,e[6]^=k,e[7]^=m;for(var f=0;4>f;f++)b.call(this)}},_doProcessBlock:function(a,c){var d=this._X;b.call(this),g[0]=d[0]^d[5]>>>16^d[3]<<16,g[1]=d[2]^d[7]>>>16^d[5]<<16,g[2]=d[4]^d[1]>>>16^d[7]<<16,g[3]=d[6]^d[3]>>>16^d[1]<<16;for(var e=0;4>e;e++)g[e]=16711935&(g[e]<<8|g[e]>>>24)|4278255360&(g[e]<<24|g[e]>>>8),a[c+e]^=g[e]},blockSize:4,ivSize:2});c.RabbitLegacy=e._createHelper(j)}(),a.RabbitLegacy})},{"./cipher-core":2,"./core":3,"./enc-base64":4,"./evpkdf":6,"./md5":11}],24:[function(a,b,c){!function(d,e,f){"object"==typeof c?b.exports=c=e(a("./core"),a("./enc-base64"),a("./md5"),a("./evpkdf"),a("./cipher-core")):"function"==typeof define&&define.amd?define(["./core","./enc-base64","./md5","./evpkdf","./cipher-core"],e):e(d.CryptoJS)}(this,function(a){return function(){function b(){for(var a=this._X,b=this._C,c=0;8>c;c++)h[c]=b[c];b[0]=b[0]+1295307597+this._b|0,b[1]=b[1]+3545052371+(b[0]>>>0<h[0]>>>0?1:0)|0,b[2]=b[2]+886263092+(b[1]>>>0<h[1]>>>0?1:0)|0,b[3]=b[3]+1295307597+(b[2]>>>0<h[2]>>>0?1:0)|0,b[4]=b[4]+3545052371+(b[3]>>>0<h[3]>>>0?1:0)|0,b[5]=b[5]+886263092+(b[4]>>>0<h[4]>>>0?1:0)|0,b[6]=b[6]+1295307597+(b[5]>>>0<h[5]>>>0?1:0)|0,b[7]=b[7]+3545052371+(b[6]>>>0<h[6]>>>0?1:0)|0,this._b=b[7]>>>0<h[7]>>>0?1:0;for(var c=0;8>c;c++){var d=a[c]+b[c],e=65535&d,f=d>>>16,g=((e*e>>>17)+e*f>>>15)+f*f,j=((4294901760&d)*d|0)+((65535&d)*d|0);i[c]=g^j}a[0]=i[0]+(i[7]<<16|i[7]>>>16)+(i[6]<<16|i[6]>>>16)|0,a[1]=i[1]+(i[0]<<8|i[0]>>>24)+i[7]|0,a[2]=i[2]+(i[1]<<16|i[1]>>>16)+(i[0]<<16|i[0]>>>16)|0,a[3]=i[3]+(i[2]<<8|i[2]>>>24)+i[1]|0,a[4]=i[4]+(i[3]<<16|i[3]>>>16)+(i[2]<<16|i[2]>>>16)|0,a[5]=i[5]+(i[4]<<8|i[4]>>>24)+i[3]|0,a[6]=i[6]+(i[5]<<16|i[5]>>>16)+(i[4]<<16|i[4]>>>16)|0,a[7]=i[7]+(i[6]<<8|i[6]>>>24)+i[5]|0}var c=a,d=c.lib,e=d.StreamCipher,f=c.algo,g=[],h=[],i=[],j=f.Rabbit=e.extend({_doReset:function(){for(var a=this._key.words,c=this.cfg.iv,d=0;4>d;d++)a[d]=16711935&(a[d]<<8|a[d]>>>24)|4278255360&(a[d]<<24|a[d]>>>8);var e=this._X=[a[0],a[3]<<16|a[2]>>>16,a[1],a[0]<<16|a[3]>>>16,a[2],a[1]<<16|a[0]>>>16,a[3],a[2]<<16|a[1]>>>16],f=this._C=[a[2]<<16|a[2]>>>16,4294901760&a[0]|65535&a[1],a[3]<<16|a[3]>>>16,4294901760&a[1]|65535&a[2],a[0]<<16|a[0]>>>16,4294901760&a[2]|65535&a[3],a[1]<<16|a[1]>>>16,4294901760&a[3]|65535&a[0]];this._b=0;for(var d=0;4>d;d++)b.call(this);for(var d=0;8>d;d++)f[d]^=e[d+4&7];if(c){var g=c.words,h=g[0],i=g[1],j=16711935&(h<<8|h>>>24)|4278255360&(h<<24|h>>>8),k=16711935&(i<<8|i>>>24)|4278255360&(i<<24|i>>>8),l=j>>>16|4294901760&k,m=k<<16|65535&j;f[0]^=j,f[1]^=l,f[2]^=k,f[3]^=m,f[4]^=j,f[5]^=l,f[6]^=k,f[7]^=m;for(var d=0;4>d;d++)b.call(this)}},_doProcessBlock:function(a,c){var d=this._X;b.call(this),g[0]=d[0]^d[5]>>>16^d[3]<<16,g[1]=d[2]^d[7]>>>16^d[5]<<16,g[2]=d[4]^d[1]>>>16^d[7]<<16,g[3]=d[6]^d[3]>>>16^d[1]<<16;for(var e=0;4>e;e++)g[e]=16711935&(g[e]<<8|g[e]>>>24)|4278255360&(g[e]<<24|g[e]>>>8),a[c+e]^=g[e]},blockSize:4,ivSize:2});c.Rabbit=e._createHelper(j)}(),a.Rabbit})},{"./cipher-core":2,"./core":3,"./enc-base64":4,"./evpkdf":6,"./md5":11}],25:[function(a,b,c){!function(d,e,f){
  "object"==typeof c?b.exports=c=e(a("./core"),a("./enc-base64"),a("./md5"),a("./evpkdf"),a("./cipher-core")):"function"==typeof define&&define.amd?define(["./core","./enc-base64","./md5","./evpkdf","./cipher-core"],e):e(d.CryptoJS)}(this,function(a){return function(){function b(){for(var a=this._S,b=this._i,c=this._j,d=0,e=0;4>e;e++){b=(b+1)%256,c=(c+a[b])%256;var f=a[b];a[b]=a[c],a[c]=f,d|=a[(a[b]+a[c])%256]<<24-8*e}return this._i=b,this._j=c,d}var c=a,d=c.lib,e=d.StreamCipher,f=c.algo,g=f.RC4=e.extend({_doReset:function(){for(var a=this._key,b=a.words,c=a.sigBytes,d=this._S=[],e=0;256>e;e++)d[e]=e;for(var e=0,f=0;256>e;e++){var g=e%c,h=b[g>>>2]>>>24-g%4*8&255;f=(f+d[e]+h)%256;var i=d[e];d[e]=d[f],d[f]=i}this._i=this._j=0},_doProcessBlock:function(a,c){a[c]^=b.call(this)},keySize:8,ivSize:0});c.RC4=e._createHelper(g);var h=f.RC4Drop=g.extend({cfg:g.cfg.extend({drop:192}),_doReset:function(){g._doReset.call(this);for(var a=this.cfg.drop;a>0;a--)b.call(this)}});c.RC4Drop=e._createHelper(h)}(),a.RC4})},{"./cipher-core":2,"./core":3,"./enc-base64":4,"./evpkdf":6,"./md5":11}],26:[function(a,b,c){!function(d,e){"object"==typeof c?b.exports=c=e(a("./core")):"function"==typeof define&&define.amd?define(["./core"],e):e(d.CryptoJS)}(this,function(a){return function(b){function c(a,b,c){return a^b^c}function d(a,b,c){return a&b|~a&c}function e(a,b,c){return(a|~b)^c}function f(a,b,c){return a&c|b&~c}function g(a,b,c){return a^(b|~c)}function h(a,b){return a<<b|a>>>32-b}var i=a,j=i.lib,k=j.WordArray,l=j.Hasher,m=i.algo,n=k.create([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8,3,10,14,4,9,15,8,1,2,7,0,6,13,11,5,12,1,9,11,10,0,8,12,4,13,3,7,15,14,5,6,2,4,0,5,9,7,12,2,10,14,1,3,8,11,6,15,13]),o=k.create([5,14,7,0,9,2,11,4,13,6,15,8,1,10,3,12,6,11,3,7,0,13,5,10,14,15,8,12,4,9,1,2,15,5,1,3,7,14,6,9,11,8,12,2,10,0,4,13,8,6,4,1,3,11,15,0,5,12,2,13,9,7,10,14,12,15,10,4,1,5,8,7,6,2,13,14,0,3,9,11]),p=k.create([11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8,7,6,8,13,11,9,7,15,7,12,15,9,11,7,13,12,11,13,6,7,14,9,13,15,14,8,13,6,5,12,7,5,11,12,14,15,14,15,9,8,9,14,5,6,8,6,5,12,9,15,5,11,6,8,13,12,5,12,13,14,11,8,5,6]),q=k.create([8,9,9,11,13,15,15,5,7,7,8,11,14,14,12,6,9,13,15,7,12,8,9,11,7,7,12,7,6,15,13,11,9,7,15,11,8,6,6,14,12,13,5,14,13,13,7,5,15,5,8,11,14,14,6,14,6,9,12,9,12,5,15,8,8,5,12,9,12,5,14,6,8,13,6,5,15,13,11,11]),r=k.create([0,1518500249,1859775393,2400959708,2840853838]),s=k.create([1352829926,1548603684,1836072691,2053994217,0]),t=m.RIPEMD160=l.extend({_doReset:function(){this._hash=k.create([1732584193,4023233417,2562383102,271733878,3285377520])},_doProcessBlock:function(a,b){for(var i=0;16>i;i++){var j=b+i,k=a[j];a[j]=16711935&(k<<8|k>>>24)|4278255360&(k<<24|k>>>8)}var l,m,t,u,v,w,x,y,z,A,B=this._hash.words,C=r.words,D=s.words,E=n.words,F=o.words,G=p.words,H=q.words;w=l=B[0],x=m=B[1],y=t=B[2],z=u=B[3],A=v=B[4];for(var I,i=0;80>i;i+=1)I=l+a[b+E[i]]|0,I+=16>i?c(m,t,u)+C[0]:32>i?d(m,t,u)+C[1]:48>i?e(m,t,u)+C[2]:64>i?f(m,t,u)+C[3]:g(m,t,u)+C[4],I=0|I,I=h(I,G[i]),I=I+v|0,l=v,v=u,u=h(t,10),t=m,m=I,I=w+a[b+F[i]]|0,I+=16>i?g(x,y,z)+D[0]:32>i?f(x,y,z)+D[1]:48>i?e(x,y,z)+D[2]:64>i?d(x,y,z)+D[3]:c(x,y,z)+D[4],I=0|I,I=h(I,H[i]),I=I+A|0,w=A,A=z,z=h(y,10),y=x,x=I;I=B[1]+t+z|0,B[1]=B[2]+u+A|0,B[2]=B[3]+v+w|0,B[3]=B[4]+l+x|0,B[4]=B[0]+m+y|0,B[0]=I},_doFinalize:function(){var a=this._data,b=a.words,c=8*this._nDataBytes,d=8*a.sigBytes;b[d>>>5]|=128<<24-d%32,b[(d+64>>>9<<4)+14]=16711935&(c<<8|c>>>24)|4278255360&(c<<24|c>>>8),a.sigBytes=4*(b.length+1),this._process();for(var e=this._hash,f=e.words,g=0;5>g;g++){var h=f[g];f[g]=16711935&(h<<8|h>>>24)|4278255360&(h<<24|h>>>8)}return e},clone:function(){var a=l.clone.call(this);return a._hash=this._hash.clone(),a}});i.RIPEMD160=l._createHelper(t),i.HmacRIPEMD160=l._createHmacHelper(t)}(Math),a.RIPEMD160})},{"./core":3}],27:[function(a,b,c){!function(d,e){"object"==typeof c?b.exports=c=e(a("./core")):"function"==typeof define&&define.amd?define(["./core"],e):e(d.CryptoJS)}(this,function(a){return function(){var b=a,c=b.lib,d=c.WordArray,e=c.Hasher,f=b.algo,g=[],h=f.SHA1=e.extend({_doReset:function(){this._hash=new d.init([1732584193,4023233417,2562383102,271733878,3285377520])},_doProcessBlock:function(a,b){for(var c=this._hash.words,d=c[0],e=c[1],f=c[2],h=c[3],i=c[4],j=0;80>j;j++){if(16>j)g[j]=0|a[b+j];else{var k=g[j-3]^g[j-8]^g[j-14]^g[j-16];g[j]=k<<1|k>>>31}var l=(d<<5|d>>>27)+i+g[j];l+=20>j?(e&f|~e&h)+1518500249:40>j?(e^f^h)+1859775393:60>j?(e&f|e&h|f&h)-1894007588:(e^f^h)-899497514,i=h,h=f,f=e<<30|e>>>2,e=d,d=l}c[0]=c[0]+d|0,c[1]=c[1]+e|0,c[2]=c[2]+f|0,c[3]=c[3]+h|0,c[4]=c[4]+i|0},_doFinalize:function(){var a=this._data,b=a.words,c=8*this._nDataBytes,d=8*a.sigBytes;return b[d>>>5]|=128<<24-d%32,b[(d+64>>>9<<4)+14]=Math.floor(c/4294967296),b[(d+64>>>9<<4)+15]=c,a.sigBytes=4*b.length,this._process(),this._hash},clone:function(){var a=e.clone.call(this);return a._hash=this._hash.clone(),a}});b.SHA1=e._createHelper(h),b.HmacSHA1=e._createHmacHelper(h)}(),a.SHA1})},{"./core":3}],28:[function(a,b,c){!function(d,e,f){"object"==typeof c?b.exports=c=e(a("./core"),a("./sha256")):"function"==typeof define&&define.amd?define(["./core","./sha256"],e):e(d.CryptoJS)}(this,function(a){return function(){var b=a,c=b.lib,d=c.WordArray,e=b.algo,f=e.SHA256,g=e.SHA224=f.extend({_doReset:function(){this._hash=new d.init([3238371032,914150663,812702999,4144912697,4290775857,1750603025,1694076839,3204075428])},_doFinalize:function(){var a=f._doFinalize.call(this);return a.sigBytes-=4,a}});b.SHA224=f._createHelper(g),b.HmacSHA224=f._createHmacHelper(g)}(),a.SHA224})},{"./core":3,"./sha256":29}],29:[function(a,b,c){!function(d,e){"object"==typeof c?b.exports=c=e(a("./core")):"function"==typeof define&&define.amd?define(["./core"],e):e(d.CryptoJS)}(this,function(a){return function(b){var c=a,d=c.lib,e=d.WordArray,f=d.Hasher,g=c.algo,h=[],i=[];!function(){function a(a){for(var c=b.sqrt(a),d=2;c>=d;d++)if(!(a%d))return!1;return!0}function c(a){return 4294967296*(a-(0|a))|0}for(var d=2,e=0;64>e;)a(d)&&(8>e&&(h[e]=c(b.pow(d,.5))),i[e]=c(b.pow(d,1/3)),e++),d++}();var j=[],k=g.SHA256=f.extend({_doReset:function(){this._hash=new e.init(h.slice(0))},_doProcessBlock:function(a,b){for(var c=this._hash.words,d=c[0],e=c[1],f=c[2],g=c[3],h=c[4],k=c[5],l=c[6],m=c[7],n=0;64>n;n++){if(16>n)j[n]=0|a[b+n];else{var o=j[n-15],p=(o<<25|o>>>7)^(o<<14|o>>>18)^o>>>3,q=j[n-2],r=(q<<15|q>>>17)^(q<<13|q>>>19)^q>>>10;j[n]=p+j[n-7]+r+j[n-16]}var s=h&k^~h&l,t=d&e^d&f^e&f,u=(d<<30|d>>>2)^(d<<19|d>>>13)^(d<<10|d>>>22),v=(h<<26|h>>>6)^(h<<21|h>>>11)^(h<<7|h>>>25),w=m+v+s+i[n]+j[n],x=u+t;m=l,l=k,k=h,h=g+w|0,g=f,f=e,e=d,d=w+x|0}c[0]=c[0]+d|0,c[1]=c[1]+e|0,c[2]=c[2]+f|0,c[3]=c[3]+g|0,c[4]=c[4]+h|0,c[5]=c[5]+k|0,c[6]=c[6]+l|0,c[7]=c[7]+m|0},_doFinalize:function(){var a=this._data,c=a.words,d=8*this._nDataBytes,e=8*a.sigBytes;return c[e>>>5]|=128<<24-e%32,c[(e+64>>>9<<4)+14]=b.floor(d/4294967296),c[(e+64>>>9<<4)+15]=d,a.sigBytes=4*c.length,this._process(),this._hash},clone:function(){var a=f.clone.call(this);return a._hash=this._hash.clone(),a}});c.SHA256=f._createHelper(k),c.HmacSHA256=f._createHmacHelper(k)}(Math),a.SHA256})},{"./core":3}],30:[function(a,b,c){!function(d,e,f){"object"==typeof c?b.exports=c=e(a("./core"),a("./x64-core")):"function"==typeof define&&define.amd?define(["./core","./x64-core"],e):e(d.CryptoJS)}(this,function(a){return function(b){var c=a,d=c.lib,e=d.WordArray,f=d.Hasher,g=c.x64,h=g.Word,i=c.algo,j=[],k=[],l=[];!function(){for(var a=1,b=0,c=0;24>c;c++){j[a+5*b]=(c+1)*(c+2)/2%64;var d=b%5,e=(2*a+3*b)%5;a=d,b=e}for(var a=0;5>a;a++)for(var b=0;5>b;b++)k[a+5*b]=b+(2*a+3*b)%5*5;for(var f=1,g=0;24>g;g++){for(var i=0,m=0,n=0;7>n;n++){if(1&f){var o=(1<<n)-1;32>o?m^=1<<o:i^=1<<o-32}128&f?f=f<<1^113:f<<=1}l[g]=h.create(i,m)}}();var m=[];!function(){for(var a=0;25>a;a++)m[a]=h.create()}();var n=i.SHA3=f.extend({cfg:f.cfg.extend({outputLength:512}),_doReset:function(){for(var a=this._state=[],b=0;25>b;b++)a[b]=new h.init;this.blockSize=(1600-2*this.cfg.outputLength)/32},_doProcessBlock:function(a,b){for(var c=this._state,d=this.blockSize/2,e=0;d>e;e++){var f=a[b+2*e],g=a[b+2*e+1];f=16711935&(f<<8|f>>>24)|4278255360&(f<<24|f>>>8),g=16711935&(g<<8|g>>>24)|4278255360&(g<<24|g>>>8);var h=c[e];h.high^=g,h.low^=f}for(var i=0;24>i;i++){for(var n=0;5>n;n++){for(var o=0,p=0,q=0;5>q;q++){var h=c[n+5*q];o^=h.high,p^=h.low}var r=m[n];r.high=o,r.low=p}for(var n=0;5>n;n++)for(var s=m[(n+4)%5],t=m[(n+1)%5],u=t.high,v=t.low,o=s.high^(u<<1|v>>>31),p=s.low^(v<<1|u>>>31),q=0;5>q;q++){var h=c[n+5*q];h.high^=o,h.low^=p}for(var w=1;25>w;w++){var h=c[w],x=h.high,y=h.low,z=j[w];if(32>z)var o=x<<z|y>>>32-z,p=y<<z|x>>>32-z;else var o=y<<z-32|x>>>64-z,p=x<<z-32|y>>>64-z;var A=m[k[w]];A.high=o,A.low=p}var B=m[0],C=c[0];B.high=C.high,B.low=C.low;for(var n=0;5>n;n++)for(var q=0;5>q;q++){var w=n+5*q,h=c[w],D=m[w],E=m[(n+1)%5+5*q],F=m[(n+2)%5+5*q];h.high=D.high^~E.high&F.high,h.low=D.low^~E.low&F.low}var h=c[0],G=l[i];h.high^=G.high,h.low^=G.low}},_doFinalize:function(){var a=this._data,c=a.words,d=(8*this._nDataBytes,8*a.sigBytes),f=32*this.blockSize;c[d>>>5]|=1<<24-d%32,c[(b.ceil((d+1)/f)*f>>>5)-1]|=128,a.sigBytes=4*c.length,this._process();for(var g=this._state,h=this.cfg.outputLength/8,i=h/8,j=[],k=0;i>k;k++){var l=g[k],m=l.high,n=l.low;m=16711935&(m<<8|m>>>24)|4278255360&(m<<24|m>>>8),n=16711935&(n<<8|n>>>24)|4278255360&(n<<24|n>>>8),j.push(n),j.push(m)}return new e.init(j,h)},clone:function(){for(var a=f.clone.call(this),b=a._state=this._state.slice(0),c=0;25>c;c++)b[c]=b[c].clone();return a}});c.SHA3=f._createHelper(n),c.HmacSHA3=f._createHmacHelper(n)}(Math),a.SHA3})},{"./core":3,"./x64-core":35}],31:[function(a,b,c){!function(d,e,f){"object"==typeof c?b.exports=c=e(a("./core"),a("./x64-core"),a("./sha512")):"function"==typeof define&&define.amd?define(["./core","./x64-core","./sha512"],e):e(d.CryptoJS)}(this,function(a){return function(){var b=a,c=b.x64,d=c.Word,e=c.WordArray,f=b.algo,g=f.SHA512,h=f.SHA384=g.extend({_doReset:function(){this._hash=new e.init([new d.init(3418070365,3238371032),new d.init(1654270250,914150663),new d.init(2438529370,812702999),new d.init(355462360,4144912697),new d.init(1731405415,4290775857),new d.init(2394180231,1750603025),new d.init(3675008525,1694076839),new d.init(1203062813,3204075428)])},_doFinalize:function(){var a=g._doFinalize.call(this);return a.sigBytes-=16,a}});b.SHA384=g._createHelper(h),b.HmacSHA384=g._createHmacHelper(h)}(),a.SHA384})},{"./core":3,"./sha512":32,"./x64-core":35}],32:[function(a,b,c){!function(d,e,f){"object"==typeof c?b.exports=c=e(a("./core"),a("./x64-core")):"function"==typeof define&&define.amd?define(["./core","./x64-core"],e):e(d.CryptoJS)}(this,function(a){return function(){function b(){return g.create.apply(g,arguments)}var c=a,d=c.lib,e=d.Hasher,f=c.x64,g=f.Word,h=f.WordArray,i=c.algo,j=[b(1116352408,3609767458),b(1899447441,602891725),b(3049323471,3964484399),b(3921009573,2173295548),b(961987163,4081628472),b(1508970993,3053834265),b(2453635748,2937671579),b(2870763221,3664609560),b(3624381080,2734883394),b(310598401,1164996542),b(607225278,1323610764),b(1426881987,3590304994),b(1925078388,4068182383),b(2162078206,991336113),b(2614888103,633803317),b(3248222580,3479774868),b(3835390401,2666613458),b(4022224774,944711139),b(264347078,2341262773),b(604807628,2007800933),b(770255983,1495990901),b(1249150122,1856431235),b(1555081692,3175218132),b(1996064986,2198950837),b(2554220882,3999719339),b(2821834349,766784016),b(2952996808,2566594879),b(3210313671,3203337956),b(3336571891,1034457026),b(3584528711,2466948901),b(113926993,3758326383),b(338241895,168717936),b(666307205,1188179964),b(773529912,1546045734),b(1294757372,1522805485),b(1396182291,2643833823),b(1695183700,2343527390),b(1986661051,1014477480),b(2177026350,1206759142),b(2456956037,344077627),b(2730485921,1290863460),b(2820302411,3158454273),b(3259730800,3505952657),b(3345764771,106217008),b(3516065817,3606008344),b(3600352804,1432725776),b(4094571909,1467031594),b(275423344,851169720),b(430227734,3100823752),b(506948616,1363258195),b(659060556,3750685593),b(883997877,3785050280),b(958139571,3318307427),b(1322822218,3812723403),b(1537002063,2003034995),b(1747873779,3602036899),b(1955562222,1575990012),b(2024104815,1125592928),b(2227730452,2716904306),b(2361852424,442776044),b(2428436474,593698344),b(2756734187,3733110249),b(3204031479,2999351573),b(3329325298,3815920427),b(3391569614,3928383900),b(3515267271,566280711),b(3940187606,3454069534),b(4118630271,4000239992),b(116418474,1914138554),b(174292421,2731055270),b(289380356,3203993006),b(460393269,320620315),b(685471733,587496836),b(852142971,1086792851),b(1017036298,365543100),b(1126000580,2618297676),b(1288033470,3409855158),b(1501505948,4234509866),b(1607167915,987167468),b(1816402316,1246189591)],k=[];!function(){for(var a=0;80>a;a++)k[a]=b()}();var l=i.SHA512=e.extend({_doReset:function(){this._hash=new h.init([new g.init(1779033703,4089235720),new g.init(3144134277,2227873595),new g.init(1013904242,4271175723),new g.init(2773480762,1595750129),new g.init(1359893119,2917565137),new g.init(2600822924,725511199),new g.init(528734635,4215389547),new g.init(1541459225,327033209)])},_doProcessBlock:function(a,b){for(var c=this._hash.words,d=c[0],e=c[1],f=c[2],g=c[3],h=c[4],i=c[5],l=c[6],m=c[7],n=d.high,o=d.low,p=e.high,q=e.low,r=f.high,s=f.low,t=g.high,u=g.low,v=h.high,w=h.low,x=i.high,y=i.low,z=l.high,A=l.low,B=m.high,C=m.low,D=n,E=o,F=p,G=q,H=r,I=s,J=t,K=u,L=v,M=w,N=x,O=y,P=z,Q=A,R=B,S=C,T=0;80>T;T++){var U=k[T];if(16>T)var V=U.high=0|a[b+2*T],W=U.low=0|a[b+2*T+1];else{var X=k[T-15],Y=X.high,Z=X.low,$=(Y>>>1|Z<<31)^(Y>>>8|Z<<24)^Y>>>7,_=(Z>>>1|Y<<31)^(Z>>>8|Y<<24)^(Z>>>7|Y<<25),aa=k[T-2],ba=aa.high,ca=aa.low,da=(ba>>>19|ca<<13)^(ba<<3|ca>>>29)^ba>>>6,ea=(ca>>>19|ba<<13)^(ca<<3|ba>>>29)^(ca>>>6|ba<<26),fa=k[T-7],ga=fa.high,ha=fa.low,ia=k[T-16],ja=ia.high,ka=ia.low,W=_+ha,V=$+ga+(_>>>0>W>>>0?1:0),W=W+ea,V=V+da+(ea>>>0>W>>>0?1:0),W=W+ka,V=V+ja+(ka>>>0>W>>>0?1:0);U.high=V,U.low=W}var la=L&N^~L&P,ma=M&O^~M&Q,na=D&F^D&H^F&H,oa=E&G^E&I^G&I,pa=(D>>>28|E<<4)^(D<<30|E>>>2)^(D<<25|E>>>7),qa=(E>>>28|D<<4)^(E<<30|D>>>2)^(E<<25|D>>>7),ra=(L>>>14|M<<18)^(L>>>18|M<<14)^(L<<23|M>>>9),sa=(M>>>14|L<<18)^(M>>>18|L<<14)^(M<<23|L>>>9),ta=j[T],ua=ta.high,va=ta.low,wa=S+sa,xa=R+ra+(S>>>0>wa>>>0?1:0),wa=wa+ma,xa=xa+la+(ma>>>0>wa>>>0?1:0),wa=wa+va,xa=xa+ua+(va>>>0>wa>>>0?1:0),wa=wa+W,xa=xa+V+(W>>>0>wa>>>0?1:0),ya=qa+oa,za=pa+na+(qa>>>0>ya>>>0?1:0);R=P,S=Q,P=N,Q=O,N=L,O=M,M=K+wa|0,L=J+xa+(K>>>0>M>>>0?1:0)|0,J=H,K=I,H=F,I=G,F=D,G=E,E=wa+ya|0,D=xa+za+(wa>>>0>E>>>0?1:0)|0}o=d.low=o+E,d.high=n+D+(E>>>0>o>>>0?1:0),q=e.low=q+G,e.high=p+F+(G>>>0>q>>>0?1:0),s=f.low=s+I,f.high=r+H+(I>>>0>s>>>0?1:0),u=g.low=u+K,g.high=t+J+(K>>>0>u>>>0?1:0),w=h.low=w+M,h.high=v+L+(M>>>0>w>>>0?1:0),y=i.low=y+O,i.high=x+N+(O>>>0>y>>>0?1:0),A=l.low=A+Q,l.high=z+P+(Q>>>0>A>>>0?1:0),C=m.low=C+S,m.high=B+R+(S>>>0>C>>>0?1:0)},_doFinalize:function(){var a=this._data,b=a.words,c=8*this._nDataBytes,d=8*a.sigBytes;b[d>>>5]|=128<<24-d%32,b[(d+128>>>10<<5)+30]=Math.floor(c/4294967296),b[(d+128>>>10<<5)+31]=c,a.sigBytes=4*b.length,this._process();var e=this._hash.toX32();return e},clone:function(){var a=e.clone.call(this);return a._hash=this._hash.clone(),a},blockSize:32});c.SHA512=e._createHelper(l),c.HmacSHA512=e._createHmacHelper(l)}(),a.SHA512})},{"./core":3,"./x64-core":35}],33:[function(a,b,c){cryptojs=a("crypto-js")},{"crypto-js":9}],34:[function(a,b,c){!function(d,e,f){"object"==typeof c?b.exports=c=e(a("./core"),a("./enc-base64"),a("./md5"),a("./evpkdf"),a("./cipher-core")):"function"==typeof define&&define.amd?define(["./core","./enc-base64","./md5","./evpkdf","./cipher-core"],e):e(d.CryptoJS)}(this,function(a){return function(){function b(a,b){var c=(this._lBlock>>>a^this._rBlock)&b;this._rBlock^=c,this._lBlock^=c<<a}function c(a,b){var c=(this._rBlock>>>a^this._lBlock)&b;this._lBlock^=c,this._rBlock^=c<<a}var d=a,e=d.lib,f=e.WordArray,g=e.BlockCipher,h=d.algo,i=[57,49,41,33,25,17,9,1,58,50,42,34,26,18,10,2,59,51,43,35,27,19,11,3,60,52,44,36,63,55,47,39,31,23,15,7,62,54,46,38,30,22,14,6,61,53,45,37,29,21,13,5,28,20,12,4],j=[14,17,11,24,1,5,3,28,15,6,21,10,23,19,12,4,26,8,16,7,27,20,13,2,41,52,31,37,47,55,30,40,51,45,33,48,44,49,39,56,34,53,46,42,50,36,29,32],k=[1,2,4,6,8,10,12,14,15,17,19,21,23,25,27,28],l=[{0:8421888,268435456:32768,536870912:8421378,805306368:2,1073741824:512,1342177280:8421890,1610612736:8389122,1879048192:8388608,2147483648:514,2415919104:8389120,2684354560:33280,2952790016:8421376,3221225472:32770,3489660928:8388610,3758096384:0,4026531840:33282,134217728:0,402653184:8421890,671088640:33282,939524096:32768,1207959552:8421888,1476395008:512,1744830464:8421378,2013265920:2,2281701376:8389120,2550136832:33280,2818572288:8421376,3087007744:8389122,3355443200:8388610,3623878656:32770,3892314112:514,4160749568:8388608,1:32768,268435457:2,536870913:8421888,805306369:8388608,1073741825:8421378,1342177281:33280,1610612737:512,1879048193:8389122,2147483649:8421890,2415919105:8421376,2684354561:8388610,2952790017:33282,3221225473:514,3489660929:8389120,3758096385:32770,4026531841:0,134217729:8421890,402653185:8421376,671088641:8388608,939524097:512,1207959553:32768,1476395009:8388610,1744830465:2,2013265921:33282,2281701377:32770,2550136833:8389122,2818572289:514,3087007745:8421888,3355443201:8389120,3623878657:0,3892314113:33280,4160749569:8421378},{0:1074282512,16777216:16384,33554432:524288,50331648:1074266128,67108864:1073741840,83886080:1074282496,100663296:1073758208,117440512:16,134217728:540672,150994944:1073758224,167772160:1073741824,184549376:540688,201326592:524304,218103808:0,234881024:16400,251658240:1074266112,8388608:1073758208,25165824:540688,41943040:16,58720256:1073758224,75497472:1074282512,92274688:1073741824,109051904:524288,125829120:1074266128,142606336:524304,159383552:0,176160768:16384,192937984:1074266112,209715200:1073741840,226492416:540672,243269632:1074282496,260046848:16400,268435456:0,285212672:1074266128,301989888:1073758224,318767104:1074282496,335544320:1074266112,352321536:16,369098752:540688,385875968:16384,402653184:16400,419430400:524288,436207616:524304,452984832:1073741840,469762048:540672,486539264:1073758208,503316480:1073741824,520093696:1074282512,276824064:540688,293601280:524288,310378496:1074266112,327155712:16384,343932928:1073758208,360710144:1074282512,377487360:16,394264576:1073741824,411041792:1074282496,427819008:1073741840,444596224:1073758224,461373440:524304,478150656:0,494927872:16400,511705088:1074266128,528482304:540672},{0:260,1048576:0,2097152:67109120,3145728:65796,4194304:65540,5242880:67108868,6291456:67174660,7340032:67174400,8388608:67108864,9437184:67174656,10485760:65792,11534336:67174404,12582912:67109124,13631488:65536,14680064:4,15728640:256,524288:67174656,1572864:67174404,2621440:0,3670016:67109120,4718592:67108868,5767168:65536,6815744:65540,7864320:260,8912896:4,9961472:256,11010048:67174400,12058624:65796,13107200:65792,14155776:67109124,15204352:67174660,16252928:67108864,16777216:67174656,17825792:65540,18874368:65536,19922944:67109120,20971520:256,22020096:67174660,23068672:67108868,24117248:0,25165824:67109124,26214400:67108864,27262976:4,28311552:65792,29360128:67174400,30408704:260,31457280:65796,32505856:67174404,17301504:67108864,18350080:260,19398656:67174656,20447232:0,21495808:65540,22544384:67109120,23592960:256,24641536:67174404,25690112:65536,26738688:67174660,27787264:65796,28835840:67108868,29884416:67109124,30932992:67174400,31981568:4,33030144:65792},{0:2151682048,65536:2147487808,131072:4198464,196608:2151677952,262144:0,327680:4198400,393216:2147483712,458752:4194368,524288:2147483648,589824:4194304,655360:64,720896:2147487744,786432:2151678016,851968:4160,917504:4096,983040:2151682112,32768:2147487808,98304:64,163840:2151678016,229376:2147487744,294912:4198400,360448:2151682112,425984:0,491520:2151677952,557056:4096,622592:2151682048,688128:4194304,753664:4160,819200:2147483648,884736:4194368,950272:4198464,1015808:2147483712,1048576:4194368,1114112:4198400,1179648:2147483712,1245184:0,1310720:4160,1376256:2151678016,1441792:2151682048,1507328:2147487808,1572864:2151682112,1638400:2147483648,1703936:2151677952,1769472:4198464,1835008:2147487744,1900544:4194304,1966080:64,2031616:4096,1081344:2151677952,1146880:2151682112,1212416:0,1277952:4198400,1343488:4194368,1409024:2147483648,1474560:2147487808,1540096:64,1605632:2147483712,1671168:4096,1736704:2147487744,1802240:2151678016,1867776:4160,1933312:2151682048,1998848:4194304,2064384:4198464},{0:128,4096:17039360,8192:262144,12288:536870912,16384:537133184,20480:16777344,24576:553648256,28672:262272,32768:16777216,36864:537133056,40960:536871040,45056:553910400,49152:553910272,53248:0,57344:17039488,61440:553648128,2048:17039488,6144:553648256,10240:128,14336:17039360,18432:262144,22528:537133184,26624:553910272,30720:536870912,34816:537133056,38912:0,43008:553910400,47104:16777344,51200:536871040,55296:553648128,59392:16777216,63488:262272,65536:262144,69632:128,73728:536870912,77824:553648256,81920:16777344,86016:553910272,90112:537133184,94208:16777216,98304:553910400,102400:553648128,106496:17039360,110592:537133056,114688:262272,118784:536871040,122880:0,126976:17039488,67584:553648256,71680:16777216,75776:17039360,79872:537133184,83968:536870912,88064:17039488,92160:128,96256:553910272,100352:262272,104448:553910400,108544:0,112640:553648128,116736:16777344,120832:262144,124928:537133056,129024:536871040},{0:268435464,256:8192,512:270532608,768:270540808,1024:268443648,1280:2097152,1536:2097160,1792:268435456,2048:0,2304:268443656,2560:2105344,2816:8,3072:270532616,3328:2105352,3584:8200,3840:270540800,128:270532608,384:270540808,640:8,896:2097152,1152:2105352,1408:268435464,1664:268443648,1920:8200,2176:2097160,2432:8192,2688:268443656,2944:270532616,3200:0,3456:270540800,3712:2105344,3968:268435456,4096:268443648,4352:270532616,4608:270540808,4864:8200,5120:2097152,5376:268435456,5632:268435464,5888:2105344,6144:2105352,6400:0,6656:8,6912:270532608,7168:8192,7424:268443656,7680:270540800,7936:2097160,4224:8,4480:2105344,4736:2097152,4992:268435464,5248:268443648,5504:8200,5760:270540808,6016:270532608,6272:270540800,6528:270532616,6784:8192,7040:2105352,7296:2097160,7552:0,7808:268435456,8064:268443656},{0:1048576,16:33555457,32:1024,48:1049601,64:34604033,80:0,96:1,112:34603009,128:33555456,144:1048577,160:33554433,176:34604032,192:34603008,208:1025,224:1049600,240:33554432,8:34603009,24:0,40:33555457,56:34604032,72:1048576,88:33554433,104:33554432,120:1025,136:1049601,152:33555456,168:34603008,184:1048577,200:1024,216:34604033,232:1,248:1049600,256:33554432,272:1048576,288:33555457,304:34603009,320:1048577,336:33555456,352:34604032,368:1049601,384:1025,400:34604033,416:1049600,432:1,448:0,464:34603008,480:33554433,496:1024,264:1049600,280:33555457,296:34603009,312:1,328:33554432,344:1048576,360:1025,376:34604032,392:33554433,408:34603008,424:0,440:34604033,456:1049601,472:1024,488:33555456,504:1048577},{0:134219808,1:131072,2:134217728,3:32,4:131104,5:134350880,6:134350848,7:2048,8:134348800,9:134219776,10:133120,11:134348832,12:2080,13:0,14:134217760,15:133152,2147483648:2048,2147483649:134350880,2147483650:134219808,2147483651:134217728,2147483652:134348800,2147483653:133120,2147483654:133152,2147483655:32,2147483656:134217760,2147483657:2080,2147483658:131104,2147483659:134350848,2147483660:0,2147483661:134348832,2147483662:134219776,2147483663:131072,16:133152,17:134350848,18:32,19:2048,20:134219776,21:134217760,22:134348832,23:131072,24:0,25:131104,26:134348800,27:134219808,28:134350880,29:133120,30:2080,31:134217728,2147483664:131072,2147483665:2048,2147483666:134348832,2147483667:133152,2147483668:32,2147483669:134348800,2147483670:134217728,2147483671:134219808,2147483672:134350880,2147483673:134217760,2147483674:134219776,2147483675:0,2147483676:133120,2147483677:2080,2147483678:131104,2147483679:134350848}],m=[4160749569,528482304,33030144,2064384,129024,8064,504,2147483679],n=h.DES=g.extend({_doReset:function(){for(var a=this._key,b=a.words,c=[],d=0;56>d;d++){var e=i[d]-1;c[d]=b[e>>>5]>>>31-e%32&1}for(var f=this._subKeys=[],g=0;16>g;g++){for(var h=f[g]=[],l=k[g],d=0;24>d;d++)h[d/6|0]|=c[(j[d]-1+l)%28]<<31-d%6,h[4+(d/6|0)]|=c[28+(j[d+24]-1+l)%28]<<31-d%6;h[0]=h[0]<<1|h[0]>>>31;for(var d=1;7>d;d++)h[d]=h[d]>>>4*(d-1)+3;h[7]=h[7]<<5|h[7]>>>27}for(var m=this._invSubKeys=[],d=0;16>d;d++)m[d]=f[15-d]},encryptBlock:function(a,b){this._doCryptBlock(a,b,this._subKeys)},decryptBlock:function(a,b){this._doCryptBlock(a,b,this._invSubKeys)},_doCryptBlock:function(a,d,e){this._lBlock=a[d],this._rBlock=a[d+1],b.call(this,4,252645135),b.call(this,16,65535),c.call(this,2,858993459),c.call(this,8,16711935),b.call(this,1,1431655765);for(var f=0;16>f;f++){for(var g=e[f],h=this._lBlock,i=this._rBlock,j=0,k=0;8>k;k++)j|=l[k][((i^g[k])&m[k])>>>0];this._lBlock=i,this._rBlock=h^j}var n=this._lBlock;this._lBlock=this._rBlock,this._rBlock=n,b.call(this,1,1431655765),c.call(this,8,16711935),c.call(this,2,858993459),b.call(this,16,65535),b.call(this,4,252645135),a[d]=this._lBlock,a[d+1]=this._rBlock},keySize:2,ivSize:2,blockSize:2});d.DES=g._createHelper(n);var o=h.TripleDES=g.extend({_doReset:function(){var a=this._key,b=a.words;this._des1=n.createEncryptor(f.create(b.slice(0,2))),this._des2=n.createEncryptor(f.create(b.slice(2,4))),this._des3=n.createEncryptor(f.create(b.slice(4,6)))},encryptBlock:function(a,b){this._des1.encryptBlock(a,b),this._des2.decryptBlock(a,b),this._des3.encryptBlock(a,b)},decryptBlock:function(a,b){this._des3.decryptBlock(a,b),this._des2.encryptBlock(a,b),this._des1.decryptBlock(a,b)},keySize:6,ivSize:2,blockSize:2});d.TripleDES=g._createHelper(o)}(),a.TripleDES})},{"./cipher-core":2,"./core":3,"./enc-base64":4,"./evpkdf":6,"./md5":11}],35:[function(a,b,c){!function(d,e){"object"==typeof c?b.exports=c=e(a("./core")):"function"==typeof define&&define.amd?define(["./core"],e):e(d.CryptoJS)}(this,function(a){return function(b){var c=a,d=c.lib,e=d.Base,f=d.WordArray,g=c.x64={};g.Word=e.extend({init:function(a,b){this.high=a,this.low=b}}),g.WordArray=e.extend({init:function(a,c){a=this.words=a||[],c!=b?this.sigBytes=c:this.sigBytes=8*a.length},toX32:function(){for(var a=this.words,b=a.length,c=[],d=0;b>d;d++){var e=a[d];c.push(e.high),c.push(e.low)}return f.create(c,this.sigBytes)},clone:function(){for(var a=e.clone.call(this),b=a.words=this.words.slice(0),c=b.length,d=0;c>d;d++)b[d]=b[d].clone();return a}})}(),a})},{"./core":3}]},{},[33]);/////////////////////////////////////////////////////////////////
  ///
  /*TODO:
  function hmac(encmsg){
  var hash = CryptoJS.HmacSHA256(encmsg, password);
  return  CryptoJS.enc.Base64.stringify(hash);

  }
  function checkHmac(..){
    return true || false;
  }

  */
  ///
  ///
  const CHAR = 's';
  var debug = true ? console.log.bind(console) : function() {};
  //////////////////////////////////////////////////////////////////////////////////////
  /// TODO: Use background scripts to get password and prefixcommand
  var className = 'c-message__body';
  var searchClassName = 'message_body';
  var prefixCommand = "@@@@";
  var hmacPrefix = '####';
  var launchDialog;
  var passes = {
    personalKey: null, //if personalKey !== null enc/dec
    passphrases: { },
    currentKey: null,
    get: function get(key) {
      if (this.personalKey) {
        return decrypt(cryptojs.this.passphrases[key], this.personalKey);
      } else
        return this.passphrases[key];
    },
    set: function set(key, pass) {
      if (!pass) return;
      if (this.personalKey) {
        this.passphrases[key] = encrypt(cryptojs.this.passphrases[key], this.personalKey);
      } else
        this.passphrases[key] = pass;
      this.saveOnStorage();
    },
    remove: function remove(key) {
      delete this.passphrases[key];
      this.saveOnStorage();
    },
    hasKey: function(key) {
      return this.passphrases.hasOwnProperty(key);
    },
    setCurrentKey: function(key) {
      if (this.hasKey(key)) {
        this.currentKey = key;
        this.saveOnStorage();
      }
    },
    getCurrentKey: function(key) {
      if (this.currentKey != null) {
        return this.currentKey;
      }else if(this.getKeys().length>0){
        this.setCurrentKey(this.getKeys()[0]);
        return this.currentKey;
      } else {
        return null;
      }
    },
    getCurrentValue: function() {
      return this.get(this.currentKey)
    },
    getKeys: function getKeys() {
      return Object.keys(this.passphrases)
    },
    serializePassObject: function (obj){
      obj = obj || this;
      return btoa(JSON.stringify({
        passphrases: obj.passphrases,
        currentKey: obj.currentKey
      }));
    },
    deSerializePassObject: function (serialized, toObj){
      toObj = toObj || this;
      if (serialized) {
        try{
         serialized = atob(serialized)
        }catch(e){};
        var obj = JSON.parse(serialized);
        if (Object.keys(obj.passphrases).length > 0) {
          toObj.passphrases = obj.passphrases;
          toObj.currentKey = obj.currentKey;
        }
      }
    },
    loadFromStorage: function loadFromStorage(text) {
      var saved_passes = text||localStorage.shhlack_passes;
      this.deSerializePassObject(saved_passes);
    },
    saveOnStorage: function saveOnStorage() {
      localStorage.shhlack_passes = this.serializePassObject();
    }
  };
  function is_slack_app(){
    return !!document.querySelector('#team_menu');
  }
  function signToHex(message,pass) {
      return cryptojs.HmacSHA256(message, pass)+'';
  }

  var shouldBeTreated = function(msg) {
    return msg.indexOf(prefixCommand) !== -1;
  }
  var is_message = function(el) {
    return (el.className.indexOf(className)!== -1 || el.className.indexOf(searchClassName)!== -1) && shouldBeTreated(el.textContent);
  }

  var decrypt = function(msg, pass) {
    if (typeof msg !== 'string')
      return null;

    if (!pass) {
      pass = passes.getCurrentValue();
    }
    var t = cryptojs.AES.decrypt(msg, pass).toString(cryptojs.enc.Utf8)
    return t;
    return atob(msg);
  }
  var encrypt = function(msg, pass) {
    try {
      if (!pass) {
        pass = passes.getCurrentValue();
      }
      var t = cryptojs.AES.encrypt(msg, pass).toString();
      return t;
      return btoa(msg.replace(prefixCommand, ""));
    } catch (e) {
      return msg;
    }
  }

  function checkHmac(hmac, origMsg, pass) {
    return hmac === signToHex(origMsg, pass)
  }

  var parseEncryptedMsg = function(msg) {
    /// Format could be with or without title
    /// msg === '@@@@content####HMAC' < no title
    /// msg === 'title@@@@content####HMAC'
    var hmacpos = msg.lastIndexOf(hmacPrefix);
    if (hmacpos === -1)
      throw Error("HMAC");

    var origMsg = msg.substr(0, hmacpos);

    var hmac = msg.substr(hmacpos + hmacPrefix.length);
    var pass,
      foundKey;
    passes.getKeys().some(function(key) {
      if (checkHmac(hmac, origMsg, passes.get(key))) {
        pass = passes.get(key);
        foundKey = key;
        return true;
      }
    });
    if (!pass)
      throw Error("HMAC");

    var pos = origMsg.indexOf(prefixCommand);

    return {
      title: origMsg.substr(0, pos),
      foundKey: foundKey,
      content: origMsg.substr(pos + prefixCommand.length)
    };
  }
  var parseMsg = function(msg) {
    /// Format could be with or without title
    /// msg === '@@@@content' < no title
    /// msg === 'title@@@@content'
    var pos = msg.indexOf(prefixCommand);
    return {
      title: msg.substr(0, pos),
      content: msg.substr(pos + prefixCommand.length)
    };
  }

  var decrypt_msg = function decrypt_msg(msg, format) {
    try {
      var parsed = parseEncryptedMsg(msg);

      var dec_msg = decrypt(parsed.content.replace(prefixCommand, ""), passes.get(parsed.foundKey));
      if (format) {
        dec_msg = TS.format.formatJustText(parsed.title + "\n *Encrypted: (" + parsed.foundKey + ")* \n```" + dec_msg.replace(/`/g, "&#x60;") + "```")
      }
      debug("Decrypting msg", dec_msg);
      return dec_msg;
    } catch (e) {
      console.error(e);
      return msg;
    }
  }

  var encrypt_msg = function encrypt_msg(msg) {
    var parsed = parseMsg(msg);
    var enc_msg = encrypt(parsed.content.replace(prefixCommand, ""));
    var message = parsed.title + prefixCommand + enc_msg
    return message + hmacPrefix + signToHex(message, passes.getCurrentValue());
  }

  // Expecting msg={title: "title", content:"content"}
  function sendEncryptedMessage(msg) {
    TS.client.ui.onSubmit(msg.title + prefixCommand + msg.content);
  }
  ///////////////////////////////////////////////////////////
  window.addEventListener("SHHLACK:MSG", function(ev) {
    if(!is_slack_app())
      return;
    var msg = JSON.parse(ev.detail);
    sendEncryptedMessage(msg);
  });
  window.addEventListener("SHHLACK:CREATEMSG", function(ev) {
    if(!is_slack_app())
      return;
    launchDialog();
  });
  var setContent = function(el, msg) {
    el.innerHTML = decrypt_msg(msg, true);
  //el.textContent = decrypt_msg(msg);
  }

  var find_and_decrypt = function(el) {
    if (is_message(el))
      setContent(el, el.textContent)
    var foundmsgs = el.querySelectorAll("." + className + ', .'+searchClassName);
    [].forEach.call(foundmsgs, function(el) {
      //debug("Found", el.textContent);
      // TODO to format post decrypted msgs use
      //TS.format.formatJustText('```cccc````')?
      if (el.textContent.indexOf(prefixCommand) !== -1)
        console.log(el.textContent, el.className, "!!!!!!!!!!!")
      if (is_message(el)) {
        setContent(el, el.textContent)
      }
    });
  }

  var patch_for_encrypt = function() { // Wrapping TS.client.ui.onSubmit
    if (typeof TS !== 'undefined' && TS.client && TS.client.ui && TS.client.ui.onSubmit) {
      TS.client.ui.onSubmit = (function(orig_method) {
        return function(e) {
          if (shouldBeTreated(e)) {
            e = encrypt_msg(e);
          }
          orig_method.apply(TS.client.ui, arguments)
        }
      })(TS.client.ui.onSubmit)
    } else
      console.log("no slack TS.ui to patch");
  }


  function addShhlackIcon() {
    var html = `<style>
  #shhlack_icon{
      background:
              url(data:image/webp;base64,UklGRvwDAABXRUJQVlA4TO8DAAAvH8AHEE2Yads2plr7soj+x/5UEs3CMBtJfS7A+dMdxmY5TEWysQ8JJNA/ow81bSQ5U52OP74cqteD6H8AABRHR6Fr+w9POmVebjnIuW3b2N4FzQdfbNtWmfHVSeukttOmzUin+hvpbVW2O9u27eR53o/PfSPHtrZje/bzPr/N2GZpu8wg1CYTyHhS2rbtVLad/Hi/95Za27aqPfPchz8qsgwt/L+MjI9MXHpghh6iqQBSUamAFFlmpkdXCiwABFi9Odm27bi8tLRFb23VRlpWdFRbVF5a9JqNb94EIACKohaTKEEmAnGNEyxhF8qMQ4QDAEIQhEw0YbZMuAYAwDMeAQCQWxacAAB20AKIRyKWAQBfyoAxAEAz1Ite/AbAXhj6ADAJDaILoYAvYUgGfGC+IcAwACpCMAOAYyiITRQAOkIQBoCXIrgEQFoI/gMgoAgCABAY8v/xBwB/i+A3AP4FIAaNACjDFoIbwD+kAqAYDYUwhyEAQAlaoDAqcISNIuiHsqKtCIJgzCXGnn1k4LRWhnrUKNUqrzueeb/muvaT58UtI1WIMzMm3gGB7Vta/V58NyQzqr0yqq00qq00qrUwsqE0IgrpiFGrSZ2pa5Lry49K/m7LGkJUTdI06p5LITlKXZX3H7/JJdkAf3/zL0LrNZN+O2jcMPonlMrk2OITovSNaOSSTJIjRKCp9OzEW0lL1moDPTcPRmzvXW6YzNvY+FhjfiLJhb4vj7g/9YKk3CAgSISkDbTtHXX591HnTf90nD9q0c/qq5Vx8yqbLw0Adhd0/rUjTwmBDILb9Pfad/Uaz2h8vv+VSGIs3bYNAGB9lW2tCvuXHMY/NEQmCFFlpYqorfL+9EdRLuXBojnv1Gkuy4tJ/5fX3JtyWlLbQIDwqCH5fuyrb2//ynJp2oJQZ3JKMlmnr+vyIgEQWRjEYxufnn4XpfB2sLT51gjAjDUVDZWSSbNyUeOBfbGXktz63kZISQDQFd4f7TTKVN1csfnEVz53wLjB8zu1Du2kqXRm6L7D6ZJlDqxyTAhBhFJ9iEp+nco+vmbDrjfOPqtUTs3g0q1FXed9sqd8a2XrO/d859s9zRtqTXRCSijVh6gEkkm8u/nH37IwevJk/cvakvc3VC58ZZdvpFnNotI6h1/fHyrVvSEIiSQQCTGatmaPj2SHemZt7loxs/W4jlH6HKW2MQEg5AOv/K0ekAiJU2gcvMm1my2tqol7Hj5ouHmIkbO6/P8KAECEqKAU//z+c5scQs5+ZvH+Vce7eqKmWFKRvmqy8y5TGyrqgIRENvjUn8MUwy2c/wnU/bX7DSiYnwDwrQhycAVlbNbePaK1HgA=)
              no-repeat
              left center;
      background-size: 24px;
      height: 40px;
      line-height: 40px;
      z-index: 200;
      width: 28px;
      display: inline-block;
      }
      #shhlack_button {
        display: inline-block;
        float: left;
        padding-left: 4px;
      }
     #footer_msgs {
        width: calc(100% - 35px);
        float: right;
      }
      #msg_form {
        margin-left : 0px;
      }
      </style>

      <button type="button" id="shhlack_icon" class="btn_unstyle shhlack_icon ts_tip
ts_tip_top
ts_tip_float
ts_tip_hidden" tabindex="-1">
              <i class="ts_icon">&nbsp;</i>
              <span id="shhlack_ts_tip_tip_shhlack"
              class="ts_tip_tip">Opens Shhlack Dialog (Shortcut: Alt-s)</span>
      </button>
    `;
    var footer_msgs_div = document.querySelector('#footer')

    if (footer_msgs_div) {
      var span = document.createElement('div');
      span.id = 'shhlack_button';
      span.innerHTML = html;
      footer_msgs_div.appendChild(span);
      var shhlack_icon = footer_msgs_div.querySelector('#shhlack_icon');
      if (shhlack_icon)
        shhlack_icon.addEventListener('click',
          function(ev) {
            var cev = new CustomEvent("SHHLACK:CREATEMSG", {
              bubbles: false,
              cancelable: true
            })
            window.dispatchEvent(cev);
          });
    }
  }
  ////////////////////////////////////////
  //////////Observer
  // The node to be monitored
  window.addEventListener("load", function() {
    if(!is_slack_app()){
      return;
    }
    passes.loadFromStorage();
    passmanageUI(document)
    addShhlackIcon();
    var target = document;
    //Patches TS.client.ui.onSubmit
    patch_for_encrypt();

    // search for encrypted content
    find_and_decrypt(document.body);

    // Create an observer instance
    var observer = new MutationObserver(function(mutations) {
      mutations.forEach(function(mutation) {
        var newNodes = mutation.addedNodes; // DOM NodeList
        var mTarget = mutation.target;
        if (newNodes !== null && newNodes.length > 0) { // If there are new nodes added
          //debug("ADDED_1", newNodes);
          newNodes.forEach(function(el) {
            if (el.nodeType === 1) {
              find_and_decrypt(el);

            //  if(el.className === 'channel_title_info ' ){
            //  console.log(el,"!!!!!!!!!!!")
            //   passmanageUI(el)
            // }
            }


          });
        }
      });
    });

    // Configuration of the observer:
    var config = {
      childList: true,
      subtree: true // Gets Event for any child
    };

    // Pass in the target node, as well as the observer options
    observer.observe(target, config);
  });

  //// Alternative:
  /// wrap:
  ///  TS.ms.handleMsg and TS.ms.send
  ///

  //////////////////////////////////////////////////////////////////
  //// Key Management
  // NB: TS.menu.$menu_items < the element to file menu
  function passmanageUI(targetEl) {
    function encode_entities(str) {
      return str && str.replace(/</g, "&lt;").replace(/"/g, "&quot;") || '';
    }
    function getPairs() {
      var key_passes = '';
      passes.getKeys().forEach(function(key) {
        key_passes += `<option ${currentKey === key ? "selected" : ""} value="${encode_entities(key)}" >${encode_entities(key)}`
      });
      return key_passes;
    }
    function getContentMessage() {
      return TS.utility.contenteditable.displayValue(TS.client.ui.$msg_input).replace(/\u2018|\u2019/g, "'").replace(/\u201c|\u201d/g, '"');
    }

    launchDialog = function launchDialog(tabIndex) {
      try {
        tabIndex = tabIndex || 0;
        TS.generic_dialog.start({
          title: "Shhlack Panel",
          body: getContainer(),
          onShow: function() {
            var temp_passes = Object.assign({}, passes);
            var datalist_key_el = qs("#shhlack_key");
            var datalist_pass_el = qs('#shhlack_value');

            var shhlack_default_key_checkbox = qs('#shhlack_default_key_checkbox');
            var textarea = qs('#shhlack_message_content');
            textarea.textContent = getContentMessage();
            textarea.addEventListener('keydown',function (ev) {
               if (ev.ctrlKey && ev.key === 'Enter'){
                 TS.generic_dialog.go();
               }
            });
            datalist_pass_el.value = passes.getCurrentValue()||'';

            // Selector for tabs
            qs("#shhlack_tab_set").addEventListener("click", function(e) {
              var el = e.target;
              var targetContent = qs('#' + el.dataset['content']);
              $(targetContent).siblings().addClass('shhlack_hidden');
              $(targetContent).removeClass('shhlack_hidden');
              $(el).siblings().removeClass('selected');
              $(el).addClass('selected');
            });
            // Select tab (default to first)
            qs("#shhlack_tab_set").children[tabIndex].click()
//////////////////////////////////
            qs("#shhlack_file_upload").addEventListener('change',function(ev){
              var reader = new FileReader()
              reader.onload = function(event) {
                var content = event.target.result
                try{
                  var passphrases = passes.loadFromStorage(content);
                }catch(e){
                  alert("Error in decoding passphrases, not a JSON file");
                }
                //passes.passphrases = Object.assign(passphrases,passes.passphrases);
                passes.saveOnStorage();
                passmanageUI(targetEl);
                //setOK with fade
              }
              reader.readAsText(ev.target.files[0]);
            });

            qs("#shhlack_upload").addEventListener('click', function(){
              $("#shhlack_file_upload").click();
            });

            qs("#shhlack_download").addEventListener('click', function(){
              var content = passes.serializePassObject();
              var blob = new Blob([content], {
               type: "octet/stream"
              });

              url = window.URL.createObjectURL(blob);
              //var anchor = qs('#shhlack_downloader');
              this.href = url;
              this.target = '_blank'
              this.download = "shhlack_passphrases.json";
              //anchor.click();
              passmanageUI(targetEl);
            });
//////////////////////////////////
            // Set current Key
            shhlack_default_key_checkbox.addEventListener('change', function(ev) {
              passes.setCurrentKey(datalist_key_el.value);
            });

            qs('#shhlack_choosen_pass').addEventListener('change', function(ev) {
              var val = ev.target.value;
              passes.setCurrentKey(val);
            });

            qs("#shhlack_delete").addEventListener("click", function(ev) {
              var key = datalist_key_el.value;
              var response = confirm("Are you sure you want to delete: " + key)
              if (response) {
                passes.remove(key);
                // datalist_key_el.value = '';
                // targetEl.querySelector('#shhlack_value').value = '';
                passmanageUI(targetEl);
              }
            });

            qs("#shhlack_add").addEventListener("click", function(ev) {
              $("#shhlack_add_form").toggle();
            });

            qs("#shhlack_add_ok").addEventListener("click", function(ev) {
              var keyEl = qs("#shhlack_new_key");
              var valueEl = qs("#shhlack_new_value");
              passes.set(keyEl.value, valueEl.value);
              if(passes.getCurrentKey() == null){
                passes.setCurrentKey(keyEl.value);
              }
              keyEl.value = '';
              valueEl.value = '';
              $("#shhlack_add_form").toggle();
              passmanageUI(targetEl);
            });

            qs("#shhlack_add_cancel").addEventListener("click", function(ev) {
              var keyEl = qs("#shhlack_new_key");
              var valueEl = qs("#shhlack_new_value");
              keyEl.value = '';
              valueEl.value = '';
              $("#shhlack_add_form").toggle();
            });

            if(datalist_key_el.selectedOptions[0].value === passes.getCurrentKey()){
              shhlack_default_key_checkbox.checked = true;
            }
            datalist_key_el.addEventListener("change", function(ev) {
              var key = ev.target.value;
              if (key === passes.getCurrentKey()) {
                shhlack_default_key_checkbox.checked = true;
              } else {
                shhlack_default_key_checkbox.checked = false;
              }
              datalist_pass_el.value = passes.get(key);
            });
          // datalist_key_el.addEventListener("input", function(ev) {
          //   //passes.setCurrentKey(ev.target.value);
          //   if (ev.target.value === passes.currentKey)
          //     datalist_pass_el.value = passes.getCurrentValue();
          // //passmanageUI(targetEl);
          // });
          },
          show_cancel_button: true,
          esc_for_ok: true,
          go_button_text: TS.interop.i18n.t("OK", "client")(),
          onGo: function e() {
            // getSelected Tab
            var elem = qs(".tab_anchor.selected");
            if (elem && elem.dataset['content'] === 'shhlack_message') {
              sendEncryptedMessage({
                title: qs('#shhlack_message_title').value,
                content: qs('#shhlack_message_content').value
              });
            }/*else if(elem && elem.dataset['content'] === 'shhlack_pairs'){

            }else if(elem && elem.dataset['content'] === 'shhlack_master'){

            }*/
          }
        });
      } catch (exc) {}
    }
    function getContainer() {
      var container_html = `
    <span id="shhlack_container">
    <style>
    .tab_set{
        position:relative;
        max-height:3rem;
        display:flex
    }
     .tab_set a{
        padding: 0.5rem;
        font-weight:700;
        margin-bottom:-1px;
        border:1px solid transparent;
        border-top-right-radius:.25rem;
        border-bottom-right-radius:0;
        border-bottom-left-radius:0;
        border-top-left-radius:.25rem;
        background-clip:padding-box;
        text-overflow:ellipsis;
        overflow:hidden;
        white-space:nowrap;
        max-width:100%
    }
     .tab_set.compressed a{
        padding-left:22px;
        padding-right:22px
    }
     .tab_set a.secondary.selected,.tab_set a.selected{
        border:1px solid #e8e8e8;
        background:#fff;
        border-bottom-color:#fff;
        color:#2c2d30;
        cursor:default
    }
     .tab_set a.selected.is_linked{
        cursor:pointer
    }
     .tab_set a.selected:hover{
        text-decoration:none
    }
     .tab_set a.secondary{
        margin-left:auto;
        color:#717274
    }
     .tab_set a.secondary~a.secondary{
        margin-left:0
    }
     .tab_set .tab_caret{
        display:none
    }
     .tab_pane{
      display:none;
      background:#fff;
      border-radius:0 0 .25rem .25rem;
      box-shadow:0 1px 0 rgba(0,0,0,.25);
      padding:2rem 2rem 1rem;
      margin:0 auto 3rem;
      border:1px solid #e8e8e8
    }
    .tab_pane.selected{
      display:block
    }
    .tab_pane.selected.display_flex{
      display:flex
    }
    .tab_actions{
      background:#fff;
      height:4.5rem;
      padding:1rem;
      border:1px solid #e8e8e8;
      margin-bottom:-1px
    }
    #shhlack_icon{
      background:
            url(data:image/webp;base64,UklGRvwDAABXRUJQVlA4TO8DAAAvH8AHEE2Yads2plr7soj+x/5UEs3CMBtJfS7A+dMdxmY5TEWysQ8JJNA/ow81bSQ5U52OP74cqteD6H8AABRHR6Fr+w9POmVebjnIuW3b2N4FzQdfbNtWmfHVSeukttOmzUin+hvpbVW2O9u27eR53o/PfSPHtrZje/bzPr/N2GZpu8wg1CYTyHhS2rbtVLad/Hi/95Za27aqPfPchz8qsgwt/L+MjI9MXHpghh6iqQBSUamAFFlmpkdXCiwABFi9Odm27bi8tLRFb23VRlpWdFRbVF5a9JqNb94EIACKohaTKEEmAnGNEyxhF8qMQ4QDAEIQhEw0YbZMuAYAwDMeAQCQWxacAAB20AKIRyKWAQBfyoAxAEAz1Ite/AbAXhj6ADAJDaILoYAvYUgGfGC+IcAwACpCMAOAYyiITRQAOkIQBoCXIrgEQFoI/gMgoAgCABAY8v/xBwB/i+A3AP4FIAaNACjDFoIbwD+kAqAYDYUwhyEAQAlaoDAqcISNIuiHsqKtCIJgzCXGnn1k4LRWhnrUKNUqrzueeb/muvaT58UtI1WIMzMm3gGB7Vta/V58NyQzqr0yqq00qq00qrUwsqE0IgrpiFGrSZ2pa5Lry49K/m7LGkJUTdI06p5LITlKXZX3H7/JJdkAf3/zL0LrNZN+O2jcMPonlMrk2OITovSNaOSSTJIjRKCp9OzEW0lL1moDPTcPRmzvXW6YzNvY+FhjfiLJhb4vj7g/9YKk3CAgSISkDbTtHXX591HnTf90nD9q0c/qq5Vx8yqbLw0Adhd0/rUjTwmBDILb9Pfad/Uaz2h8vv+VSGIs3bYNAGB9lW2tCvuXHMY/NEQmCFFlpYqorfL+9EdRLuXBojnv1Gkuy4tJ/5fX3JtyWlLbQIDwqCH5fuyrb2//ynJp2oJQZ3JKMlmnr+vyIgEQWRjEYxufnn4XpfB2sLT51gjAjDUVDZWSSbNyUeOBfbGXktz63kZISQDQFd4f7TTKVN1csfnEVz53wLjB8zu1Du2kqXRm6L7D6ZJlDqxyTAhBhFJ9iEp+nco+vmbDrjfOPqtUTs3g0q1FXed9sqd8a2XrO/d859s9zRtqTXRCSijVh6gEkkm8u/nH37IwevJk/cvakvc3VC58ZZdvpFnNotI6h1/fHyrVvSEIiSQQCTGatmaPj2SHemZt7loxs/W4jlH6HKW2MQEg5AOv/K0ekAiJU2gcvMm1my2tqol7Hj5ouHmIkbO6/P8KAECEqKAU//z+c5scQs5+ZvH+Vce7eqKmWFKRvmqy8y5TGyrqgIRENvjUn8MUwy2c/wnU/bX7DSiYnwDwrQhycAVlbNbePaK1HgA=)
            no-repeat
            left center;
    }
    #shhlack_message_title{
      width: 65%;
    }

    #shhlack_value{
      width: 55%;
      line-height: normal;
    }

    .shhlack_hidden {
      display: none;
     }

    #shhlack_eye{
      cursor: pointer;
    }

    .shhlack_brought_to_you_footer {
      font-size: 0.7rem;
      position: absolute;
      right: 2rem;
    }



    </style>
    <div id="shhlack_tab_set" class="account_tab_set tab_set on_neutral_grey">
      <a class="tab_anchor"  data-content="shhlack_message">Send Message</a>
      <a class="tab_anchor"  data-content="shhlack_pairs" >Manage Passphrases</a>
      <a class="tab_anchor"  data-content="shhlack_master" >Master Key</a>
    </div>

    <section id="shhlack_tab_show_content" class="tab_pane selected clearfix" >
    	<div id="shhlack_tabs_content" >
    		 <div class="shhlack_tabs_content shhlack_hidden" id="shhlack_message">
    				<div class="top_margin">
    					<label class="select small float_right no_right_padding">
    						<select id="shhlack_choosen_pass" class="small no_top_margin">
    							${getPairs()}
    						</select>
    					</label>
    					<input type="text" class="small" id="shhlack_message_title" value="" placeholder="Title (optional)">
    				</div>

    				<div class="top_margin bottom_margin">
    					<textarea name="content" id="shhlack_message_content" class=" full_width" ></textarea>
    				</div>
    		 </div>
    		 <div class="shhlack_tabs_content shhlack_hidden" id="shhlack_pairs" >
    				<div class="top_margin ">
    					<div class="row-fluid padding_25">
    						<div class="span12">
    							<!-- UPLOAD -->
    							<span id="shhlack_upload" class="current_status_clear_icon_cover ts_tip ts_tip_top ts_tip_float ts_tip_hidden" aria-labelledby="shhlack_ts_tip_tip_3" style="cursor: pointer" >
    								<input id="shhlack_file_upload" type="file" class="shhlack_hidden">
    								<i class="c-deprecated-icon c-icon--upload" type="cloud-download" aria-hidden="true"></i></a>
    								<span id="shhlack_ts_tip_tip_3" class="ts_tip_tip">Restore all Passphrase from backup file</span>
    							</span>
    							<!-- DOWNLOAD -->
    							<span id="" class="current_status_clear_icon_cover ts_tip ts_tip_top ts_tip_float ts_tip_hidden" aria-labelledby="shhlack_ts_tip_tip_4" style="cursor: pointer" >
    								<a href="#" id="shhlack_download">
    									<i class="c-deprecated-icon c-icon--download" type="cloud-download" aria-hidden="true"></i></a>
    									<span id="shhlack_ts_tip_tip_4" class="ts_tip_tip">Download all Passphrase as backup</span>
    								</a>
    							</span>
      					</div>
      					<div class="row-fluid padding_25">
    							<!-- SET AS DEFAULT -->
    							<label for="shhlack_default_key_checkbox" style="width: auto; min-width: auto;">Default
    								<input type="checkbox" style="margin: 0 0 4px 4px;" id="shhlack_default_key_checkbox">
    							</label>
    						</div>
    					</div>
    					<div class="row-fluid padding_25">
    						<div class="span11">
    							<!-- SELECT KEY -->
    							<label class="select small no_right_padding" style="width:100%">
    								<select id="shhlack_key" class="small no_top_margin">
    									${getPairs()}
    								</select>
    							</label>
    						</div>
                <div class="span1 padding_left_100">
                  <!-- DELETE -->
                  <span id="shhlack_delete" class="current_status_clear_icon_cover ts_tip ts_tip_top ts_tip_float ts_tip_hidden padding_top_50" aria-labelledby="shhlack_ts_tip_tip_2 padding_top_50" style="cursor: pointer" >
                    <ts-icon class="ts_icon_trash prefix"></ts-icon>
                    <span id="shhlack_ts_tip_tip_2" class="ts_tip_tip">Delete Passphrase</span>
                  </span>
                </div>
              </div>
      				<div class="row-fluid padding_25">
    						<div class="span11">
    							<!-- INPUT PASSPHRASE -->
    							<input type="password" disabled class="small full_width no_margin" id="shhlack_value" value="" placeholder="Passphrase here">
    						</div>
    						<div class="span1 padding_left_100">
    							<!-- SHOW PASSPHRASE -->
    							<span id="shhlack_eye" class="ts_tip ts_tip_bottom ts_tip_float inline_block ts_tip_hidden padding_top_50"
    										onclick="var pass=document.querySelector('#shhlack_value');pass.type=pass.type==='password'?'text':'password'">
    								<ts-icon class="ts_icon_eye prefix"></ts-icon>
    								<span id="shhlack_ts_tip_tip_1" class="ts_tip_tip">Show Passphrase</span>
    							</span>
                </div>
    					</div>
              <div class="row-fluid padding_25">
                <span>
                  Add new passphrase
                </span>
                <!-- ADD -->
                <span id="shhlack_add" class="current_status_clear_icon_cover ts_tip ts_tip_top ts_tip_float ts_tip_hidden" aria-labelledby="shhlack_ts_tip_tip_2" style="cursor: pointer;  top: 4px;" >
                  <ts-icon class="ts_icon_plus prefix"></ts-icon>
                  <span id="shhlack_ts_tip_tip_2" class="ts_tip_tip">Add new Passphrase</span>
                </span>
              </div>
              <div class="row-fluid padding_25">
    						<div class="span11">
                  <!-- ADD -->
                  <div id="shhlack_add_form" style="display: none; border: 1px solid #e8e8e8;" class="padding_75">

                    <div class="row-fluid padding_25">
          						<div class="span12">
                        <!-- INPUT KEY -->
                        <input type="text" class="small full_width padding_bottom_50" id="shhlack_new_key" value="" placeholder="Passphrase name">
                      </div>
                    </div>
                    <div class="row-fluid padding_25">
          						<div class="span12">
                        <!-- INPUT PASSPHRASE -->
                        <input type="password" class="small full_width " id="shhlack_new_value" value="" placeholder="Pre shared passphrase">
                      </div>
                    </div>
                    <div class="current_status_action_buttons align_right">
                      <button id="shhlack_add_cancel" type="button" class="btn btn_small btn_outline current_status_cancel_button">Cancel</button>
                      <button id="shhlack_add_ok" type="button" class="btn btn_small btn_success current_status_save_button">Add</button>
                    </div>
                  </div>
                </div>
              </div>
    				</div>
    		 </div>
    		 <div class="shhlack_tabs_content shhlack_hidden" id="shhlack_master" >
    			<div class="top_margin">
    				<label style="width: 20%" for="shhlack_master_checkbox">
    						Enable Master
    						<input type="checkbox" style="width: 10%" id="shhlack_master_checkbox" style="width: 66%"
    									onchange="alert('not implemented yet');return ;var t=document.querySelector('#shhlack_personal_master_key');t.disabled=!this.checked">
    				</label>
    				<input style="width: 50%" id="shhlack_personal_master_key" class="small no_top_margin" disabled type="password" >
    			</div>
    		 </div>
    	</div>
    	<span class="shhlack_brought_to_you_footer">
    	 Shhlack is brought to you by <a href="https://www.mindedsecurity.com/" target="_blank">MindedSecurity</a>.
    	 Shhlack <a href="https://github.com/mindedsecurity/shhlack/" target="_blank">Source</a>
    	</span>
    </section>

  </span>
  `;
      return container_html
    }
    var qs = targetEl.querySelector.bind(targetEl);
    var qsall = targetEl.querySelectorAll.bind(targetEl);
    if(passes.getCurrentKey() == undefined || passes.getKeys().length===0){
      alert("No passphrases in database, define at least one");
      setTimeout(function (){launchDialog(1)},2000);
    }
    var container_el = qs("#shhlack_container");
    var currentKey = passes.getCurrentKey();
    if (!container_el) {
      document.addEventListener('keyup', function(ev) {
        if (ev.altKey && ev.key === CHAR){
          launchDialog(0);
        }
      });
      return;
    }
    else{
      qs('#shhlack_choosen_pass').innerHTML = getPairs();
      qs("#shhlack_key").innerHTML = getPairs();
    }
  }

}
