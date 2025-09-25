"use strict";
// interface Address{
//   street:string;
//   city: string;
//   state: string;
//   pin: number;
// }
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    #id;
    name;
    // address:Address; as soon as we import the address interface but constructor type should also be changed so this is where will get the error
    address; // public by default
    get empId() {
        return this.#id;
    }
    set empId(id) {
        this.#id = id;
    }
    //static method - we can call static method without creating an instance of the class
    static getEmployeeCount() {
        return 50;
    }
    constructor(id, name, address) {
        this.#id = id;
        this.name = name;
        this.address = address;
    }
    login() {
        return { name: "Emeema",
            age: 30,
            id: 101,
            email: "dolly@gmail.com" };
    }
    getNameWithAddress() {
        return `${this.name} stays in  ${this.address}`;
    }
}
let eme = new Employee(101, "Emeema", "Bangalore");
eme.empId = 201; // using setter
console.log(eme.empId); // using getter
// let empCount=Employee.getEmployeeCount();
// console.log(empCount);
class Manager extends Employee {
    constructor(id, name, address) {
        super(id, name, address);
    }
    getNameWithAddress() {
        return `Manager Name : ${this.name} , Address : ${this.address}`;
    }
}
let address = eme.getNameWithAddress();
console.log(eme);
console.log(address);
let mike = new Manager(201, "Mike", "Chennai");
console.log(mike.getNameWithAddress());
//here even if we remove this getNameWithAddress(): string {
//   return `Manager Name : ${this.name} , Address : ${this.address}`;
// } still we can call it and can get the same output because using base class method we can access it the same which is classified as visibility member
//console.log(mike.name); // we cannot access protected member outside the class or its child class
//console.log(mike.id); // we cannot access private member outside the class
//console.log(eme.id); // we cannot access private member outside the class
//console.log(eme.name); // we cannot access protected member outside the class or its child class
//console.log(eme.address); // we can access public member outside the class
//Short note on access modifiers
//public - can be accessed anywhere (default)
//private - can be accessed only within the class
//protected - can be accessed within the class and its child class
//Readonly modifier - we can use readonly modifier to make a property readonly. It can be initialized only at the time of declaration or in the constructor of the class. We cannot change the value of a readonly property outside the constructor.
//Example:
//# sourceMappingURL=class.js.map