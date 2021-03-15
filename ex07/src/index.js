var sum = 0;
    // Only change code below this line
function addThree() {
    sum = sum + 3;
    console.log(sum);
    // Only change code above this line
}
addThree();
    // Only change code below this line
function addFive() {
    sum = sum + 5;
    // Only change code above this line
}
addFive();

console.log(sum);
module.exports = {
    addThree,
    addFive
};