const CryptoJS = require("crypto-js");
require("dotenv").config();

const secretKey = "fb075bdc0ebd02a3200ce3158969e6eab750e32bd039279a660387226110c1924033bc66435c202e89e29833b104016436ca5f7920003dd73e523da3bc253a3b";
function encryptData(data) {
    return CryptoJS.AES.encrypt(data, secretKey).toString();
}

function decryptData(encryptedData) {
    const bytes = CryptoJS.AES.decrypt(encryptedData, secretKey);
    return bytes.toString(CryptoJS.enc.Utf8);
}

module.exports = { encryptData, decryptData };
