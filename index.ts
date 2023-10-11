import { question } from "readline-sync";

type operater='+'|'-'|'*'|'/';

function main(): void{
    
    const firstNumber:string=question('Enter The 1st number:\n');
    if(isNumber(firstNumber)){
        const secondNumber:string=question('Enter teh2nd Number:\n');
        if(isNumber(secondNumber)){
            const operator:string= question('Enter the operator:\n');
            if(isOperator(operator)){
                const firstNum:number= parseInt(firstNumber);
                const secondNum:number=parseInt(secondNumber);
                const result=calculate(firstNum,operator as operater,secondNum)
                console.log("Result is : ",result);

            }
            else{
                console.log('\n Invalid Input\n');
                main();
            }
        }
        else{
            console.log('\n Invalid Input\n');
            main();
        }
    }
    else{
        console.log('\n Invalid Input\n');
        main();
    }
    
}
function calculate(firstNum:number,operator:operater,secondNum:number):number{
 
    switch(operator){
        case '+': return firstNum+ secondNum;
        case '-': return firstNum-secondNum;
        case '*': return firstNum*secondNum;
        case '/': return firstNum/ secondNum;
    }
}
//check is number or string
function isNumber(str:string):boolean{
    const myNum= parseInt(str);
    const isNum:boolean=!isNaN(myNum);
    return isNum;
}

function isOperator(operator:string):boolean{
    switch(operator)
    {
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