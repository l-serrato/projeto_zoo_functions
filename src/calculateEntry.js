const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const ages = {
    child: entrants.filter((entrant) => (entrant.age < 18)).length,
    adult: entrants.filter((entrant) => (entrant.age >= 18 && entrant.age < 50)).length,
    senior: entrants.filter((entrant) => (entrant.age >= 50)).length,
  };
  return ages;
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  const price = [20.99, 49.99, 24.99];
  const object = countEntrants(entrants);
  const totalPrice = object.child * price[0] + object.adult * price[1] + object.senior * price[2];
  return totalPrice;
}

module.exports = { calculateEntry, countEntrants };
