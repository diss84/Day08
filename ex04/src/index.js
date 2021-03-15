function localScope() {
    // Write code below this line
    
    var myVariable = "I am here!"; 
    console.log(myVariable);
    
    // Write code above this line
}  
localScope();   
    
    // myVariable is not defined outside of localScope
    if (typeof myVariable != "undefined") {
        console.log('outside localScope', myVariable)
    } else {
        console.log('outside localScope UNDEFINED!!!')
    }
module.exports = localScope;
  