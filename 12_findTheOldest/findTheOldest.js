const findTheOldest = function(people) {
  let oldestGuyAge = 0;
  let personAge;
  let oldestGuy;
  for (let i = 0; i < people.length; i++ ){
    if (people[i].yearOfDeath == undefined) {
      people[i].yearOfDeath = currentDate.getFullYear();
    }
    personAge = people[i].yearOfDeath - people[i].yearOfBirth
    if (personAge > oldestGuyAge) {
        oldestGuyAge = personAge
        oldestGuy = people[i]
    }
  }
  return oldestGuy
};

const currentDate = new Date;

// Do not edit below this line
module.exports = findTheOldest;
