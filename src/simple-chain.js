const CustomError = require("../extensions/custom-error");

const chainMaker = {
    chain: [],

    getLength() {
        return this.chain.length;
    },
    addLink(value) {
        this.chain.push(value);
        return this;
    },
    removeLink(position) {
        if (!Number.isInteger(position)) {
            this.chain = [];
            throw new Error();
        }
        this.chain.splice(position - 1, 1);
        return this;
    },
    reverseChain() {
        this.chain.reverse();
        return this;
    },
    finishChain() {
        let arr = this.chain.map(elm => '( ' + elm + ' )');
        this.chain = [];
        return arr.join('~~');
    }
};

module.exports = chainMaker;