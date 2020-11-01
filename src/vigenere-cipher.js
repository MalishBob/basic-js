const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

    constructor(mode = true) {
        this.mode = mode;
    }

    encrypt(message, key) {
        if (typeof message === 'undefined' || typeof key === 'undefined') throw new Error();

        let output = message.toUpperCase();
        if (!this.mode) output = output.split("").reverse().join("");
        return output;
    }
    decrypt(message, key) {
        if (typeof message === 'undefined' || typeof key === 'undefined') throw new Error();

        let output = message.toUpperCase();
        if (!this.mode) output = output.split("").reverse().join("");
        return output;
    }
}

module.exports = VigenereCipheringMachine;