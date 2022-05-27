// array prototype with find() method

//1st code
// var number = [1, 2, 3, 4, 5, 6, 7, 8];

// var result = number.find(function(currentValue,currentIndex,array) {
//     var value= currentValue >4;
//    return value;
// });
// console.log(number);
// console.log("Your result is:",result);

//2nd code
class student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    test() {
        console.log("hello");
    }
    // exampleFunction() {
    //     let array = [1,2,3];
    //     array.find(function() {
    //         this.test();
    //     });

           //or when use arrow function the no need this keyword

        exampleFunction(){
            let array= [1,2,3];
            array.find(() => {
                this.test();
            });
     
    }
} 
let students = new student("onim",26);

students.exampleFunction();
