/*
  Copyright (c) 2023 Promineo Tech
  Author:  Promineo Tech Academic Team
  Subject:  Variables and Operations Lab
  FE 01 Lab  
*/

/** Key Terms:
 *  JavaScript
 *  GUI (Graphic User Interface)
 *  CLI (Command Line Interface)
 *  Variable
 *  Data Types:
 *   - String
 *   - Number
 *   - Boolean
 *   - Array
 *   - Undefined
 *   - Object
 *   - BigInt
 *   - Null
 *   - Symbol
 *  Method
 *  Git
 *  Source Control
 *  Operators
 *  console.log()
 * 
*/

/* ----------------------------------------------------- */
// Please do not alter the existing code unless instructed to do so. 
// Read the comments and add your code where it is specified for each question. 
/* ----------------------------------------------------- */

/*-------------------------------------------------------*/

console.log(`--------------------------
Question 1. Creating & 'console.log()'ing variables \n`);

/**
 * Instruction: Create a variable for each step, then print that variable 
 *              to the console in the correct section.
 *
 * Step 1: Create a variable to hold the quantity of available seats left on a flight.
 * Step 2: Create a variable to hold the cost of groceries at checkout
 * Step 3: Create a variable to hold a person's middle initial
 * Step 4: Is it Hot Outside?
 *         Create a variable to hold a boolean, true if it's hot outside, false if it's not hot outside.
 * Step 5: Create a variable to hold a customer's first name.
 * Step 6: Create a variable to hold a street address.
 * ↓ YOUR CODE HERE ↓ */
var quantityOfAvailableSeats=50;
console.log("The numbetr of seats available on a plane are"+quantityOfAvailableSeats);
console.log("Step 1:  Number of Seats on a Plane");
 
var costOfGroceries=435.58;
console.log("Cost of groceries is"+costOfGroceries);
console.log("Step 2:  Cost of Groceries");

var personsMiddleInitial='R';
console.log("Middle Initial is"+personsMiddleInitial);
console.log("Step 3:  Middle Initial");
var isItHotOutside=true;
console.log("is it hot outside?"+isItHotOutside);
console.log("Step 4:  Is it Hot Outside?");

var customerFirstName="jhonny"
console.log("The first name is"+customerFirstName);
console.log("Step 5:  First Name");

var streetAddress="Broomfield";
console.log("Street address is"+streetAddress);
console.log("Step 6:  Street Address");


/*-------------------------------------------------------*/

console.log(`--------------------------
Question 2. Creating & 'console.log()'ing variables \n`);
 

/** 
 * Instruction: Use the variables we just created to solve the problems below.
 *              Print your answers to the console.
 * 
 *
 * */

    console.log('Remove Plane Seats:');
//	A customer booked 2 plane seats. Remove 2 seats from the available seats variable
//  ↓ YOUR CODE HERE ↓
var removeSeats=quantityOfAvailableSeats-2;
console.log("Remove plane seats are"+removeSeats);

    console.log('Buy a Candy Bar:');
//	Impulse candy bar purchase! Add 2.15 to the grocery total
//  ↓ YOUR CODE HERE 
var addCostOfGrocery=costOfGroceries+2.15;
console.log("The added cost of the grocery is"+addCostOfGrocery);


    console.log('Fix a Birth Certificate:');
//	A birth certificate was printed incorrectly, change the middle initial to something else
//  ↓ YOUR CODE HERE ↓
      personsMiddleInitial='N';
      console.log("Fix a birth certificate by changing middle initial to"+personsMiddleInitial);
    console.log('Changing Seasons: ');
//	The season has changed, update the hot outside variable	to be opposite of what it was
//  ↓ YOUR CODE HERE ↓
    isItHotOutside=false;
    console.log("Changing seasons to"+isItHotOutside);

    console.log('Full Name:n');
//	Create a new variable called full name using the customer's
//  first name, the middle initial, and a last name of your choice
//  ↓ YOUR CODE HERE ↓
      var newFullName=customerFirstName+" "+personsMiddleInitial+" "+"Stuwert";

      console.log("Full name is"+newFullName);

    console.log('Introduce a Customer:');
//	Print a line to the console that introduces the customer 
//	including the name, and saying that they live at the address variable
//  ↓ YOUR CODE HERE ↓
 var customerDetails= newFullName+"lives at "+streetAddress;
console.log("Customer"+customerDetails);


    console.log('-----------Finished------------')