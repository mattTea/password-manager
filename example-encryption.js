var crypto = require('crypto-js'); //include crypto js libraries/module

// CHALLENGE: secretMessage changed to an object
var secretMessage = {
	name: 'Matt',
	secretName: '007'
};
var secretKey = '123abc';


// CHALLENGE: encrypt can only take a string, and decrypt can only return a string
// JSON.stringify
// JSON.parse

var secretMessageJSON = JSON.stringify(secretMessage);
// created variable to store the converted (to JSON) object
// JSON.stringify takes one argument, which is the object you want converted to JSON


// Encrypt
var encryptedMessage = crypto.AES.encrypt(secretMessageJSON, secretKey);
// encrypt takes 2 arguments: message and key
// AES is an encryption algorithm

console.log('Encryted message: ' + encryptedMessage);


// Decrypt
var bytes = crypto.AES.decrypt(encryptedMessage, secretKey); // this returns an array of bytes that you can't read, so needs...
var decryptedMessage = bytes.toString(crypto.enc.Utf8);

// convert to js object (use parse)
secretMessage = JSON.parse(decryptedMessage);

console.log('Decrypted message: ' + decryptedMessage);
console.log(secretMessage.secretName);
