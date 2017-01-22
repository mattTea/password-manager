var crypto = require('crypto-js'); 

var secretMessage = {
	name: 'Matt',
	secretName: '007'
};
var secretKey = '123abc';

// Encrypt
var encryptedMessage = crypto.AES.encrypt(JSON.stringify(secretMessage), secretKey);
console.log('Encryted message: ' + encryptedMessage);


// Decrypt
var bytes = crypto.AES.decrypt(encryptedMessage, secretKey);
var decryptedMessage = JSON.parse(bytes.toString(crypto.enc.Utf8));

console.log(decryptedMessage);
console.log(decryptedMessage.secretName);