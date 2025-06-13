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

 function squareSum(numbers){

  let count = 0;  
  for(let i = 0; i < numbers.length; i++){
    const squareRoot = numbers[i] ** 2;
    count += squareRoot
  }

    return count
}

console.log(squareSum([1,2,2]));