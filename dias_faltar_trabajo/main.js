// Se tiene una lista con el nombre de cada uno de los empleados
// con los días que faltaorn al trabajo
// Si el sueldo diario son $450.00 y  por  cada día
// que faltaron se le descuenta el  2% del salario (acumulable)
// ¿cuánto es el sueldo final del empleado?
// output: {name}: ${salary}.00

const DAILY_SALARY = 450
const DISCOUNT = 0.02

var employees = [
  ['David', 8],
  ['Jose' , 12]
]

for (let employeesIndex = 0; employeesIndex < employees.length; employeesIndex++) {
  let currentEmployeeDays = employees[employeesIndex][1]
  let currentEmployeeName = employees[employeesIndex][0]
  let totalDiscountPer = currentEmployeeDays * DISCOUNT
  let totalDiscountSal = totalDiscountPer * DAILY_SALARY
  let totalSalaryMonth = (DAILY_SALARY*30) - totalDiscountSal
  console.log(`${currentEmployeeName} is gonna have a $${totalDiscountSal}.00 discount`)
  console.log(`So his/her monthly salary is gonna be $${totalSalaryMonth}.00`)
}

