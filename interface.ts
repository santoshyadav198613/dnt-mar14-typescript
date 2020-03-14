export interface Department {
    id?: number;
    name: string,
    address: string;
}

export let department: Department;

department = {
    id: 1,
    name: 'IT',
    address: 'pune'
};

// object destructing
let { id, name: deptName, address } = department;

console.log(id, deptName);