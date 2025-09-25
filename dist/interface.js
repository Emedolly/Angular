"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let user = {
    name: "Emeema",
    age: 30,
    id: 101,
    email: "dolly@gmail.com"
};
//To get only name and email from user object we can call it as object destructuring
//user as username alias name we can use if we want to change the name of the property
let { name: userName, email } = { name: "Emeema",
    age: 30,
    id: 101,
    email: "dolly@gmail.com" };
let employee = {
    name: "Mike",
    age: 32,
    id: 201,
    salary: 50000
};
//Array desctructuring
let [user1, user2, ...restUsers] = [
    { name: "Emeema", age: 30, id: 101, email: "dolly@gmail.com" },
    { name: "Mike", age: 32, id: 201, email: "mike" },
    { name: "doll", age: 28, id: 301, email: "doll" },
    { name: "doll1", age: 28, id: 301, email: "doll" },
];
console.log(user1);
console.log(user2);
console.log(restUsers);
//Filter a value
let result = restUsers.filter((user) => user.name === "doll1");
console.log(result);
//While doing the filter always use the entire array instead of only the resmaining elements 
//# sourceMappingURL=interface.js.map