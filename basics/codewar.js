function reverseWords(str) {
    const words = str.split(" ")
    words.forEach((element, i) => {
        const newWord = element.split("").reverse().join("")

        words[i] = newWord
    }); 

    return words.join(" ")

}
console.log(reverseWords("This is an example!"))

//alt shift f - to format the code. 