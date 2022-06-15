const findTheOldest = function (array) {
  return array.reduce((previousPerson, currentPerson) => {
    const currentYear = new Date().getFullYear();
    if ((currentPerson.yearOfDeath ?? currentYear) - currentPerson.yearOfBirth
            > (previousPerson.yearOfDeath ?? currentYear) - previousPerson.yearOfBirth) {
      return currentPerson;
    }
    return previousPerson;
  });
};

// Do not edit below this line
module.exports = findTheOldest;
