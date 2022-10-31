const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (animal === undefined) {
    return data.species.reduce((acc, curr) => {
      acc[curr.name] = curr.residents.length;
      return acc;
    }, {});
  }
  const beast = data.species.find((specie) => specie.name === animal.specie);
  if (animal.sex) {
    return beast.residents.filter((bicho) => bicho.sex === animal.sex).length;
  }
  return beast.residents.length;
}

module.exports = countAnimals;
