// 1  palabra
// 3 vocales

var word = 'Palabra'
const VOWELS = ['a', 'e', 'i', 'o', 'u']
var vowelsCounter = 0
​
for (let wordIndex = 0; wordIndex < word.length; wordIndex++) {
    let currentLetter = word[wordIndex]
    for (let vowelIndex = 0; vowelIndex < VOWELS.length; vowelIndex++) {
        if (currentLetter === VOWELS[vowelIndex]) {
            vowelsCounter++
        }
    }
}
​
if (vowelsCounter >= 3) {
    console.log(`Tiene ${vowelsCounter} vocales`);
} else {
    console.error('Tiene muy pocas vocales');
}