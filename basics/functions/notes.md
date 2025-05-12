## FUNCTIONS

Functions help us reuse codes.<br>

We write a function in the following way<br>

function functionName(){<br>
    code to be executed<br>
}<br>

to use the function it must called<br>

functionName()<br>

### Parameters

Placeholders used when defining a function.<br>
They act like variables that receive values when the function is called.<br>

function greet(name) {     // ← "name" is a parameter<br>
  console.log("Hello, " + name);<br>
}<br>

### Arguments
The actual values you pass to the function when calling it.<br>
They fill in the parameters.<br>

greet("Samson");   // ← "Samson" is the argument<br>


### Global scope and functions 

variables declared outside of functions are global functions and can used anywhere in the programm<br>
