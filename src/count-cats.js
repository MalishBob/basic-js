const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  // throw new CustomError('Not implemented');

  let catsCount = 0;
  if(matrix && matrix.length>0){
    for(i=0; i<matrix.length; i++){
      for(j=0; j<matrix[i].length; j++){
        if(matrix[i][j] === '^^'){
          catsCount++;
        }
      }
    }
  } else {
    return 0;
  }
  return catsCount;
  
};
