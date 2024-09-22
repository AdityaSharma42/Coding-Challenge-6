
const employees = [

{ name: 'Peter', shifts: [{ day: 'Monday', hours: 4 }, { day: 'Thursday', hours: 1 }] },
    
{ name: 'Vaugh', shifts: [{ day: 'Tuesday', hours: 5 }, { day: 'Thursday', hours: 2 }] },
    
{ name: 'Steve', shifts: [{ day: 'Wednesday', hours: 7 },{day: 'Thursday', hours: 3}] },
    
{ name: 'Rhodes', shifts: [{ day: 'Friday', hours: 6 }] }
    
];
function displayEmployeeShifts(employees){
    console.log (`Employee: ${employees.name}`);
    console.log ("Shifts:");

    employees.shifts.forEach (shifts=>{
        console.log (` Day: ${shifts.day}, Hours: ${shifts.hours}`);
        });
    }
displayEmployeeShifts(employees[0]);
displayEmployeeShifts(employees[1]);
displayEmployeeShifts(employees[2]);
displayEmployeeShifts(employees[3]);

function assignShift(employeeName, day, hours) {
    const employee= employees.find (employee=> employee.name == employeeName);
    if (!employee){
        console.log (`Employee "${employeeName}" not found.`)
        return;
    }
const alreadyassigned = employee.shifts.some(shift=> shift.day== day);
if (alreadyassigned) {
    console.log (`${employeeName} has already been assigned a shift on ${day}.`);
    return;
}
employee.shifts.push({day, hours});
console.log (`A ${hours} hour shift has been assigned to ${employeeName} on ${day}.`);
}

assignShift ("Rhodes","Thursday", 5);
assignShift  ("Vaugh", "Tuesday", 2);

function calculateTotalHours(employeeName){
const employee= employees.find(employee=> employee.name==employeeName);

if (!employee) {
    console.log (`Employee ${employeeName} not found.`);
    return;
}

let TotalHours=0;
for (let i=0; i< employee.shifts.length; i++ ){
    TotalHours += employee.shifts[i].hours;
}
console.log (`${employeeName} has worked for ${TotalHours} hours.`);
return TotalHours;
}
calculateTotalHours("Peter");
calculateTotalHours("Vaugh");
calculateTotalHours("Steve");
calculateTotalHours("Rhodes");
calculateTotalHours ("Val");

function listAvailableEmployees (day) {
        const AvailableEmployees= employees.filter(employee=>{
            const alreadyassigned= employee.shifts.some(shift=>shift.day==day);
            return !alreadyassigned;

        });
        if (AvailableEmployees.length==0){
            console.log (`No employees are available on ${day}.`);
            return;
        }
        console.log (`Employees available on ${day}:`);
        AvailableEmployees.forEach(employee=> console.log(employee.name));
    }
listAvailableEmployees("Monday");
listAvailableEmployees("Tuesday");
listAvailableEmployees("Wednesday");
listAvailableEmployees("Thursday");
listAvailableEmployees("Friday");






