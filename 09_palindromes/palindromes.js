const palindromes = function (string) {
    const validFilter = 'abcdefghijklmnopqrstuvwxyz0123456789';

    filteredString = string.toLowerCase().split('').filter((values) => validFilter.includes(values)).join('');

    ReversedString = filteredString.split('').reverse().join('');

    return ReversedString === filteredString;
};

// Do not edit below this line
module.exports = palindromes;
