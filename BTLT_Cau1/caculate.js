const display1 = document.querySelector('.display-1');
const display2 = document.querySelector('.display-2');
const numbere= document.querySelectorAll('.number');
const operatione = document.querySelectorAll('.operation');
const equale = document.querySelector('.equal');
const clear1 = document.querySelector('.all-clear');
const clear2 = document.querySelector('.last-clear');

let dis1Num = '';
let dis2Num = '';
let lastOperation = '';
let haveDot = false;
let result = null;

numbere.forEach(number =>{
    number.addEventListener('click',(e)=>{
        if(e.target.innerText === '.' && !haveDot){
            haveDot = true;

        }else if(e.target.innerText ==='.' && haveDot){
            return;
        }
        dis2Num += e.target.innerText;
        display2.innerText = dis2Num;
    })
});
operatione.forEach(operation => {
    operation.addEventListener('click',(e) => {
        if(!dis2Num) result;
        haveDot = false;
        const operationname = e.target.innerText;
        if( dis2Num && dis1Num && lastOperation){
            mathOperation();
        }else{
            result = parseFloat(dis2Num);
        }
        clearVar(operationname);
        lastOperation = operationname;
    })
});
function clearVar(name = ''){
    dis1Num += dis2Num+ ' ' + name + ' ';
    display1.innerText = dis1Num;
    
    display2.innerText = result;
    dis2Num = '';

}
function mathOperation(){
    if(lastOperation === '*'){
        result = parseFloat(result) * parseFloat(dis2Num);
    }else
    if(lastOperation === '/'){
        result = parseFloat(result) / parseFloat(dis2Num);
    }else
    if(lastOperation == '+'){
        result = parseFloat(result) + parseFloat(dis2Num);
    }else
    if(lastOperation == '-'){
        result = parseFloat(result) - parseFloat(dis2Num);
    }
}
equale.addEventListener('click', (e) => {
    if(!dis1Num || !dis2Num) return;
    haveDot = false;
    mathOperation();
    clearVar();
    display2.innerText = result;
    dis2Num = result;
    dis1Num = '';
});

clear1.addEventListener('click', (e) =>{
    display2.innerHTML = '';
    display1.innerHTML = '';
    dis1Num = '';
    dis2Num = '';
    result = '';
});

clear2.addEventListener('click', (e) => {
    display2.innerHTML ='';
    dis2Num = '';
});

window.addEventListener('keydown', (e) => {
    if(
        e.key === '0' ||
        e.key === '1' ||
        e.key === '2' ||
        e.key === '3' ||
        e.key === '4' ||
        e.key === '5' ||
        e.key === '6' ||
        e.key === '7' ||
        e.key === '8' ||
        e.key === '9' ||
        e.key === '.'
    ){
        clickButton1(e.key);
    }else if(
        e.key === '+' ||
        e.key === '-' ||
        e.key === '*' ||
        e.key === '/'
    ){
        clickOperation(e.key);
    }else if(e.key == 'Enter' || e.key === "="){
        clickEqual();
    }
});

function clickButton1(key){
    numbere.forEach(button =>{
        if(button.innerText === key){
            button.click();
        }
    })
}

function clickOperation(key){
    operatione.forEach(button =>{
        if(button.innerText === key){
            button.click();
        }
    })
}
function clickEqual(){
    equale.click();
}
