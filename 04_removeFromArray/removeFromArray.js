const removeFromArray = function(inputArray, ...filterItems) {
    const outputArray = []; 
    inputArray.forEach((item) => {
        if (!filterItems.includes(item)) {
            outputArray.push(item)
        }
    });
    return outputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
