
function add(num1: number, num2: number): number {
    return num1 + num2;
}

const sub = function (num1, num2) {
    return num1 - num2;
}

sub(10, 5);

const divide = (num1: number, num2: number) => num1 / num2;


function empnames() {
    return ['tets', 'test2', 'test3','test4']
}


// ...restnames spread operator
let [name1, name2, ...restnames] = empnames();

console.log(name1,name2,restnames);