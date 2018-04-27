#! /usr/bin/env node
var fs = require("fs");
var path = require("path");

const PLACEHOLDER = '@@SHHLACK_PLACEHOLDER@@'

const CURRENT_DIR = __dirname;

const TEMP_DIR =path.join(CURRENT_DIR,  "temp");

const SRC_DIR = path.join(CURRENT_DIR, "src");
const SRC_EXTENSION_DIR = path.join(SRC_DIR, "extension");
const SRC_STANDALONE_DIR = path.join(SRC_DIR, "standalone");

const BUILD_DIR = path.join(CURRENT_DIR, "build");

const BUILD_EXTENSION_DIR = path.join(BUILD_DIR, "extension");
const BUILD_STANDALONE_DIR = path.join(BUILD_DIR, "standalone");


var shhlack_patch = fs.readFileSync('src/shhlack.js');
var extension_template = fs.readFileSync('src/templates/extension.tpl').toString();
var standalone_template = fs.readFileSync('src/templates/standalone.tpl').toString();


//////////////////////////////////////////////////////
/////////////// Utils ///////////////////////////////
function makeDirSync(dir) {
  try {
    fs.mkdirSync(dir)
  } catch (exc) {
    if (exc.code !== 'EEXIST') {
      console.error(exc);
    }
  }
}


function copyFileSync(source, target) {

  var targetFile = target;

  //if target is a directory a new file with the same name will be created
  if (fs.existsSync(target)) {
    if (fs.lstatSync(target).isDirectory()) {
      targetFile = path.join(target, path.basename(source));
    }
  }

  fs.writeFileSync(targetFile, fs.readFileSync(source));
}

function copyFolderRecursiveSync(source, target) {
  console.log("COPY",source, target)
  var files = [];
  if (!source) {
    throw "no Source Name";
  }
  if (!target) {
    throw "no target Name";
  }
  //check if folder needs to be created or integrated

  if (!fs.existsSync(target)) {
    fs.mkdirSync(target);
  }
  var targetFolder = path.join(target, path.basename(source));
  if (!fs.existsSync(targetFolder)) {
    fs.mkdirSync(targetFolder);
  }

  //copy
  if (fs.lstatSync(source).isDirectory()) {
    files = fs.readdirSync(source);
    files.forEach(function(file) {
      var curSource = path.join(source, file);
      if (fs.lstatSync(curSource).isDirectory()) {
        copyFolderRecursiveSync(curSource, targetFolder);
      } else {
        copyFileSync(curSource, targetFolder);
      }
    });
  }
}

////////////////////////////////////////////////////////

copyFolderRecursiveSync(SRC_EXTENSION_DIR,BUILD_DIR);
copyFolderRecursiveSync(SRC_STANDALONE_DIR,BUILD_DIR);

copyFileSync(path.join(__dirname, "package.json"), BUILD_STANDALONE_DIR);
copyFileSync(path.join(__dirname, "patch.js"), BUILD_STANDALONE_DIR);
copyFileSync(path.join(__dirname, "README.md"), BUILD_STANDALONE_DIR);

copyFileSync(path.join(__dirname, "README.md"), BUILD_EXTENSION_DIR);

fs.writeFileSync(path.join(BUILD_EXTENSION_DIR, "shhlack.js"), extension_template.replace(PLACEHOLDER, shhlack_patch));
fs.writeFileSync(path.join(BUILD_STANDALONE_DIR, "shhlack.js"), standalone_template.replace(PLACEHOLDER, shhlack_patch));

// mkdir dist
// mkdir build
// rsync -av --exclude 'build' --exclude '/.gitignore' --exclude 'build.sh' --exclude '.git' . dist/
// google-chrome  --pack-extension=`pwd`/dist
// mv dist.crx build/
