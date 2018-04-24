
let fs = require('fs');

let delFile = function  (path) {
    fs.unlink(path,function () {
        console.log(1)
    });
};
let deleteFolder = function (path) {
    var files = [];
    if( fs.existsSync(path) ) {
        files = fs.readdirSync(path);
        files.forEach(function(file,index){
            var curPath = path + "/" + file;
            if(fs.statSync(curPath).isDirectory()) { // recurse
                deleteFolder(curPath);
            } else { // delete file
                fs.unlinkSync(curPath);
            }
        });
        fs.rmdirSync(path);
    }
};
[
    '../dist/mock',
    '../dist/build',
    '../dist/.idea',
    '../dist/.svn'
].forEach(function (path) {
    deleteFolder(path);
});
delFile('../dist/build.txt');