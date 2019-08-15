
// change background color for a button
document
  .getElementById('button')
  .addEventListener('click', function ({ target: { style } }) {
    style.backgroundColor === 'peru'
      ? style.backgroundColor = 'white'
      : style.backgroundColor = 'peru'
  })

// stablishing elements for clicks events
const click = ({ target: { style } }) => {
  style.color === 'white'
    ? style.color = 'black'
    : style.color = 'white'
}

// stablishing elements for mouse over & out
const mouseOut = ({ target: { style } }) => {
  style.backgroundColor = 'blue'
}

const mouseOver = ({ target: { style } }) => {
  style.backgroundColor = 'green'
}

// creating function
function applyButtonCSS (listElementClass) {
  const listElement = document.getElementsByClassName(listElementClass)
  for (let i = 0; i < listElement.length; i++) {
    listElement[i].addEventListener('mouseover', mouseOver)
    listElement[i].addEventListener('mouseout', mouseOut)
    listElement[i].addEventListener('click', click)
  }
}

// running function
applyButtonCSS('example')
