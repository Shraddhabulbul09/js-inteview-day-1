// Q1
 // ==
//  var a = 10
//  var a = "10"
//  console.log(a);
// ===

// var a = 10
// var a = "10"
// console.log(a);




// Hoisting
var a;
console.log(a);

//TDZ
function someFun(){
    console.log(counter1);
}
var counter1 = 1;


// first class function

const myFunc = function(){
    console.log('Hello World');
}
myFunc();// Hello World

// pure function 

function add(a,b){
    return a+b;
}

const result = add(1,2)
console.log(result); //3