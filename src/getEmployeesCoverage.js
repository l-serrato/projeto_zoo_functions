const data = require('../data/zoo_data');

const objectEmployee = [];
const theList = data.employees.forEach((employee) =>
  objectEmployee.push({
    id: employee.id,
    fullName: `${employee.firstName} ${employee.lastName}`,
    species: data.species.filter((specie) =>
      employee.responsibleFor.includes(specie.id)).map((specieName) => specieName.name),
    locations: data.species.filter((specie) =>
      employee.responsibleFor.includes(specie.id)).map((specieLocation) => specieLocation.location),
  }));

function getEmployeesCoverage(obj) {
  if (obj === undefined) return objectEmployee;
  const { name, id } = obj;
  if (objectEmployee.find((employee) => employee.id === id)) {
    return objectEmployee.find((employee) => employee.id === id);
  }
  if (objectEmployee.find((employee) => employee.fullName.includes(name))) {
    return objectEmployee.find((employee) => employee.fullName.includes(name));
  }
  throw new Error('Informações inválidas');
}
console.log(theList);
module.exports = getEmployeesCoverage;
