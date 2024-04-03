// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  // This code has the array to store collected employee objects
  const employees = [];
  // This code of line we hae the flag to control loop
  let continueAdding = true;

  // This code has the loop to prompt user for eomplyye data
  while (continueAdding){
    const firstName = prompt("Plug in employee's first name:");
    const lastName = prompt("Plug in employee's last name:");
    let salary = prompt("Plug in emplyee's salary:");


    // Next section convert salary to a number, default to 0 if invalid input
    salary = isNaN(parseInt(salary)) ? 0 : parseInt(salary);

    // This code i created employee object and push it to the employees array 
    employees.push({
      firstName: firstName,
      lastName: lastName,
      salary: salary
    });
    // Here we are asking if the user wants to add another employee
    const continueImput = confirm("Would you like to add another employee?");
    continueAdding = continueImput
  }
return employees;
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  let totalSalary = 0;

  for(const employee of employeesArray){
    totalSalary += employee.salary;
  }

  // calculating avarage salary
  const averageSalary = employeesArray.length > 0 ? totalSalary / employeesArray.length : 0;
  
  // Logging info of avarage salary to console
  console.log('Average Salary: $${averageSalary.toFixed(2)}');


}
// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // select a random index within the range of the employees array
  const randomIndex = Math.floor(Math.random() * employeesArray.length);

  // Get the random employee object
  const randomEmployee = employeesArray[randomIndex];

  // Log the random employee's information to the console
  console.log('Random Employee: ${randomEmployee.firstName} ${randomEmployee.lastName}');
}


/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
