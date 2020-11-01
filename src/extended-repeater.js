const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
    let str_mod = str;
    let arr_addit = [];
    let arrString = [];

    if (typeof options.addition !== 'undefined') {
        let str_adition = '';
        if (typeof options.additionRepeatTimes !== 'undefined') {
            for (let i = 0; i < options.additionRepeatTimes; i++) {
                if (options.addition === null) {
                    arr_addit.push('null');
                } else {
                    arr_addit.push(options.addition);
                }
            }
        } else {
            arr_addit.push(options.addition);
        }

        if (typeof options.additionSeparator !== 'undefined') {
            str_adition = arr_addit.join(options.additionSeparator);
        } else {
            str_adition = arr_addit.join('|');
        }

        str_mod += str_adition;
    }


    if (typeof options.repeatTimes !== 'undefined') {
        for (let i = 0; i < options.repeatTimes; i++) {
            arrString.push(str_mod);
        }
    } else {
        arrString.push(str_mod);
    }

    if (typeof options.separator !== 'undefined') {
        final_str = arrString.join(options.separator);
    } else {
        final_str = arrString.join('+');
    }

    return final_str;
};