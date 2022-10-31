const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  return data.employees.find((f) => f.firstName === employeeName || f.lastName === employeeName);
}

module.exports = getEmployeeByName;
