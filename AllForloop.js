// 1for loop, 2for in , 3for of

for (let i = 0; i <=5; i++) {
    console.log(i);
}


//2nd code for in.
const person={
    name: 'onim',
    age: 26
};
for(property in person) {
    console.log(property,":");
}
//when use array. It's give us arrayIndex.
const Marray=[1,2,3,4,5,6,7,8];
for(element in Marray) {
    console.log(element,":");
}
//3rd code for of
//when use array Of loop. It's give us return full array.
const ofarray=[1,2,3,4,5,6,7,8];
for(element of ofarray) {
    console.log(element,":");
}
//when use string Of loop. It's give us return full .
const mystring ="Hello brothers ";
for(element of mystring) {
    console.log(element,":");
}

