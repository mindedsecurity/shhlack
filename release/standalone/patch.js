
/*PATCHED BY Minded Security to add encryption features. See shhlack
REMOVE ME TO BOTTOM TO RECREATE ORIGINAL 
FILE /usr/lib/slack/resources/app.asar.unpacked/src/static/ssb-interop.js
*/
(function() {
  const versionURL = "https://raw.githubusercontent.com/mindedsecurity/shhlack/master/package.json";
  const updateURL = "https://github.com/mindedsecurity/shhlack/releases/download/|VERSION|/standalone-|VERSION|.zip"
  const os = require('os');
  const path = require('path');
  const fs = require('fs');

  const shhlackHomePath = path.join(os.homedir(), '.shhlack');
  //Read Shhlack.js
  const shhlackPath = path.join(shhlackHomePath, 'shhlack.js');
  const data = fs.readFileSync(shhlackPath) + '';
  eval(data);

  //Read package.json to get version
  const shhlackPackagePath = path.join(shhlackHomePath, 'package.json');
  const local_shhlackPackage = require(shhlackPackagePath);
  function cmpVersions(a, b, sep) {
    var i,
        l,
        d;
    sep = sep || ".";
    a = a.split(sep);
    b = b.split(sep);
    l = Math.min(a.length, b.length);

    for (i = 0; i < l; i++) {
        d = parseInt(a[i], 10) - parseInt(b[i], 10);
        if (d !== 0) {
            return d;
        }
    }
    return a.length - b.length;
}

  try {
    const https = require('https');
    function httpget(url,onend,onerror,ondata,onresponse){
      https.get(url, (resp) => {
      let data = '';
      if(onresponse)
        onresponse(resp);

      // A chunk of data has been recieved.
      resp.on('data', (chunk) => {
        if(ondata)
         return ondata(chunk);
        data += chunk;
      });

      // The whole response has been received. Print out the result.
      resp.on('end', () => {
        if(onend)
          onend(data);
      });

    }).on("error", (err) => {
      if(onerror)
        onerror(err);
      //console.log("Error: " + err.message);
    });
    }
    
    httpget(versionURL,function onend(data){
        var remote_version = JSON.parse(data).version;
        var downloadfile;
        if (cmpVersions(remote_version, local_shhlackPackage.version) > 0) {
          console.log("Shhlack: New Version Available! Do you want to download and install the new version?");
          localStorage.shhlack_new_version = {version:local_shhlackPackage.version, new_version: remote_version};
      httpget(updateURL.replace("|VERSION|",remote_version),
      function onend(){
          downloadfile.end();
     },
     function onerror(err){
        console.error(err);       
        localStorage.shhlack_new_version = {version:local_shhlackPackage.version, new_version: remote_version,error: err.message, type: "update"};
     }, 
     function ondata(chunk){
    downloadfile.write(chunk);
     },
     function onresponse(res){
      downloadfile = fs.createWriteStream( path.join(shhlackHomePath, "shhlack.zip"), {
            flags: 'w',
            encoding: 'binary'
          });
       
     });
        }

    },function onerror(err){
       console.error(err);
       localStorage.shhlack_new_version = {error: err.message, type: "check_version"};
    });

  } catch (exc) {
    console.error(exc)
  }
})();

