# JavaScript Basics 

## How To Comment in JS

// in-line comments <br>
/* multi-line comments */

## Data types 
In computer sicence, data is anything that is meaningful to the computer.
There are 7 different data types provided by JS <br>
1. Number - Any form of number<br>
2. String - Any form of text <br>
3. Boolean - True or false <br>
4. Null - means nothing <br>
5. Undefined - anything that is not defined. It may be a variable that has not been assiged any values<br>
6. Object - stores alot of different key value pairs <br>
7. Symbol - a unique value that is immutable<br>

## Variables

Variables are used to store data in JS. they are like boxes to put your data<br>

## Varible Declaration
There are 3 ways to declare a variable in JS <br>
### let
let - used to declare a variable, it can be reassigned and works only within the scope where it is declared<br>
let myName = "Sampson"<br>
myName = "sam"<br>

### var
2. var - used to declare a variable, it can be reassigned It can be used throughout your program<br>
var myAge = 37<br>
Myage = 38<br>

### const
3. const - used to declare a variable, it cannot be reassigned <br>
const myJob = "Software Developer"<br>
 
Declaring and assignning a ### variable <br>

var a;<br>
in the above example we only declared a varaible called a with no assigned value.

var a = 3;<br>
in the above example we declared a variable called a and assigned it the value 3.<br>

Variblenames are case sensitive

## Operators 

addition  +<br>
subtraction  -<br>
multiplication  *<br>
division  /<br>

incrementing numbers - adding 1 
var number  = 2<br>
number = number + 1<br>
number++<br>

decrementing numbers - subtracting 1 
var number  = 2<br>
number = number - 1<br>
number--<br>



modulus (shows the remainder after a division operation. It helps to check if a number is even or odd) %<br>
exponentiation  **<br>
assignment  =<br>
equality  ===<br>
inequality  !==<br>

### Adding numbers to the value of a variable using += operation

var a = 3;<br>

a = a + 10 - this is equals to 13<br>
a += 10 - this is equals to 13<br>

### subtracting numbers from the value of a variable using += operation

var a = 3;<br>

a = a - 1 - this is equals to 2<br>
a -= 10 - this is equals to 2<br>

This works with multiplication and divition<br>

Strings are surrounded with quotes<br>
var name = "John"<br>

If I have a quote inside my string, a backward slash is used to tell JS that it is no the begining or end of a string<br>

for example<br>
var myFavoriteQuote = "\"In the country of the blind a one eyed man is the king\" is my favourite quote"<br>

You can also start and end your string with single quotesvar myFavoriteQuote = "\"In the country of the blind a one eyed man is the king\" is my favourite quote"<br>

var myFavoriteQuote = '\"In the country of the blind a one eyed man is the king\" is my favourite quote'<br>

\' - single quote<br>
\" - double quote<br>
\\ - backslash<br>
\n - newline<br>
\r - carriage return<br>
\t - tab<br>
\b - backspace<br>
\f - form feed<br>

## Concatinating strings 

var name = "Sampson" <br>
var greeting = "Hello"<br>

var fullGreeting = greeting + " " + name<br>
console.log(fullGreeting)<br>
// Outputs: Hello Sampson<br>

It's posible to use += in concatinate 

var greeting = Hello, ;<br>

greeting += Sampson!<br>
console.log(greeting)<br>
// Outputs: Hello, Sampson!<br>

## Template literals
Template literals are a new way to create strings in JavaScript. They were introduced in ECMAScript
2015 (ES6). They are a more readable and efficient way to create strings, especially when
you need to insert variables or expressions into a string.<br>

var name = "Sampson"<br>
var age = 30<br>
var greeting = `Hello, my name is ${name} and I am ${age} years old`<br>
console.log(greeting)<br>
// Outputs: Hello, my name is Sampson and I am 30 years old<br>

#### Finding the lenght of a string

We can find the lenght of a string by using the .lenght property.<br> 
var myString = "Hello, Sampson"<br>
console.log(myString.length)<br>
// Outputs: 13<br>

#### Bracket notation
Bracket notation is a way to access a character in a string by its index. The index is the
position of the character in the string, starting from 0. For example, the first character in
the string "Hello" is at index 0, the second character is at index 1,
and so on.<br>
var myString = "Hello, Sampson"<br>
console.log(myString[0])<br>
// Outputs: H<br>
console.log(myString[1])<br>
// Outputs: e<br>
console.log(myString[2])<br>
// Outputs: l<br>

We can find the last character of a string without knowing it's lenght. <br>
var myString = "Sampson"<br>
console.log(myString[myString.lenght-1])<br>
//output: n<br>

## ARAYS
Arrays help us to store several pieces of data in one place. It starts and ends with a [].<br>
The elements are seperated by a comma , and can be of different data types.<br>
Example: myArray = ["Sam", 20, Nigerian]<br>

### Nested Arrays 
An array can contain another array<br>
myNestedArray = [[sapson, 20], [john, 40], [james, 25]]<br>

### Accessing array data with indexes
We can access the data in an array using the []. We start to count from 0<br>
For example: myArray = [sampson, john, james]<br>
myData = myArray[0]
//output: sampson


### Modifying the data of an array

myArray = [sampson, john, james]<br>
myArray[1] = Peace<br>
console.log(myArray)<br>
//output: [sampson, Peace, james]<br>

We can select the data of a multi layered array<br>
Example:<br>
myArray = [[sampson, 40], [John, 50], [james, 45]]<br>
To acces the number 50, we point to the 1 index in the first layer and the 1 index in the second layer<br>

var myData = myArray[1][1]<br>
console.log(myData)
//output: 50

### ARRAY MANIPULATION

#### Push function 
We can add elements to the end of an array using the .push()<br>
For example<br>
myArray = [sampson, john, james]<br>
myArray.push(peace)<br>
console.log(myArray)<br>
//output: [sampson, john, james, peace]<br>

#### unshift function 
We can add elements to the beginning of an array using the .unshift()<br>
For example<br>
myArray = [sampson, john, james]<br>
myArray.unshift(peace)<br>
console.log(myArray)<br>
//output: [peace, sampson, john, james]<br>


#### Pop function 
 The .pop() function removes the last element in an array<br>
For example<br>
myArray = [sampson, john, james]<br>
myArray.pop()<br>
console.log(myArray)<br>
//output: [sampson, john]<br> 

#### Shift function 
 The .shift() function removes the first element in an array<br>
For example<br>
myArray = [sampson, john, james]<br>
myArray.shift()<br>
console.log(myArray)<br>
//output: [john, james]<br> 

### split
This takes a string converts it into an array based on specified delimeter in the string.<br>

For example<br>

Const str = "Hello world";<br>
const arr = str.split(" ") // using the space as delimeter<br>
console.log(arr)<br>
//output: ["Hello", "world"]<br>

### reverse
this reverses and array
For example<br>

const arr = ["d", "o", "g"]<br>
const reversedArr  = arr.reverse()<br>
console.log(reversedArr)<br>
//outout: ["g", "o", "d"]<br>

### join

The join() method of Array instances creates and returns a <br>
new string by concatenating all of the elements in this array, <br>
separated by commas or a specified separator string. If the array has <br>
only one item, then that item will be returned without using the separator.<br>

const arr = ["g", "o", "d"]
function joinArr(){
    return arr.join("")
console.log(joinArr())
//output: god
}

### Splice 

The splice method deletes a specific index in an array. It takes two values, the index and the number of items to delete starting at the specified index.  <br>

const arr = ["g", "t", "y"]<br>

function deleteItem(){<br>
    arr.splice(arr[i], 1);    <br>  
}
    