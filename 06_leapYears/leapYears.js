const leapYears = function(inputYear) {
    remainderYearFours = inputYear % 4;
    remainderYearHundreds = inputYear % 100;
    remainderYearFourHundreds = inputYear % 400;

    if (remainderYearFourHundreds === 0)
        return true;
    else if (remainderYearFours === 0 && remainderYearHundreds === 0)
        return false;
    else if (remainderYearFours === 0)
        return true;
    else return false;
};

// Do not edit below this line
module.exports = leapYears;
