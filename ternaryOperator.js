// ternary operator 
var age =18;
var type;
if (age>= 18) {
    type = "adult";
    
}else{
    type = "child";
}
console.log(type);
//Using ternary operator
var age=18;
var type= (age>=18) ? "adult" :"child";
console.log(type);

// or when use condition
var age= 15;
var type= (age>=18) ? "adult" :age < 10 ? "child" :"young";

console.log(type);
// 2nd code
var a =5;
var access= a>5;
console.log(access);
