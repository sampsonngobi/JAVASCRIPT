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

    return  [countPositive, sumNegative]

}

//console.log(countPositivesSumNegatives([1, 6, 54, 3, 7, 5, 3, 5, 3, -3, -5]))
//.........................................................................................

//Given a non-empty array of integers, return the result of multiplying the values together in order. Example:
function grow(x){
    let product = 1
    for(i =0; i < x.length; i++){
        product *= x[i];
    }
      return product;
}
 grow([1,2,3,4,5,6]);