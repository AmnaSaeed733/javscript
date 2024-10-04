//               JAVASCRIPT QUESTION ASSIGNMENT
           //   CHAPTER 1 
                    //   QUESTION #1
//  Alert show a pop up mesage to user where we get info or ask question
                  // QUESTION #2
 alert("Welcome to my website!")
//                   // QUESTION #3
//  // if we capita lize the alert keyword in capital letter it will show error because javascript is case sensitive
//             // QUESTION #4
alert("Hello,world!")
//                    // QUESTION #5
//  alert()


                           //   CHAPTER 2
                              // QUESTION #1
var message="Hello,world!"
alert(message)
                           // QUESTION #2
  var age
 age=25
alert(age)

                           // QUESTION #3
var greeting="Good morning!"
alert(greeting)
var greeting=("Good evening")
alert(greeting)
                         // QUESTION #4
var favoriteColor="blue"
 alert(`My favorite color is ${favoriteColor}`)
                          // QUESTION #5
 var age
   age=25
  alert(age)

                              //   CHAPTER 3
                             // QUESTION #1
var height=170
var newheight=height+10
alert(newheight)
                              // QUESTION #2
var num1=50
var num2=30
var sum=num1+num2
alert(sum)
                              // QUESTION #3
var numToBeAdded=20
var total=numToBeAdded
alert(total)


                             // QUESTION #4
var price=120
var tax=120*0.10
var total=price+tax
alert("Total price including tax is" +total)


                               //   CHAPTER 3
                               // QUESTION #1
var myAddress="Karachi"
alert(`My adddress is ${myAddress}`)
                                // QUESTION #2
var userName="amna saeed"
var userEmail="amnasaeedgmail"
var userPassword="amna10"
alert(`username:  ${userName}` +
        ` userEmail is: ${userEmail}` +
         `userpassword is: ${userPassword}`)
                                //  QUESTION #3
// var user Address="karachi"
// alert(user Address)
// if we give space in varname it will show error
var useraddress="Karachi"
alert(useraddress)
                          // QUESTION #4
 var rose = "Floribundas"; 
alert("Value of 'rose': " + rose);               
// // alert("Value of 'Rose': " + Rose);
//  // This will cause a ReferenceError since 'Rose' is not defined


                              //   CHAPTER 5
                             // QUESTION #1
var  sum = 25 + 30
 alert(sum)
                                 // QUESTION #2
var num1=25
var num2=5
var sum=num1+num2
alert(sum)
                                //  QUESTION #3
var modulusResult = 27 % 4
alert(modulusResult)


                                  //   CHAPTER 6
                                // QUESTION #1
var num=3
var newnum=(num++)
alert("num:"+num)
alert("newnum:" +newnum)
                               // QUESTION #2
var counter=10
counter++
counter++
alert(counter)
                                //  QUESTION #3
var points=20
points--
++points
alert(points)
                             // QUESTION #4
var number=0
++number
++number
++number
alert(number)


                                 //   CHAPTER 7
                                // QUESTION #1

var calculation = 20 % 6
alert(calculation)
                              // QUESTION #2
var expressionValue = (6 + 2) * (5 - 3)
alert(expressionValue)
                             //  QUESTION #3
var  finalTotal=5*2+9
alert(finalTotal)
// //howv operator precedence rules apply:
// Multiplication (*) has a higher precedence than addition (+).
// So, the multiplication is done first:
// 5 * 2 = 10
// Then, addition is performed:
// 10 + 9= 19
                          // QUESTION #4 
var answer = 4 + 3 * 2 - 8 / 4
alert(answer)
// Operator precedence applies here:
// Multiplication and division have higher precedence than addition and subtraction
// First,the multiplication and division is done:
// 3 * 2 = 6
// 8 / 4 = 2
// Then perform the addition and subtraction:
// 4 + 6 = 10
// 10 - 2 = 8


                               //   CHAPTER 8
                                // QUESTION #1
 var username=prompt("What is your name?")
 alert(`hello, ${username}`)
                              // QUESTION #2
var age = prompt("How old are you?")
   if (age ==="") { 
 alert("No age provided")
 } else {
   alert("You are " + age + " years old.")
    }
                                    // QUESTION #3
 var pets = prompt("How many pets do you have?")
if (pets === "") { 
 alert("You didn't enter anything.")}
 else{
 alert("You have " + pets + " pets")
 }
                                // QUESTION #4
var  favNum = prompt("What is your favorite number?")
  if (favNum === ""){
 alert(favNum = 7)
 }else{
 alert(`Your favorite number is: + ${favNum}`)
}
                                 


                                 //   CHAPTER 9
                               // QUESTION #1                               
var user=prompt("what is the capital of France")
if(user ===" paris"){
        alert("correct!")
}
else{
        alert("try again")
}
                               //      QUESTION #2
var user=prompt("what is the capital of France")
 if(user === "paris"){
 alert("correct!")
    }
 else{
  alert("incorrect! the correct answer is paris")
 }
                             // QUESTION #3
var capital = prompt("What is the capital of the United Kingdom?")
 if (capital === "london" ) {
  alert("Correct!")
} else {
      alert("Incorrect, the correct answer is london.")
}
                              // QUESTION #4
var score = 0;
  var capital= prompt("What is the capital of France?");
 if (capital === "paris") {
 score++;
alert("Correct! Your score is: " + score)
  } else {
alert("Incorrect, the correct answer is Paris.")
}
   capital= prompt("What is the capital of the United Kingdom?");
if (capital === "london" ) {
   score++;
        alert("Correct! Your score is: " + score)
 } else {
alert("Incorrect, the correct answer is london")
 }  
                   // QUESTION #5
var  capital=  prompt("What is the capital of Germany?")
var math=  prompt("What is 10 + 10?")

const correctcapital = "berlin";
const correctmath= 20;

let correctCount = 0;

if (capital === correctcapital) {
    correctCount++;
}

if (math === correctmath) {
    correctCount++;
}
if (correctCount === 2) {
    alert("You got both right!");
} else if (correctCount === 1) {
    alert("You got one correct");
} else {
    alert("You got none correct");
}