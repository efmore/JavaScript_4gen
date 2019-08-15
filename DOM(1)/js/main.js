// iterate elements over the DOM with an unordered list

var elements = [
  'element1',
  'element2',
  'element3',
  'element4',
  'element5'
]

var htmlElements = document.getElementsByClassName('element')

for (let i = 0; i < htmlElements.length; i++) {
  htmlElements[i].innerHTML = elements[i]
}

// given a array structure, generate 4 imgs and construct elements acording to the array

var cssImgsArray = [
  {
    src: 'img/img1.png',
    width: '100px',
    height: '100px'
  },
  {
    src: 'img/img2.png',
    width: '100px',
    height: '100px'
  },
  {
    src: 'img/img3.png',
    width: '100px',
    height: '100px'
  },
  {
    src: 'img/img4.png',
    width: '100px',
    height: '100px'
  }
]

var imgElements = document.getElementsByClassName('imgByDOM')

console.log(Object.keys(cssImgsArray[1]))

function applyCSSImg (cssArray) {
  for (let i = 0; i < cssArray.length; i++) {
    imgElements[i].setAttribute('src', cssArray[i].src)
    imgElements[i].setAttribute('width', cssArray[i].width)
    imgElements[i].setAttribute('height', cssArray[i].height)
    imgElements[i].setAttribute('alt', 'img' + (i + 1) + '.png')
  }
}

applyCSSImg(cssImgsArray)

// dado un element array, crear la estructura en el DOM
var nodes = [
  {
    tag: 'ul',
    children: [
      {
        tag: 'li',
        text: 'no'
      },
      {
        tag: 'li',
        text: 'me'
      }, {
        tag: 'li',
        text: 'quiero'
      }, {
        tag: 'li',
        text: 'ir'
      }
    ]
  }, {
    tag: 'ul',
    children: [
      {
        tag: 'li',
        text: 'no'
      },
      {
        tag: 'li',
        text: 'me'
      }, {
        tag: 'li',
        text: 'quiero'
      }, {
        tag: 'li',
        text: 'ir'
      }
    ]
  }, {
    tag: 'ul',
    children: [
      {
        tag: 'li',
        text: 'no'
      },
      {
        tag: 'li',
        text: 'me'
      }, {
        tag: 'li',
        text: 'quiero'
      }, {
        tag: 'li',
        text: 'ir'
      }
    ]
  }, {
    tag: 'ul',
    children: [
      {
        tag: 'li',
        text: 'no'
      },
      {
        tag: 'li',
        text: 'me'
      }, {
        tag: 'li',
        text: 'quiero'
      }, {
        tag: 'li',
        text: 'ir'
      }
    ]
  }, {
    tag: 'ul',
    children: [
      {
        tag: 'li',
        text: 'no'
      },
      {
        tag: 'li',
        text: 'me'
      }, {
        tag: 'li',
        text: 'quiero'
      }, {
        tag: 'li',
        text: 'ir'
      }
    ]
  }

]

const buildNodes = (nodes, parent) => {
  nodes.forEach(({ tag, children }) => {
    var nodeParent = document.createElement(tag)
    children.forEach(({ tag, text }) => {
      var node = document.createElement(tag)
      node.classList.add('listElement')
      var nodeText = document.createTextNode(text)
      node.appendChild(nodeText)
      nodeParent.appendChild(node)
    })
    document.getElementById(parent).appendChild(nodeParent)
    document.getElementById(parent).classList.add('list')
  })
}

buildNodes(nodes, 'container')

var count = 0
document
  .getElementById('title')
  .addEventListener('click', function () {
    console.log(++count)
  })
