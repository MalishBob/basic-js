const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if(!Array.isArray(arr)) new Error();
  let arr_mod = arr;

  return loop(arr_mod);
};

let loop = (arr) => {

  let arr_mod = arr;
  for (let i = 0; i < arr.length; i++) {
    
    if(arr[i] == '--discard-next'){
      if(i === (arr.length-1)) {
        arr_mod.pop();
      } else {
        arr_mod.splice(i,2);
      }
      arr_mod.splice(i,2);
    } else if(arr[i] == '--discard-prev') {
        if(i === 0) {
          arr_mod.shift();
        } else {
          arr_mod.splice(i-1,2);
        }
    } else if(arr[i] == '--double-next') {
      isLastElm = (i === arr.length-1) ? true : false;
      if(isLastElm){
        arr_mod.splice(i,1);
      } else {
        let next_val = arr[i+1];
        arr_mod.fill(i,1,next_val);
      }
    } else if(arr[i] == '--double-prev') {
      isFirstElm = (i === 0) ? true : false;
      if(isFirstElm){
        arr_mod.splice(i,1);
      } else {
        let prev_val = arr[i-1];
        arr_mod.fill(i,1,prev_val);
      }
    }
  }
  return arr_mod;
}

