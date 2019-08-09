// abstraer object  -> car

var car = {
  brand: 'citröen',
  doors: 4,
  color: 'silver',
  origin_country: 'France',
  model: 'Aircross',
  type: 'suv',
  price: 74290,
  coin: 'reais'
}

for (const key in car) {
  console.log(`${key}:${car[key]}`)
}

console.table(car)
console.log(`${car.doors}:${car.color}`)

// reduce to obtain average with objects
var kardex = [
  {
    name: 'History',
    grade: 9.2
  }, {
    name: 'Math',
    grade: 10
  }, {
    name: 'English',
    grade: 6.7
  }, {
    name: 'Backend',
    grade: 8
  }
]

// using forEach
var sum = 0
kardex.forEach((item) => {
  sum = sum + item.grade
})
var average = sum / kardex.length
console.log(average)

// using reduce
var sum2 = kardex.reduce((initial, current) => initial + current.grade, 0)
var average2 = sum2 / kardex.length
console.log(average2)

// lower grade
var minGradeCalc = kardex.reduce((minGrade, { grade }) => {
  console.log(grade)
  console.log(minGrade)
  if (minGrade > grade) {
    minGrade = grade
  }
})
console.log(minGradeCalc)

// cesar encripting
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

function cesarEncripting (word) {
  const wordLetters = word.split('')

  for (index in wordLetters) {
    for (i in alphabet) {
      if (alphabet[i] = wordLetters[index]) {
        var indexFix = Number(i) + 4
        wordLetters[index] = alphabet[indexFix]
        console.log(alphabet[indexFix])
      }
    }
  }

  console.log(wordLetters.join(''))
}

var wordInput = prompt('Tell me a word and I will encript it')
cesarEncripting(wordInput)

// 'Holi a todos'
// ['Holi','a','todos']
// 1-Holi 2-a 3-todos
// 1-H      2-A     3-T
// 1-Hola   2-A     3-Todos
// ['Holi','A','Todos']
// 'Holi A Todos'
// const capitalize = function (phrase) {
//   const wordArray = phrase.split(' ')
//   for (index in wordArray) {
//     const word = wordArray[index]
//     const letterCapitalize = word[0].toUpperCase()
//     const wordCapitalize = `${letterCapitalize}${word.slice(1)}`
//     wordArray[index] = wordCapitalize
//   }
//   return wordArray.join(' ')
// }
