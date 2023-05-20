var x = [1,3,5,8];
var temp = x[x.length-1];
x[x.length-1] = x[0];
console.log(x);

//output: [1,3,5,1]
