//Spread operator(...). Spread means sorai dua 

var numbers = [1, 2, 3];
var CreateNewnumbers = [numbers[1],numbers[2],numbers[3], 4, 5,6,7,8];

//createNewnumbers a old numbers array ka new array ta sorai dua ar old method but spread Method use korla symple a hoia jai. 

var CreateNewnumbersWithsSpread = [...numbers,4, 5,6,7,8];
console.log(CreateNewnumbersWithsSpread);


//2nd code when we need array copy.It's use in a imutable way.

var numbers = [1,2,3];
var a = [...numbers]; // copy numbers array ar .
numbers.push(4);
console.log(numbers);
console.log(a);// a array change hoba na.

// 3rd code. spread method concat() method a o use hoi.

var numbers1 =[1,2,3,4,5,6,7,8,9,10];
var numbers2 = [1, 2, 3, 4, 5];

var numbers= [...numbers1,...numbers2];

console.log(numbers);

// 4th code. spread method object a o use hoi.

var obj1 = {
    x:1,
    y:2
}
var obj2 = {
    a:1,
    b:2
}
console.log({...obj1, ...obj2});


