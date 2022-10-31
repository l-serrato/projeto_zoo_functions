const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const beast = data.employees.find((employee) => [id].includes(employee.id)).responsibleFor[0];
  const info = data.species.find((animal) => animal.id === beast).residents;
  const Eldest = info.sort((age1, age2) => age2.age - age1.age)[0];
  return [Eldest.name, Eldest.sex, Eldest.age];
}

module.exports = getOldestFromFirstSpecies;
