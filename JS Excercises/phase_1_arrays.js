Array.prototype.uniq = function() {
  let arr = [];
  
  this.forEach(ele => {
    if (!arr.includes(ele)) { 
      arr.push(ele); 
    }
  });
  
  return arr;
};

// Array.prototype.twoSum = function(target) {
//   this.forEach(num1 => {
//     this.forEach(num2 => {
//       if(num2)
//     });
//   });
// };

Array.prototype.twoSum = function(target) {
  let result = [];
  let i;
  let j;
  for(i = 0; i < this.length - 1; i++) {
    for(j = i + 1; j < this.length; j++) {
      if(this[i] + this[j] === target) {
        result.push([i, j]);
      }
    }
  }
  return result;
};

Array.prototype.transpose = function() {
  let matrix = Array.from(
    { length: this[0].length },
    () => []
    // Array.from({ length: 0 }
  );
  
  let i; let j;
  
  for(i = 0; i < this.length; i++) {
    for(j = 0; j < this[i].length; j++) {
      matrix[j].push(this[i][j]);
    }
  }
  
  return matrix;
};