var numbers = [1, 2, 3, 4, 5]
var numbers2 = [1, 2, 3, 4, 5, 10, 24, 25, 40]
var words = ['alugel', 'beleza', 'Antofagasta', 'cquimbo', 'Risotto', 'aleluia']

numbers.forEach((item, index, array) => console.log(item, index, array))

// return numbers odd or even
numbers.forEach((item) => {
 (item % 2 === 0) ? console.log(`${item} is even`) : console.log(`${item} is odd`)
})

// return array of elements %5
numbers2.filter(item => item % 5 === 0)

// return elements with a or A
words.filter(words => words[0] === 'a' || words[0] === 'A').forEach(item => {
  console.log(`The word ${item} is on the conditions criteria`)
})

// elements in array are positive even
numbers2.forEach((item) => { (item % 2 === 0 && item > 0) ? console.log(`${item} is positive even`) : console.log(`${item} is not part of the conditions`) })

// elements power 2
var total = 0
numbers2.forEach((item) => {
  total = total + item ** 2
})
console.log(total)
