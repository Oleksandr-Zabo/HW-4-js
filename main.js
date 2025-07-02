//#1
function infoAboutString(str){
    //calc letters
    let letters = str.match(/[a-zA-Z]/g);
    let lettersCount = letters ? letters.length : 0;
    console.log("Letters: " + lettersCount);
    //calc digits
    let digits = str.match(/\d/g);
    let digitsCount = digits ? digits.length : 0;
    console.log("Digits: " + digitsCount);
    //calc other symbols
    let otherSymbols = str.match(/[^a-zA-Z0-9\s]/g);
    let otherSymbolsCount = otherSymbols ? otherSymbols.length : 0;
    console.log("Other Symbols: " + otherSymbolsCount);
}

let inputString = "Hello, World! 12345";
infoAboutString(inputString);

// #2
function numberToText(number){
    if (number < 0 || number > 99 || isNaN(number)) {
        return "Number out of range. Please enter a number between 0 and 99.";
    }
    const units = ["", "один", "два", "три", "чотири", "п'ять", "шість", "сім", "вісім", "дев'ять"];
    const teens = ["десять", "одинадцять", "дванадцять", "тринадцять", "чотирнадцять", "п'ятнадцять", "шістнадцять", "сімнадцять", "вісімнадцять", "дев'ятнадцять"];
    const tens = ["", "", "двадцять", "тридцять", "сорок", "п'ятдесят", "шістдесят", "сімдесят", "вісімдесят", "дев'яносто"];

    if (number < 10) {
        return units[number];
    } else if (number < 20) {
        return teens[number - 10];
    } else {
        let unitPart = number % 10;
        let tenPart = Math.floor(number / 10);
        return tens[tenPart] + (unitPart ? ' ' + units[unitPart] : '');
    }
}

let inputNumber = 42;
let textRepresentation = numberToText(inputNumber);
console.log(`Число ${inputNumber} у текстовому вигляді: ${textRepresentation}`);

// #3
function changeCase(str) {
    let result = '';
    for (let char of str) {
        if (char === '1' || char === '2' || char === '3' || char === '4' || char === '5' || char === '6' || char === '7' || char === '8' || char === '9' || char === '0') {
            result += '_';
        } else if (char === char.toUpperCase()) {
            result += char.toLowerCase();
        } else {
            result += char.toUpperCase();
        }
    }
    return result;
}

let inputStringForCaseChange = "Hello World! 123";
let changedCaseString = changeCase(inputStringForCaseChange);
console.log(`Змінений рядок: ${changedCaseString}`);

// #4
function toCamelCase(str) {
    return str
        .split('-')
        .map((word, index) => {
            if (index === 0) {
                return word.toLowerCase();
            }
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join('');
}

let inputKebabCase = "hello-world-this-is-a-test";
let camelCaseString = toCamelCase(inputKebabCase);
console.log(`Кебаб-строка: ${inputKebabCase}`);
console.log(`КамелКейс: ${camelCaseString}`);

// #5
function wordsToAbbreviation(str) {
    return str
        .split(' ')
        .map(word => word.charAt(0).toUpperCase())
        .join('');
}

let inputStringForAbbreviation = "cascading style sheets";
let abbreviation = wordsToAbbreviation(inputStringForAbbreviation);
console.log(`Абревіатура: ${abbreviation}`);

// #6
function manyStringToOne(...strs) {
    return strs
        .map(str => str.trim())
        .filter(str => str.length > 0)
        .join(' ');
}

let inputStrings = ["  Hello  ", "World", "  ", "This is a test"];
let combinedString = manyStringToOne(...inputStrings);
console.log(`Об'єднаний рядок: ${combinedString}`);

// #7
function mathFromString(str) {
    let result = 0;
    let firstNumber = '';
    let secondNumber = '';
    let operator = '';

    for (let char of str) {
        if (char >= '0' && char <= '9') {
            if (operator === '') {
                firstNumber += char;
            } else {
                secondNumber += char;
            }
        } else if (['+', '-', '*', '/'].includes(char)) {
            operator = char;
        }
    }

    if (operator === '/' && parseFloat(secondNumber) === 0) {
        return "Error: Division by zero";
    }

    let fNumber = Number(firstNumber.trim());
    let sNumber = Number(secondNumber.trim());

    switch (operator) {
        case '+':
            result = fNumber + sNumber;
            break;
        case '-':
            result = fNumber - sNumber;
            break;
        case '*':
            result = fNumber * sNumber;
            break;
        case '/':
            if (sNumber === 0) {
                return "Error: Division by zero";
            }
            result = fNumber / sNumber;
            break;
    }

    return result;
}

let inputMathString = "12 + 34";
let mathResult = mathFromString(inputMathString);
console.log(`Результат математичного виразу "${inputMathString}": ${mathResult}`);

// #8
function infoAboutURL(url){
    try {
        let parsedURL = new URL(url);
        console.log(`Protocol: ${parsedURL.protocol}`);
        console.log(`Host: ${parsedURL.host}`);
        console.log(`Pathname: ${parsedURL.pathname}`);
        console.log(`Search: ${parsedURL.search}`);
        console.log(`Hash: ${parsedURL.hash}`);
    } catch (error) {
        console.error("Invalid URL:", error.message);
    }
}

let inputURL = "https://www.example.com/path/to/resource?query=123#section";
infoAboutURL(inputURL);

// #9
function divideString(str, divider) {
    return str.split(divider);
}

let inputStringForDivision = "apple,banana,cherry,date";
let divider = ",";
let dividedArray = divideString(inputStringForDivision, divider);
for (let i = 0; i < dividedArray.length; i++) {
    console.log(`Element ${i}: ${dividedArray[i]}`);
}

// #10
function print(template, ...args) {
    let result = template;
    for (let i = 0; i < args.length; i++) {
        let placeholder = `%${i + 1}`;
        result = result.replace(new RegExp(placeholder, 'g'), args[i]);
    }
    console.log(result);
    return result;
}

// Test the function
print("Today is %1 %2.%3.%4", "Monday", 10, 8, 2020);
print("Hello %1, you have %2 messages and %3 notifications", "John", 5, 12);
print("The result is %1 + %2 = %3", 15, 25, 40);
