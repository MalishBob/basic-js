const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
    calculateDepth(arr, level = 1, counter = 1) {

        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                counter++;
                if (counter > level) { level = counter; }
                level = this.calculateDepth(arr[i], level, counter);
                counter--;
            }
        }

        return level;

    }
};