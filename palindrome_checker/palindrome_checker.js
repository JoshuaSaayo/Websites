const textInput = document.getElementById('text-input');
const checkBtn = document.getElementById('check-btn');
const result = document.getElementById('result');

const isPalindrome = str => {
    // Remove non-alphanumeric characters and convert to lowercase
    const alphanumericStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    // Reverse the string
    const reversedStr = alphanumericStr.split('').reverse().join('');
    
    // Check if the original and reversed strings are equal
    return alphanumericStr === reversedStr;
}

console.log(isPalindrome("A man, a plan, a canal. Panama"));
console.log(isPalindrome("leafyishere"));

const checkUserInput = () => {
    const userInput = textInput.value;
    if (userInput === ""){
        alert("Please input a value");
        return;
    } 
    if (isPalindrome(userInput)) {
        result.innerText = `${userInput} is a Palindrome`
    } else {
        result.innerText = `${userInput} is not a Palindrome`
    }
};

checkBtn.addEventListener("click", checkUserInput);