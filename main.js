let rateSum = 0.0;
let max = 0.0;
let min = 0.0;
let employeesList = [
    {
        name: "Артем",
        rate: 120000
    },
    {
        name: "Илья",
        rate: 190000
    },
    {
        name: "Гриша",
        rate: 5000
    },
    {
        name: "Антон",
        rate: 150000
    },
    {
        name: "Егор",
        rate: 100000
    }
];

console.log(employeesList);

printRatesSum(employeesList);
printAverageRate(employeesList);
printMaxRate(employeesList);
printMinRate(employeesList);


function printRatesSum (employeesList) {
    rateSum = 0.0;
    employeesList.forEach(employee => rateSum += employee ['rate']);
    console.log("Сумма всех зарплат: " + rateSum);
}

function printAverageRate (employeesList) {
    console.log("Средняя зарплата сотрудников: " + rateSum / employeesList.length);
}

function printMaxRate (employeesList) {
    max = 0.0;
    for (let employee of employeesList) {
        if (max < employee.rate){
            max = employee.rate;
        }
    }
    console.log("Максимальная зарплата сотрудника: " + max);
}

function printMinRate (employeesList) {
    min = 190000;
    for (let employee of employeesList) {
        if (min > employee.rate){
            min = employee.rate;
        }
    }
    console.log("Минимальная зарплата сотрудника: " + min);
}








    


