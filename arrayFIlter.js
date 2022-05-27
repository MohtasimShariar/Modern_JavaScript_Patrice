var numbers =[1,2,3,4,5,6,1,8,9,10];
var result=numbers.filter((currentValue, index,array)=>{
    // return !(index%2);
    return currentValue> 3;
    // return array[5];
});
console.log(result);