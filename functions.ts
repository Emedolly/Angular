//named function
function add(number1: number ,number2: number,number3?: number): number{
    return number1+number2;
}

console.log(add(10,20));

//Another wy of writing function using arrow function
const sub = (num1:number,num2:number):number => num1-num2;
console.log(sub(20,10));

//Another way of writing function using function expression
const mult = function(num1:number,num2:number):number{
    return num1*num2;
}
console.log(mult(10,20));

//Optional parameters
function add1(num1:number,num2:number,num3?:number):number {
  return num3 ? num1+num2+num3 : num1+num2;
}
console.log(add1(10,20,30));
console.log(add1(10,20));

//required parameters/ default parameters num3=10 is default here
const sub1  = (num1:number,num2:number,num3=10):number => num1-num2-num3;
console.log(sub1(20,10));
console.log(sub1(20,10,5));

//Rest parameters
function add2(num1:number , num2:number, ...num3:number[]):number{
  return num1+num2+num3.reduce((accum,current)=>accum+current,0);
}
console.log(add2(10,20,...[30,40,50])); 

