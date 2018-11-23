Array.prototype.myEach = function(proc) {
  let i = 0;
  
  while (i < this.length) {
    proc(this[i]);
    i++;
  }
  
  return this;
};

Array.prototype.myMap = function(callback) {
  let result = [];
  
  this.myEach((el) => {
    result.push(callback(el));
  });
  
  return result;
};

Array.prototype.myReduce = function(proc, acc = null) {
  if (acc === null) {
    acc = this.shift();
  }
  
  this.myEach((el) => {
    acc = proc(acc, el);
  });
  
  return acc;
};

// [1,2,3].myReduce((el) => {
//   let sum;
//   sum += el;
// });