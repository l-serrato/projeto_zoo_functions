const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const beast = data.species.find((animals) => animals.name === animal);
  return beast.residents.every((creature) => creature.age >= age);
}

module.exports = getAnimalsOlderThan;
