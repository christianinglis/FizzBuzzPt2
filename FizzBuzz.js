// TODO: Define constants for the form and the result display area
const userinput = document.getElementById("numberInput");
const submit = document.getElementById("submitbutton");
const result = document.getElementById("result");


// TODO: Add the first line of the event listener to handle form submission
submit.addEventListener("click", submitfunction);
function submitfunction(event) {
    event.preventDefault();


// TODO: Get the number from the form input
    let inputnum = Number(userinput.value);
// TODO: Write FizzBuzz logic here
    if (inputnum % 15 === 0) {
        result.textContent = "FizzBuzz";
    }
    else if (inputnum % 3 == 0) {
        result.textContent = "Fizz";
    }
    else if (inputnum % 5 === 0) {
        result.textContent = "Buzz";
    }
    else if (isNaN(inputnam)) {
        result.textContent = "Enter a number";
    }
    else {
        output = inputnum;
        return output;
    }   

// If divisible by both 3 and 5, set the output to "FizzBuzz"
// If divisible by 3, set the output to "Fizz"
// If divisible by 5, set the output to "Buzz"
// Otherwise, set the output to the number itself

// Display the result on the page
result.textContent = output;
