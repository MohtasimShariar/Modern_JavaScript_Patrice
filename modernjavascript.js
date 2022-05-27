// Es6 fat arrow function

// // 1st code 
// function number() {
//    return 10;    
// }
// console.log(number());
// // normal function now convert into arrow function
// let num = ()=>{
//    return 12;
// }
// console.log(num());
// // or we can write
//  let nums = ()=> 15;
//  console.log(nums());
//  //or we can write
//  let numb = (a,b)=> a+b;
//  console.log(numb(10,6));

// //2nd code THIS keyword function example in arrow. 
// const person = {
//    firstName: "John",
//    lastName : "Doea",
//    id       : 5566,
//    fullName : function() {
//      return this.firstName + " " + this.lastName;
//    },
//    getfullName:function() {
//        return this.fullName();
//       }
//  };
//  console.log(person.getfullName());
// //when this key define as a person but when we use call() function then we use THIS key word outside of the person.

// //First object person
// const person1 = {
//    fullName: function() {
//      return this.firstName + " " + this.lastName;
//    }
//  }
//  //second object  person
//  const person2 = {
//    firstName:"John",
//    lastName: "Doe",
//  }

//  // Return "John Doe":
//  console.log(person1.fullName.call(person2));

//using arrow  function
// var javascript = {
//     name:"javascript",
//     libraries:["react","vue","Angular","native"],
//     printLibraries: function(){
//        //forEach function ka global thaka ai function a use korer jonno  arrow function use kora hoi.
//        this.libraries.forEach((a) => console.log(`${this.name} loves ${a}`));
//     }
// };
// javascript.printLibraries();

//3rd code index.html show AddeventListener function example in arrow.

const searchInput = document.querySelector(".search");
const display= document.querySelector(".result");
const thanks = document.querySelector(".thanks");

// normal function that works perfectly
function show(){
   display.innerHTML = this.value;
   var self=this;
   setTimeout(function () {
      thanks.innerHTML= `You have typed: ${self.value}`;
   }, 1000);
}
// when use arrow function
// const show_me = ()=> {
//    display.innerHTML= this.value;
// };
searchInput.addEventListener("keyup",show);

