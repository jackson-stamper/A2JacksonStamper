/* Scenario: Create a program that will get the users' state (2 letters, capitalized eg. NE)
and current outside temperature (F). 
Then it will give them a personalized recommendation about clothing they should wear. 
These messages are stored in an array. Each message is an item in the array. 
You will create two versions of the program - one using if/else statement(s) and one using switch statement(s).
Put each program on a different form in the same project. 
*/

//declaring variables

let fName = prompt("What is your first name")
let state = prompt("Enter your state's 2 letter abbreviation")
let temp = Number(prompt("What is the current temperature at your location?"))

//declaring array
let messages = ["wear a warm coat, hat, scarf and gloves.",
                "wear a warm coat but you won't need a hat, a scarf, and warm gloves", 
                "wear your warmest coat, a warm hat, a scarf, and warm gloves", 
                "wear a warm coat, hat and gloves. Maybe a scarf too."]
/*
//if else statements
  if(state == "NE" && temp < 32) 
    console.log(`${fName},${messages[0]}`)
  else if (state == "NE" && (temp > 32 && temp < 50)) 
    console.log(`${fName},${messages[1]}`)
  else if (state == "FL" && (temp > 32 && temp < 50)) 
    console.log(`${fName},${messages[2]}`)
  else if (state == "FL" && (temp > 50 && temp < 70)) 
    console.log(`${fName},${messages[3]}`)
  else
    console.log(`sorry ${fName}, there is no data available.`)
*/

//Swith version of the above code
switch (true) {
  case state == 'NE' && temp < 32:
    console.log(`${fName},${messages[0]}`)
  break
  case state == 'NE' && temp >= 32 && temp <= 50:
    console.log(`${fName},${messages[1]}`)
  break
  case state == 'FL' && temp >= 32 && temp <= 50: 
    console.log(`${fName},${messages[2]}`)
  break
  case state = 'FL' && temp > 50 && temp <= 70:
    console.log(`${fName},${messages[3]}`)
  break
  default:
    console.log(`sorry ${fName}, there is no data available.`)
  break
}



