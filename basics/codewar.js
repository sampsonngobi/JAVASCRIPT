function reverseWords(str) {
    const words = str.split(" ")
    words.forEach((element, i) => {
        const newWord = element.split("").reverse().join("")

        words[i] = newWord
    });

    return words.join(" ")

}
//console.log(reverseWords("This is an example!"))

//alt shift f - to format the code. 

function betterThanAverage(classPoints, yourPoints) {

    let sum = 0
    for (i = 0; i < classPoints.length; i++) {
        sum += classPoints[i]

        //console.log(classPoints[i])
    }

    const average = sum / classPoints.length

    console.log(average)

    if (yourPoints > average) {
        return true
    }

    return false

}

//console.log (betterThanAverage([1,3,5,6,5], 5))
// ........................................................................................................

// Very simple, given a number (integer / decimal / both depending on the language), find its opposite (additive inverse).

// Examples:

// 1: -1
// 14: -14
// -34: 34
function opposite(num) {

    return num * -1

}

//console.log(opposite(-5))

//...................................................................................................................

// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].


function countPositivesSumNegatives(input) {
    if (!input || input.length === 0) return [];

    let countPositive = 0;
    let sumNegative = 0;

    for (i = 0; i < input.length; i++) {

        if (input[i] > 0) {
            countPositive++;

        } else if (input[i] < 0) {
            sumNegative += input[i];
        }

    }

    return [countPositive, sumNegative]

}

//console.log(countPositivesSumNegatives([1, 6, 54, 3, 7, 5, 3, 5, 3, -3, -5]))
//.........................................................................................

//Given a non-empty array of integers, return the result of multiplying the values together in order. Example:
function grow(x) {
    let product = 1
    for (i = 0; i < x.length; i++) {
        product *= x[i];
    }
    return product;
}
//grow([1,2,3,4,5,6]);

//..............................................................................................

/* 
 Return the number (count) of vowels in the given string.
 We will consider a, e, i, o, u as vowels for this Kata (but not y).
The input string will only consist of lower case letters and/or spaces.
*/

function getCount(str) {
    let count = 0
    for (i = 0; i < str.length; i++) {
        if (str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u") {
            count++
        }
    }

    return count
}

//console.log(getCount("sampsonuie"))



function getCount(str) {
    let count = 0
    for (i = 0; i < str.length; i++) {
        switch (str[i]) {
            case "a":
                count++
                break
            case "e":
                count++
                break
            case "i":
                count++
                break
            case "o":
                count++
                break
            case "u":
                count++
                break
        }
    }

    return count
}

//console.log(getCount("sampsonuie"))

/*
Write a program that finds the summation of every number 
from 1 to num (both inclusive). The number will always be a positive integer greater 
than 0. Your function only needs to return the result, what is shown between parentheses 
in the example below is how you reach that result and it's not part of it, see the sample tests.
*/

var summation = function (num) {
    let count = 0
    for (i = 1; i <= num; i++) {
        count += i
    }

    return count
}

//console.log(summation(7))
//.................................................................................................

//Write a function which calculates the average of the numbers in a given array.

function findAverage(array) {
  if(array.length === 0){
     return 0;
  }

  let sum = 0
  array.forEach(element => {
    sum+=element
  });

  return sum / array.length
 
}

//console.log(findAverage([3,7,5]))
// ..........................................................

//Given an array of integers, return a new array with each value doubled.

function maps(x){
    const newArray = []
    x.forEach(element => {
        const result = element * 2
          
          newArray.push(result)
         
    });

    console.log(newArray)
    return newArray
}

//maps([1,2,3])

//.............................................................................

/*Given a list of integers, determine whether the sum of its elements is odd or even.

Give your answer as a string matching "odd" or "even".

If the input array is empty consider it as: [0] (array with a zero).
*/

function oddOrEven(array){
    if(array.length === 0){
        array = [0]
    }
    let sum = 0
    array.forEach(element => {
        sum+= element
    });

    if(sum % 2 === 0){
        return true
    }

    return false 

}

//console.log(oddOrEven([]))


/* Complete the square sum function so that it squares each number passed into it and then sums the results together.

 For example, for [1, 2, 2] it should return 9 because */

/* function squareSum(numbers){

  let count = 0;  
  for(let i = 0; i < numbers.length; i++){
    const squareRoot = numbers[i] ** 2;
    count += squareRoot
  }

    return count
}

console.log(squareSum([1,2,2]));*/

/*
Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)

Note: The function accepts an integer and returns an integer.

Happy Coding!*/ 

function squareDigits(num){
  const numArray = num.toString().split('')
   
    let result =""
    console.log(numArray.length)
    for(i = 0; i < numArray.length; i++){
       const root =  Math.pow(numArray[i], 2)
        
       result += root
      
    }
    
    return Number(result)
    
}

//console.log(squareDigits(186))

// Consider an array/list of sheep where some sheep may be missing from their place. We need 
// a function that counts the number of sheep present in the array (true means present).

function countSheeps(sheep) {
  // TODO
  
let count = 0
sheep.forEach((element) => {
  if (element == true){
   count ++
  }
});
  return count 
}


// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.


function accum(s) {
	// your code
  let newString = s.split('')
  
  newString[0] = newString[0].toUpperCase()
  
  
  for(i = 1; i < newString.length; i++){
  const position = i + 1
    newString[i]
  }
}