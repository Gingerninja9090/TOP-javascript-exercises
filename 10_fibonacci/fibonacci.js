const fibonacci = function(reqNum) {
    if (reqNum < 0)
        return "OOPS"
    if (reqNum == 0)
        return 0;

    let firstNum = 1;
    let secondNum = 0;
    
    for (let i = 1; i < reqNum; i++) {
        let current = firstNum + secondNum;
        secondNum = firstNum;
        firstNum = current;
    }

    return firstNum;
};

// Do not edit below this line
module.exports = fibonacci;
