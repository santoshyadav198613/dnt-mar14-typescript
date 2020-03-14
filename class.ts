import { Department } from './interface';

export class Employee {
    private id: number;
    name: string;
    age: number;
    email: string;
    department: Department;

    // Setter
    set Id(id) {
        this.id = id;
    }

    // Getter
    get Id() {
        return this.Id;
    }

    constructor() { }

    getName() {
        return this.name;
    }
}

// public 
// private
// protected
let newEmp = new Employee();

// Employee.getName();

newEmp.Id(10);

newEmp.getName();
