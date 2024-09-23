
//Task 1: Create an employees array of employee objects
const employees = [ //each employee object contains an array of shifts that include days and hours worked

{ name: 'Peter', shifts: [{ day: 'Monday', hours: 4 }, { day: 'Thursday', hours: 1 }] },
    
{ name: 'Vaugh', shifts: [{ day: 'Tuesday', hours: 5 }, { day: 'Thursday', hours: 2 }] },
    
{ name: 'Steve', shifts: [{ day: 'Wednesday', hours: 7 },{day: 'Thursday', hours: 3}] },
    
{ name: 'Rhodes', shifts: [{ day: 'Friday', hours: 6 }] }
    
];

//Task 2: Create a function to display employee shift schedules
function displayEmployeeShifts(employees){ 
    console.log (`Employee: ${employees.name}`);
    console.log ("Shifts:");

    employees.shifts.forEach (shifts=>{ //iterating the employee's shifts and logging the day and hours for each shift
        console.log (` Day: ${shifts.day}, Hours: ${shifts.hours}`);
        });
    }
displayEmployeeShifts(employees[0]);
displayEmployeeShifts(employees[1]);
displayEmployeeShifts(employees[2]);
displayEmployeeShifts(employees[3]); //calling the function to display information about the shifts of each employee

//Task3: Create a function to assign a new shift
function assignShift(employeeName, day, hours) {
    const employee= employees.find (employee=> employee.name == employeeName);//finding the employee's name in the employees array
    if (!employee){
        console.log (`Employee "${employeeName}" not found.`)
        return; // the function stops running if the employee is not found after logging a message.
    }
const alreadyassigned = employee.shifts.some(shift=> shift.day== day);// checking if an employee has alreadu been assigned a shift on that day
if (alreadyassigned) {
    console.log (`${employeeName} has already been assigned a shift on ${day}.`);
    return;
}
employee.shifts.push({day, hours}); //adding the new shift to the employee's shifts array
console.log (`A ${hours} hour shift has been assigned to ${employeeName} on ${day}.`);
}
//calling the function
assignShift ("Rhodes","Thursday", 5); 
assignShift  ("Vaugh", "Tuesday", 2);//Vaugh already has been assigned, so a message will be displayed accordingly

//Task 4: Create a function to calculate total hours worked
function calculateTotalHours(employeeName){
const employee= employees.find(employee=> employee.name==employeeName); //finding the employee in the array

if (!employee) {
    console.log (`Employee ${employeeName} not found.`);
    return; //if the employee name is not found, the function will stop running after a message is d
}

let TotalHours=0; 
for (let i=0; i< employee.shifts.length; i++ ){ //looping through the shifts to add the hours
    TotalHours += employee.shifts[i].hours; // the hours of each shift is added to the total
}
console.log (`${employeeName} has worked for ${TotalHours} hours.`);//logging the total hours
return TotalHours; 
}
//calling the function to calculate the total hours
calculateTotalHours("Peter");
calculateTotalHours("Vaugh");
calculateTotalHours("Steve");
calculateTotalHours("Rhodes");
calculateTotalHours ("Val"); //this employee does not exist, so a message will be displayed accordingly.

//Task 5: Create a function to list employees with free days
function listAvailableEmployees (day) {
        const AvailableEmployees= employees.filter(employee=>{ //checking if the employee has a shift on the day
            const alreadyassigned= employee.shifts.some(shift=>shift.day==day);
            return !alreadyassigned;

        });
        if (AvailableEmployees.length==0){ //checking if no employees are available
            console.log (`No employees are available on ${day}.`);
            return;
        }
        console.log (`Employees available on ${day}:`);
        AvailableEmployees.forEach(employee=> console.log(employee.name)); //logging the names of the employees who are available
    }
listAvailableEmployees("Monday");
listAvailableEmployees("Tuesday");
listAvailableEmployees("Wednesday");
listAvailableEmployees("Thursday");
listAvailableEmployees("Friday"); //calling the function to check availability of employees on the day.






