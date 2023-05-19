var x = [1,3,5,7];
var y = [2,4,6];
x[2] = y[x.length-3] + x[x[0]+y[0]];
console.log(x);

//console: [1,3,11,7]
