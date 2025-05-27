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
    for(i = 0; i < classPoints.length; i++){
        sum += classPoints[i]

          //console.log(classPoints[i])
    }

    const average = sum / classPoints.length

    console.log(average)
    
    if(yourPoints > average){
        return true
    }

    return false
    
}

console.log (betterThanAverage([1,3,5,6,5], 5))
// ........................................................................................................

// Very simple, given a number (integer / decimal / both depending on the language), find its opposite (additive inverse).

// Examples:

// 1: -1
// 14: -14
// -34: 34
function opposite(num){
    
    return num * -1
    
}

console.log(opposite(-5))