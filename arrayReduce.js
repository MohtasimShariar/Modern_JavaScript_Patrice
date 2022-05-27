var numbers = [1, 2, 3, 4, 5,6];
//main array ka change kora na.

var sum = numbers.reduce((previousValue,currentValue,currentIndex,array)=>{
    return previousValue + currentValue;
    //previousValue first a thaka na tai second parameter hisaba 0 neyasi
}, 0);
console.log(sum);