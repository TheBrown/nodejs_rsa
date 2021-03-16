const crypto = require('crypto');

exports.decryptWithPrivateKey = (privateKey, message) => {
    const bufferMessage = Buffer.from(message, 'utf-8');
    return crypto.privateDecrypt(privateKey, bufferMessage);
}

exports.decryptWithPublicKey = (publicKey, message) => {
    const bufferMessage = Buffer.from(message, 'utf-8');
    return crypto.publicDecrypt(publicKey, bufferMessage);
}
