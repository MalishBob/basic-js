const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
    if (!Array.isArray(arr)) new Error();
    return loop(arr);
};

let loop = (arr) => {
    const rules = ['--discard-prev', '--discard-next', '--double-prev', '--double-next', 'undefined'];
    let arr_mod = [...arr];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '--discard-next') {
            k = arr_mod.findIndex(elm => elm === '--discard-next');
            arr_mod[k] = 'undefined';
            if (k !== (arr_mod.length - 1)) {
                next = arr_mod[k + 1];
                if (!rules.includes(next)) arr_mod.splice(k + 1, 1);
            }
        } else if (arr[i] === '--discard-prev') {
            k = arr_mod.findIndex(elm => elm === '--discard-prev');
            arr_mod[k] = 'undefined';
            if (k !== 0) {
                prev = arr_mod[k - 1];
                if (!rules.includes(prev)) arr_mod.splice(k - 1, 2);
            }
        } else if (arr[i] === '--double-next') {
            k = arr_mod.findIndex(elm => elm === '--double-next');
            arr_mod[k] = 'undefined';
            if (k !== arr_mod.length - 1) {
                next = arr_mod[k + 1];
                if (!rules.includes(next)) arr_mod.splice(k + 1, 0, next);
            }
        } else if (arr[i] === '--double-prev') {
            k = arr_mod.findIndex(elm => elm === '--double-prev');
            arr_mod[k] = 'undefined';
            if (k !== 0) {
                prev = arr_mod[k - 1];
                if (!rules.includes(prev)) arr_mod.splice(k - 1, 0, prev);
            }
        }
    }

    arr_mod = arr_mod.filter(elm => !rules.includes(elm)).map(elm => elm);
    return arr_mod;
}