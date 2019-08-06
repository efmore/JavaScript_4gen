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

function currency_format (currency_variable) {
  return new Intl.NumberFormat('pt-BR',{ style: 'currency', currency: 'BRL'}).format(currency_variable)
}

for (let employeesIndex = 0; employeesIndex < employees.length; employeesIndex++) {
  let currentEmployeeDays = employees[employeesIndex][1]
  let currentEmployeeName = employees[employeesIndex][0]
  let totalDiscountPer = currentEmployeeDays * DISCOUNT
  let totalDiscountSal = totalDiscountPer * DAILY_SALARY
  let totalSalaryMonth = (DAILY_SALARY*30) - totalDiscountSal
  console.log(`${currentEmployeeName} is gonna have a ${currency_format(totalDiscountSal)} discount`)
  console.log(`So his/her monthly salary is gonna be ${currency_format(totalSalaryMonth)}`)
}

for (let index in employees) {
  let worker = employees[index]
  let totalDiscountPer = worker[1] * DISCOUNT
  let totalDiscountSal = totalDiscountPer * DAILY_SALARY
  let totalSalaryMonth = (DAILY_SALARY*30) - totalDiscountSal
  console.log(`${worker[0]} is gonna have a ${totalDiscountSal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} discount`)
  console.log(`So his/her monthly salary is gonna be ${totalSalaryMonth.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`)
}
