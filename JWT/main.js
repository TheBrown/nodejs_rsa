const fs = require('fs');
const encrypt = require('../cryptography/encrypt');
const decrypt = require('../cryptography/decrypt');

const publicKey = fs.readFileSync(__dirname + '/id_rsa_pub.pem', 'utf-8');

const encryptedMessage = encrypt.encryptWithPublicKey(publicKey, 'Super secret message');

console.log(encryptedMessage.toString());

const privateKey = fs.readFileSync(__dirname + '/id_rsa_priv.pem', 'utf-8');

const decryptedMessage = decrypt.decryptWithPrivateKey(privateKey, encryptedMessage);

console.log(decryptedMessage.toString());


