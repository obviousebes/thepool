const fs = require('fs');

/**
 * Writes the given data to the file '../message.txt'.
 *
 * @param {any} data - the data to be written to the file
 * @return {boolean} true if the data was successfully written, false otherwise
 */
function send(data) {
    fs.writeFileSync('../message.txt', data);
    return true;
}

/**
 * Reads the content from the file '../message.txt' synchronously as a UTF-8 string.
 *
 * @return {string} The content of the file as a UTF-8 string.
 */
function receive() {
    return fs.readFileSync('../message.txt', 'utf8');
}

/**
 * Encrypts the given message, and return the encrypted result
 * 
 * @param {string} message - The message to be encrypted
 * @return {string} The encrypted result
 */
module.exports.encrypt = function(message) {
  result = '';
  // receive the message from parameter if exist, and return the result
  // or receive from receive function and send it by send function and return the result
  return result;
}

/**
 * Decrypts a message, and returns the decrypted result
 *
 * @param {string} message - the message to decrypt
 * @return {string} the decrypted message
 */
module.exports.decrypt = function(message) {
  result = '';
  // receive the message from parameter if exist, and return the result
  // or receive from receive function and send it by send function and return the result
  return result;
}