module.exports = async function () {
    await initGlobalVariables();
};
async function initGlobalVariables() {
    process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;
    global.ENV = process.env.ENV || "qa";   
    global.page = require("./pages");
}