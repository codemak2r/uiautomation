let path = require('path');
let fs = require('fs');
module.exports = (function buildModuleObject(page, dirPath) {
    fs.readdirSync(dirPath).forEach(function (file) {
        if (fs.statSync(path.join(dirPath, file)).isDirectory()) {
            buildModuleObject(page, path.join(dirPath, file));
        } else {
            let fileName = path.basename(file, '.js');
            let requireFile = require(path.join(dirPath, file));
            if (file && !(fileName in page) && (path.extname(file) == '.js') && fileName != 'index' && fileName != 'page') {
                page[fileName] = requireFile;
            }
        }
    });
    return page;
})({}, __dirname);