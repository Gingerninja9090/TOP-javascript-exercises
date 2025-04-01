const reverseString = function(text) {
    let wordArray = text.split("");
    let splitWord = wordArray.reverse();
    return splitWord.join("");
};

// Do not edit below this line
module.exports = reverseString;
