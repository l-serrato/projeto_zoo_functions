const data = require('../data/zoo_data');

function isManager(id) {
  return data.employees.some((pessoa) => pessoa.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const check = data.employees.filter((person) => (person.managers.includes(managerId)));
  return check.map((employee) => `${employee.firstName} ${employee.lastName}`);
}

module.exports = { isManager, getRelatedEmployees };
