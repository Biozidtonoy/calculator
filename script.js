// addition
function add(num1,num2){
    return (`addition : ${num1+num2}`);
}
//subtraction
function sub(num1,num2){
    return (`substruction : ${num1-num2}`);
}
// multiplication
function multi(num1,num2){
    return (`multiplication: ${num1*num2}`);
}
// division
function divi(num1,num2){
    return (`division : ${num1/num2}`);
}


// operate the upper function
function operate(){
    let firstNum = parseFloat(prompt("1st num"));
    let op = prompt("enter operator : +, - , * ,/");
    let secNum = parseFloat(prompt("2nd num"));

    if (op ==="+"){
        return add(firstNum,secNum);
    }
    else if(op === "-"){
        return sub(firstNum,secNum);
    }
    else if(op === "*"){
        return multi(firstNum,secNum);
    }
    else if(op === "/"){
        return divi(firstNum,secNum);
    }
}
console.log(operate());
