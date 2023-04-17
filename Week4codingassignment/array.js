//1.  Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
   
let ages=[3, 9, 23, 64, 2, 8, 28, 93];//array declaration.
console.log("The array is:"+ages);
console.log("----------END-----------");
//1a.Programmatically subtract the value of the first element in the array from the value in the last element of the array.
function subtractArray(){//Regular function declaration.
   let difference=(ages[ages.length-1])-(ages[0]);
  return console.log(`The difference between the last element of ages and the first element of ages is  ${difference}`);//return value.
};

console.log(`The initial array ages is : ${ages}`);
subtractArray();//invoking the function.
console.log("----------END-----------");
//1b. Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).

console.log(`Going to add a new element to the array`);//adding a new element to the array.
   ages.push(51);//new element is added to the array.
   console.log(`The new array ages is : ${ages}`);//printing the array after a new element is added.
subtractArray();//calling the function.
console.log("----------END-----------");

//1c. Use a loop to iterate through the array and calculate the average age. 

function avgAge(){//function declaration.
   let sum =  0;
   ages.forEach(element=>{sum+=element;});//iterating each element of the array using for loop.
   return console.log("The average age of the array is: "+ sum/ages.length);//returns the average.
}
avgAge();//calling the function.
console.log("----------END-----------");

//2.  Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.

let nameArray=['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];//array called nameArray declaration.
//2a. Use a loop to iterate through the array and calculate the average number of letters per name. 

let sumNewNameArray = 0;
nameArray.forEach(element=>{sumNewNameArray+=element.length;});//iterating each element of the array using forEach.
console.log("The average letters of each name is:"+sumNewNameArray/nameArray.length);
console.log("----------END-----------");

//2b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces. 

let concatenatedString='';//an empty string assigning to a varible.
nameArray.forEach(element=>{concatenatedString+=element + ' ';});//concatenating the string after the iterarion ,seperated by spaces.
concatenatedString.trim();//it removes white spaces from both ends of the string without modifying the string and returns new string.
console.log(concatenatedString);
console.log("----------END-----------");

//3.  How do you access the last element of any array?
let lastElement=nameArray[nameArray.length-1];//the index of an array stats at 0,so the index of the last element of an array can be accessed using length property (length-1)
console.log("The last element of nameArray is:"+lastElement);
console.log("----------END-----------");


//4.  How do you access the first element of any array?
let firstElement=nameArray[0];//first element index is 0.So, we can access the first element using array[0].
console.log("The first element of nameArray is:"+firstElement);
console.log("----------END-----------");


//5.  Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
let nameLengths=[];//new array nameLengths.
nameArray.forEach(element=>{ nameLengths.push(element.length)});//loop to iterate over the previously created nameArray and adding the length of each name to the new array.

console.log("The new array is : " +nameLengths);

console.log("----------END-----------");

//6.  Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. 
let sumOfElements=0;
nameLengths.forEach(element=>{sumOfElements+=element;});//loop to iterate over the previous nameLengths array to get the sum of all elements in the array.
console.log("Sum of elements of the given array is :"+sumOfElements);
console.log("----------END-----------");

//7.  Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).
const concatenated=(word,n)=>{//an arrow function takes two parameters.
   let newWord = '';//creating an empty string.
   for(let i=0;i<n;i++){
      newWord+=word+' ';//iterating andadding the word with the empty string.
   }
   console.log(newWord);
   };
   concatenated("Sreeja",5);//passing arguments and calling the function.
   console.log("----------END-----------");

   //8.  Write a function that takes two parameters, firstName and lastName, and returns a full name.  The full name should be the first and the last name separated by a space.
const fullName=(firstname,lastname)=>firstname+' '+lastname;//an arrow function with two parameters.
console.log("Full name is :"+fullName('Sreeja','Rajamma'));//calling the function passing two arguments.
console.log("----------END-----------");

//9.  Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
let sumOfArray=(array)=>//an arrow function with array as a parameter.
{
   let sum=0;
   array.forEach(element=>sum+=element);//iterarting to get the sum.
   let isAboveHundred = sum>=100?true:false;//checking the condition 
   return isAboveHundred;//returns true or false.
 }
 
 let NumberArray=[1,2,3,5,9];//array declaration.
 console.log("Is the sum of Array above hundred : "+ sumOfArray(NumberArray));//returns false.

let anotherArray=[12,65,23,45,6];// array declaration.
console.log("Is the sum of Array above hundred : "+ sumOfArray(anotherArray));//return true.
console.log("----------END-----------");

//10.  Write a function that takes an array of numbers and returns the average of all the elements in the array.
const averageOfNumArray =(array)=>{//an arrow function with an array parameter.
   let sumNum=0;
   array.forEach(element=>sumNum+=element);//after ierating find the sum.
   let averageNum=sumNum/array.length;//finding the average of the numbers in the array.
   console.log("The average of the numbers in the array is :"+averageNum);
   return averageNum;//returs average.
}
averageOfNumArray ([21,16,43,25,82,33]);//calling the function passing an array as an argument.
console.log("----------END-----------");

//11.  Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.

const compareavgOfTwoArrays=(array1,array2)=>{//an arrow function with two parameters(array1,array2).
   let sumNum1=0;
   array1.forEach(element=>sumNum1+=element);//find the sum of numbers in array1.
   let averageNum1=sumNum1/array1.length;//average of numbers in array1.
   console.log("The average of the numbers in the array is :"+averageNum1);
   let sumNum2=0;
   array2.forEach(element=>sumNum2+=element);//find the sum of numbers in array2.
   let averageNum2=sumNum2/array2.length;//average of numbers in array2.
   console.log("The average of the numbers in the array is :"+averageNum2);
   let isGreater=averageNum1>averageNum2? true:false;//checking the condition.
   return isGreater;//returns the value.
}
console.log(compareavgOfTwoArrays([23,65,17,13,2],[54,45,89,12,3]));//passing two array and calling the function.
console.log(compareavgOfTwoArrays([54,45,89,12,3],[23,65,17,13,2]));//passing two array and calling the function.
console.log("----------END-----------");

//12.  Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside
// and if moneyInPocket is greater than 10.50.
const willBuyDrink=(isHotOutside,moneyInPocket)=>{//this function takes two boolean parameters.
return (isHotOutside&&moneyInPocket>10.50)?true:false;//checking the conditions.
} 
console.log(willBuyDrink(true, 11));//calling the function with two arguments passed.
console.log(willBuyDrink(true, 10));
console.log(willBuyDrink(false, 11));
console.log(willBuyDrink(false, 8));
console.log("----------END-----------");

//13.  Create a function of your own that solves a problem. 
//write a function to reverse an array.
const revArray=(array)=>{//function to reverse an array.
   let arrayReversed=[];//an empty array to hold the elements of reversed array.
   for(let index=array.length-1; index>=0; index--)
   {
      arrayReversed.push(array[index]);//pusing the elements after reversing.
   }
  console.log("The reversed Array is :" +arrayReversed);
  return arrayReversed;//returns the new reversed array.
}
revArray([1,2,3,4,5,6]);//calling the function passing an array as an argument.
console.log("----------END-----------");











