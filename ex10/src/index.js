function mathTest(x, y){
    // Change code below this line
    if (x < 0 || y < 0) return undefined;
     
    return Math.round(Math.pow(Math.sqrt(x) + Math.sqrt(y), 2));
    // Change code above this line 
}
mathTest();
console.log(mathTest(2,2));
console.log(mathTest(-2,2));
console.log(mathTest(2,-2));
console.log(mathTest(2,8));
console.log(mathTest(3,3));
console.log(mathTest(0,0));

module.exports = mathTest;