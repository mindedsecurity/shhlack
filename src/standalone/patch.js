/*PATCHED BY Minded Security to add encryption features. See shhlack
REMOVE ME TO BOTTOM TO RECREATE ORIGINAL 
FILE /usr/lib/slack/resources/app.asar.unpacked/src/static/ssb-interop.js
*/
(function() {

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
          ondata(chunk);
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
    
    httpget('https://raw.githubusercontent.com/mindedsecurity/shhlack/master/package.json?',function onend(data){
        var version = JSON.parse(data).version;
        if (cmpVersions(version, local_shhlackPackage.version) > 0) {
          console.log("new Version!");
        }
    });

  } catch (exc) {
    console.error(exc)
  }
})();
