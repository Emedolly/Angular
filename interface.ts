export interface User{
  name:string;
  age:number;
  id:number;
  email?:string; // optional property
}

let user : User={
  name:"Emeema",
  age:30,
  id:101,
  email:"dolly@gmail.com"};

  //To get only name and email from user object we can call it as object destructuring
  //user as username alias name we can use if we want to change the name of the property
let {name: userName ,email}:User={name:"Emeema",
  age:30,
  id:101,
  email:"dolly@gmail.com"};
  interface Employees extends User{
salary:number;
  }


  let employee : Employees={
    name:"Mike",
    age:32,
    id:201,
    salary:50000
  };

  export interface Login{
    login():User;  //you are not responsible to implement the method interface is not responsible for method implementation but respective class will implement the method
  }


  //Array desctructuring
  let [user1,user2,...restUsers]: User[] =[
    {name:"Emeema",age:30,id:101,email:"dolly@gmail.com"},
    {name:"Mike",age:32,id:201,email:"mike"},
    {name:"doll",age:28,id:301,email:"doll"},
    {name:"doll1",age:28,id:301,email:"doll"},
];

console.log(user1);
console.log(user2);
console.log(restUsers);

//Filter a value
let result = restUsers.filter((user)=>user.name==="doll1");
console.log(result);
//While doing the filter always use the entire array instead of only the resmaining elements 