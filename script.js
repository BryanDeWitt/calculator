
const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;

function operate(a, b, operand){
    let result;
    if(operand === "/"){
        if(b === 0){
            return result = "PeepoClown"
        }
        return result = divide(a,b)
    }else if(operand === "*"){
        return result = multiply(a,b)
    }else if(operand === "-"){
        return result = subtract(a,b)
    }else if(operand === "+"){
        return result = add(a,b)
    }
}

let operator = '';
let previousValue = '';
let currentValue = '';



let clear = document.querySelector('.clear')
let deletion = document.querySelector('.delete')
let numbers = document.querySelectorAll('.number')
let operands = document.querySelectorAll('#operand')
let equal = document.querySelector('.equals')
let negative = document.querySelector('.negative')
let screenUp = document.querySelector('.screenUp')
let screenDown = document.querySelector('.screenDown')
let audio = document.querySelector('audio')


numbers.forEach(number => number.addEventListener('click', e =>{
    handleNumber(e.target.textContent)
    screenDown.textContent = currentValue; 
}))

operands.forEach(op => op.addEventListener('click', e =>{
    handleOperator(e.target.textContent)
    screenUp.textContent = previousValue + ' ' + operator;
    screenDown.textContent = currentValue
}))

clear.addEventListener('click', () =>{ 
    currentValue = '';
    previousValue = '';
    operator = '';
    screenUp.textContent = previousValue 
    screenDown.textContent = currentValue
})

deletion.addEventListener('click', () =>{
    currentValue = currentValue.substring(0, currentValue.length-1)
    screenDown.textContent = currentValue
})

negative.addEventListener('click', ()=>{
    currentValue -= currentValue * 2
    screenDown.textContent = currentValue
})



equals.addEventListener('click', () => {
    let num1 = parseFloat(previousValue);
    let num2 = parseFloat(currentValue);
    let operand = operator;
    let result = operate(num1, num2, operand)
    if(result === 69) {result = '( ͡° ͜ʖ ͡°)'; audio.play()}
    currentValue = result;
    previousValue = '';
    operator = '';
    screenUp.textContent = previousValue 
    screenDown.textContent = currentValue
})


function handleNumber(num){
    if(currentValue.length < 10){
        currentValue += num
    }
}

function handleOperator(op){
    if(previousValue !== ''){
        let num1 = parseFloat(previousValue);
        let num2 = parseFloat(currentValue);
        let operand = operator;
        let result = operate(num1, num2, operand)
        if(result === 69) {result = '( ͡° ͜ʖ ͡°)'; audio.play()}
        currentValue = result;
        previousValue = '';
        operator = '';
        screenUp.textContent = previousValue 
        screenDown.textContent = currentValue
    }else if(operator !== ''){
        operator = '';
    }
    operator = op;
    previousValue = currentValue;
    currentValue = '';
}



