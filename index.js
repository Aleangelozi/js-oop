//Procedural approach section
let baseSalary = 30000;
let overTime = 10;
let rate = 20;

function getWage(baseSalary, overTime, rate) {
    return baseSalary + (overTime * rate);
}

console.log(getWage(baseSalary, overTime, rate));



//OOP approach section
let employee = {
    baseSalary: 30000,
    overTime: 10,
    rate: 20,
    getWage: function() {
        return this.baseSalary + (this.overTime * this.rate);
    }
}

console.log(employee.getWage());