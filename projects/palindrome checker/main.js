const input = document.getElementById("input");
const result = document.getElementById("result");
const button = document.getElementById("checkbtn");

// Reverse the string
function reverseStr(str) {
    return str.split("").reverse().join("");
}

// Check for palindrome
function check() {
    const value = input.value.trim().toLowerCase();  // Trim whitespace and make lowercase
    const reverse = reverseStr(value);

    if (value === "") {
        result.innerHTML = "Please enter a word.";
        return;
    }

    if (value === reverse) {
        result.innerHTML = "✅ Your word is a PALINDROME!";
    } else {
        result.innerHTML = "❌ Your word is NOT a PALINDROME.";
    }
}

button.addEventListener("click", () => {
    check();
});
