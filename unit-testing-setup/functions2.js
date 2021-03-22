const functions2 = {
    addOne: (numbers)=>numbers.map(number=>
        number + 1
    ),
    getWordLengths: function(someWords) {
       return someWords.map(word=> word.length)
    },
    findNeedle: function(words, wordToFind){
        return words.indexOf(wordToFind)
    }}


module.exports = functions2