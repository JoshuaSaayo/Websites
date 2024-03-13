const number = document.getElementById('number');
const convertBtn = document.getElementById('convert-btn');
const output = document.getElementById('output');

const numToRomanNumerals = (num) => {
    const romanNumerals = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };

    let result = '';

    for (let key in romanNumerals) {
        while (num >= romanNumerals[key]) {
          result += key;
          num -= romanNumerals[key];
        }
    }
    return result;
} 

console.log(numToRomanNumerals(522));

const checkUserInput = () => {
    const inputInt = parseInt(number.value);
    if (!inputInt) {
        output.innerText = "Please enter a valid number";
        return;
    } else if (inputInt < 0) {
        output.innerText = "Please enter a number greater than or equal to 1";
        return;
    } else if (inputInt > 3999) {
        output.innerText = "Please enter a number less than or equal to 3999";
        return;
    }
    output.textContent = numToRomanNumerals(inputInt);
};

convertBtn.addEventListener("click", checkUserInput);
number.addEventListener("keydown", (e) => { // e oftentimes uses as parameter for event.
    if (e.key === "Enter") {
      checkUserInput();
    }
});