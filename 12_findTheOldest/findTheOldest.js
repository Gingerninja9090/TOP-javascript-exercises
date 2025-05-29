const getAge = function(person) {
    if (person.yearOfDeath == null) {
        person.yearOfDeath = new Date().getFullYear();
    }

    return person.yearOfDeath - person.yearOfBirth;
    
};

const findTheOldest = function(people) {
    const sortedAges = people.toSorted(
        (person, nextPerson) => getAge(nextPerson) - getAge(person),
    );

    const oldestPerson = sortedAges[0];
    return oldestPerson
};
// Do not edit below this line
module.exports = findTheOldest;
