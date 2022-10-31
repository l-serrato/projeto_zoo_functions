const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  return data.employees.find((g) => g.firstName === employeeName || g.lastName === employeeName);
}

module.exports = getEmployeeByName;
