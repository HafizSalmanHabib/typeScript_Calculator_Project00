"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline_sync_1 = require("readline-sync");
function main() {
    var firstNumber = (0, readline_sync_1.question)('Enter The 1st number:\n');
    if (isNumber(firstNumber)) {
        var secondNumber = (0, readline_sync_1.question)('Enter teh2nd Number:\n');
        if (isNumber(secondNumber)) {
            var operator = (0, readline_sync_1.question)('Enter the operator:\n');
            if (isOperator(operator)) {
                var firstNum = parseInt(firstNumber);
                var secondNum = parseInt(secondNumber);
                var result = calculate(firstNum, operator, secondNum);
                console.log("Result is : ", result);
            }
            else {
                console.log('\n Invalid Input\n');
                main();
            }
        }
        else {
            console.log('\n Invalid Input\n');
            main();
        }
    }
    else {
        console.log('\n Invalid Input\n');
        main();
    }
}
function calculate(firstNum, operator, secondNum) {
    switch (operator) {
        case '+': return firstNum + secondNum;
        case '-': return firstNum - secondNum;
        case '*': return firstNum * secondNum;
        case '/': return firstNum / secondNum;
    }
}
//check is number or string
function isNumber(str) {
    var myNum = parseInt(str);
    var isNum = !isNaN(myNum);
    return isNum;
}
function isOperator(operator) {
    switch (operator) {
        case '+':
        case '-':
        case '*':
        case '/':
            return true;
        default:
            return false;
    }
}
main();
