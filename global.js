// retired
// use include
let config = require("./config");

module.exports = async function () {
    await initGlobalVariables();
};
async function initGlobalVariables() {
    process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;
    global.ENV = process.env.ENV || "prod";   
    //global.page = require("./pages");
    global.conf = config[ENV];
}