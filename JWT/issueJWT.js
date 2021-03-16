const base64url = require('base64url');
const crypto = require('crypto');
const signatureFunction = crypto.createSign('RSA-SHA256');
const fs = require('fs');

const headerObj = {
    alg: 'RS256',
    typ: 'JWT'
};

const payloadObj = {
    sub: '1234567890',
    name: 'John Doe',
    admin: true,
    iat: 1516239022
};

const headerObjString = JSON.stringify(headerObj);
const payloadObjString = JSON.stringify(payloadObj);


const base64urlHeader = base64url(headerObjString);
const base64urlPayload = base64url(payloadObjString);

signatureFunction.write(base64urlHeader + '.' + base64urlPayload);
signatureFunction.end();

const PRIV_KEY = fs.readFileSync(__dirname + '/priv_key.pem', 'utf-8');
const signatureBase64 = signatureFunction.sign(PRIV_KEY, 'base64');






// const JWT = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.POstGetfAytaZS82wHcjoTyoqhMyxXiWdR7Nn7A29DNSl0EiXLdwJ6xC6AfgZWF1bOsS_TuYI3OG85AmiExREkrS6tDfTQ2B3WXlrr-wp5AokiRbz3_oB4OxG-W9KcEEbDRcZc0nH3L7LzYptiy1PtAylQGxHTWZXtGz4ht0bAecBgmpdgXMguEIcoqPJ1n3pIWk_dUZegpqx0Lka21H6XxUTxiy8OcaarA8zdnPUnV6AmNP3ecFawIFYdvJB_cm-GvpCSbr8G8y_Mllj8f4x9nBH8pQux89_6gUY618iYv7tuPWBFfEbLxtF2pZS6YC1aSfLQxeNe8djT9YjpvRZA';

// const jwtParts = JWT.split('.');

// console.log(jwtParts);

// const headerInBase64UrlFormat = jwtParts[0];
// const payloadInBase64UrlFormat = jwtParts[1];
// const signatureInBase64UrlFormat = jwtParts[2];

// const decodedHeader = base64url.decode(headerInBase64UrlFormat);
// const decodedPayload = base64url.decode(payloadInBase64UrlFormat);
// const decodedSignature = base64url.decode(signatureInBase64UrlFormat);

// console.log(decodedHeader);
// console.log(decodedPayload);
// console.log(decodedSignature);