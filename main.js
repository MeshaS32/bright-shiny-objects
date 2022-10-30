// ┌─────────────────┐
// │ Your code here! │
// └─────────────────┘


/*functionName: createUser
//parameters: 2 strings (FirstName, LastName)


//return: object
{
    firstName: string
    lastName: string
}
putting firstName. and lastNme in an object

*/

function createUser(firstName, lastName){
    let user = {
        firstName: firstName,
        lastName: lastName,
    }
    return user;
}
console.log(createUser("Kamesha", "Hamilton"))
console.log(createUser(" Mesi", " Kaleziq"))

//functionName setAge
//parameter: user(object), age(number)
//user =
//{ firstName: string
// lastName

//return user
//}

function setAge(user, age){
    user.age = age
    return user;
}
console.log(setAge(createUser("Kamesha", "Hamilton"),32))
console.log(setAge({firstName: "Kamesha", lastName: "Hamilton"}, 32))


function incrementAge(user){
    user.age = user.age + 1
    return user;
}
console.log(incrementAge(createUser("Kamesha", "Hamilton")))
console.log(incrementAge({firstname: "Kamesha", lastname: "Hamilton"}))


/*
function name- fixCar
parameters

car= {
    make
    model: string
    year: number
    needsMaintenance
    
    return car object
}

*/

function fixCar(car){
    car.needsMaintenance = false;
    return car
}
console.log(fixCar({  
    make: 'Ford',
    model: 'Mustang',
    year: 1969,
needsMaintenance: true}))


/*
function

*/



function addGrades(student, newGrades){

    student.grades = student.grades.concat(newGrades)
 
return student;
}
let student = {
    name: 'Anthony Derosa',
    email: 'anthony.derosa@codeimmersives.com',
    grades: [80, 100, 95,] 
    }  
let newGrades = [80,70,90]

console.log(addGrades(student, newGrades)) 



function getDataType(value, key){
    let K = key
    let V = value

return typeof K
}
console.log(getDataType('car make ', 1969))
  
   



  
    let todo = ["get gas ", "Buy groceries"]
   let newTodo = ["cut the lawn ", "cook dinner "]

   function addToDo(todo, newTodo){
    todo = todo.push(newTodo);
    return todo
   }
   console.log

   


//    function addSong(album, song){
//     album = album.push(songs)
//     album[duration];  album[duration] += song[duration]
//    }


//    function updateReportCard()

  
   






// ┌─────────────────────────────────────────────────────────────────────────┐
// │ Code used for testing. Do not modify!                                   │                         
// │                                                                         │
const isDef = (arg) => arg === 'function';
const pass = () => undefined;
// │                                                                         │
module.exports.createUser = isDef(typeof createUser) ? createUser : pass;
module.exports.setAge = isDef(typeof setAge) ? setAge : pass;
module.exports.incrementAge = isDef(typeof incrementAge) ? incrementAge : pass;
module.exports.fixCar = isDef(typeof fixCar) ? fixCar : pass;
module.exports.addGrades = isDef(typeof addGrades) ? addGrades : pass;
module.exports.getDataType = isDef(typeof getDataType) ? getDataType : pass;
module.exports.addTodo = isDef(typeof addTodo) ? addTodo : pass;
module.exports.addSong = isDef(typeof addSong) ? addSong : pass;
module.exports.updateReportCard = isDef(typeof updateReportCard) ? updateReportCard : pass;
// │                                                                         │
// └─────────────────────────────────────────────────────────────────────────┘
