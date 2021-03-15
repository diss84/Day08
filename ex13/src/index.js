function randomRangeNumber(minNumber, maxNumber) {
    // Only change code below this line
return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
    // Only chage code above this line
}
randomRangeNumber();

console.log(randomRangeNumber(15, 20));


module.exports = randomRangeNumber;