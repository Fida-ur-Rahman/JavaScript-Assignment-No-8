// Loop in js
// for loop
for (let i=1; i<5; i++){
    console.log("Fida ur Rahman")
}

// while loop
let j = 1;
while(j <= 10){
    console.log("Rahman")
    j++;
}

// Do while loop
let k = 1;
do{
    console.log("Saba")
    k++;
}
while(k <= 10); 

// for of Loop
let str = "Fida ur Rahaman";
let size = 0;
for (let val of str){
    console.log("Value of str =",val)
    size++;
}
console.log("size of string =", size)

// for in lopp
let student ={
    name1 :"fida",
    cgpa : "3.5",
    country : "pak"
}
for(let val in student){
    console.log(val)
}