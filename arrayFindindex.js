
var numbers =[1,2,3,4,5,6,7,8,9,10];
var result=numbers.findIndex((currentValue, index,array)=>{
    // return !(index%2);
    return currentValue> 6;
    // return array[5];
});
console.log(result);