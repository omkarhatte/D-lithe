let operator=prompt('Enter operator between(+,-,*,/)');
let num1=prompt('Enter first number');
let num2=prompt('Enter first number');
let result;
switch(operator)
{
    case '+':
        result=num1+num2;
        alert(`${num1} + ${num2} = ${result}`);
        break;
        case '-':
        result=num1-num2;
        alert(`${num1} - ${num2} = ${result}`);
        break;
        case '*':
        result=num1*num2;
        alert(`${num1} * ${num2} = ${result}`);
        break;
        case '/':}