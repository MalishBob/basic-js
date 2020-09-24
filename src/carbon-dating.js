const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {

  if(typeof sampleActivity !== 'string' 
    || isNaN(parseFloat(sampleActivity)) 
    || /^[\-a-zA-Z]\.{2,}$/.test(sampleActivity) 
    || parseFloat(sampleActivity)>MODERN_ACTIVITY  
    || parseFloat(sampleActivity) <= 0){
       return false; 
  }

  let A = parseFloat(sampleActivity);
  let A_0 = MODERN_ACTIVITY;
  let t_05 = HALF_LIFE_PERIOD;
  let k = 0.693/t_05;
  let t = Math.ceil(Math.log(A_0/A)/k);

  return t;
};
