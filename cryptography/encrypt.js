const crypto = require('crypto');

exports.encryptWithPublicKey = (pubicKey, message) => {
    const bufferMessage = Buffer.from(message, 'utf-8');
    return crypto.publicEncrypt(pubicKey, bufferMessage);
}

exports.encryptWithPrivateKey = (privateKey, message) => {
    const bufferMessage = Buffer.from(message, 'utf-8');
    return crypto.privateEncrypt(privateKey, bufferMessage);
}
