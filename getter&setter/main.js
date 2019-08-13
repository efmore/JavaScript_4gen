// example object
var persona = {
  name: 'Emanuel',
  heightUnit: 'cm',
  birthDate: '1994-09-06',
  weight: {
    unit: 'kg',
    value: 75
  },
  height: {
    unit: 'cm',
    value: 170
  },
  get getHeight () {
    return `${this.height.value} ${this.height.unit}`
  },
  get getWeight () {
    return `p${this.weight.value} ${this.weight.unit}`
  }
}

// abtract something
var corporateBuilding = {
  address: {
    street: 'Rua Tabapuã',
    number: 743,
    neightborhood: 'Itaim bibi',
    city: 'São Paulo',
    country: 'Brazil',
    postalCode: {
      postalNumber: '04533',
      postalComplement: '012'
    },
    get getPostalCode () {
      return `${this.postalCode.postalNumber}-${this.postalCode.postalComplement}`
    },
    get getFullAdress () {
      return `${this.address.street} ${this.address.number}, ${this.adress.neightborhood}, ${this.adress.city}, ${this.adress.country}, ${this.adress.getPostalCode()}`
    }
  },
  peopleCapacity: '',
  floors: 5,
  hasEater: true,
  hasAirConditioner: true,
  actualEmployees: '',
  get getFullCapacity () {
    if (this.actualEmployees <= this.peopleCapacity) {
      return true
    } else {
      return false
    }
  },
  set setPeopleCapacity (peopleCapacityNumber) {
    peopleCapacityNumber = prompt('Add the actual employees number')
    this.peopleCapacity = peopleCapacityNumber
  },
  set setActualEmployees (actualEmployeesNumber) {
    actualEmployeesNumber = prompt('Add the actual employees number')
    this.actualEmployees = actualEmployeesNumber
  },
  get getActualCapacityPercentage () {
    return Number(this.actualEmployees / this.peopleCapacity)
  }
}

// abstract beer
// given an array, turn into objects using constructor function
function Beer (brand, type, presentation) {
  this.brand = brand
  this.type = type
  this.presentation = presentation
}

var beers = [
  'xx,lager,1L',
  'skol,pilsen,lata',
  'paulaner,weiss,yarda'
]

function createBeer (array) {
  for (index in array) {
    const beerFromArray = array[index].split(',')
    var newBeer = new Beer(beerFromArray[0], beerFromArray[1], beerFromArray[2])
    console.log(newBeer)
  }
}

createBeer(beers)
