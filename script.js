function add(num1,num2){
    return Number(num1) + Number(num2);
}

function sub(num1,num2){
    return Number(num1) - Number(num2);
}

function multi(num1,num2){
    return Number(num1) * Number(num2);
}

function divi(num1,num2){
    return Number(num1) / Number(num2);
}

function operate(){
    let firstNum = "";
    let secNum = "";
    let op = "";
    const input = document.querySelector(".inputDisplay");
    const output = document.querySelector(".outputDisplay");
    const numBtns = document.querySelectorAll(".btn");
    const clearBtn = document.querySelector(".clearBtn");
    const opButtons = document.querySelectorAll(".btns");
    const resBtn = document.querySelector(".resBtn");
    const undo = document.querySelector(".backspace");

    undo.addEventListener('click',()=>{
        if(op===""){
            firstNum = "";
            input.textContent = "";
        }else if(secNum===""){
            op = "";
            input.textContent = "";
        }else{
            secNum= ""
            input.textContent = "";
        }
    })

    clearBtn.addEventListener('click',()=>{ 
        firstNum = "";
        secNum ="";
        op = "";
        input.textContent = "";
        output.textContent = "";
    })

    numBtns.forEach(button =>{
        button.addEventListener('click',() =>{
            if(op===""){
                firstNum += button.textContent;
                console.log(firstNum);
                input.textContent = `${firstNum}`;
            }else{
                secNum += button.textContent;
                console.log(secNum);
                input.textContent = `${secNum}`;
            }
        })
    })

    
    opButtons.forEach(button => {
        button.addEventListener("click", () => {
            if(secNum!==""){
                if (op ==="+"){
                    let res = add(firstNum,secNum);
                    secNum = "";
                    firstNum = res ;
                    console.log(`first num : ${firstNum}`);
                    output.textContent = `${res}`
                }
                else if(op === "-"){
                    let res = sub(firstNum,secNum);
                    secNum = "";
                    firstNum = res ;
                    console.log(firstNum);
                    output.textContent = `${res}`
                }
                else if(op === "*"){
                    let res = multi(firstNum,secNum);
                    secNum = "";
                    firstNum = res ;
                    console.log(firstNum);
                    output.textContent = `${res}`
                }
                else if(op === "/"){
                    let res = divi(firstNum,secNum);
                    secNum = "";
                    firstNum = res ;
                    console.log(firstNum);
                    output.textContent = `${res}`
                }
            }
            op = button.textContent;
            console.log(op);
            input.textContent = `${op}`
        });
    });
    
    resBtn.addEventListener('click',()=>{
        if (op ==="+"){
            let res = add(firstNum,secNum);
            secNum = "";
            firstNum = res ;
            console.log(`first num : ${firstNum}`);
            output.textContent = `${res}`
        }
        else if(op === "-"){
            let res = sub(firstNum,secNum);
            secNum = "";
            firstNum = res ;
            console.log(firstNum);
            output.textContent = `${res}`
        }
        else if(op === "*"){
            let res = multi(firstNum,secNum);
            secNum = "";
            firstNum = res ;
            console.log(firstNum);
            output.textContent = `${res}`
        }
        else if(op === "/"){
            let res = divi(firstNum,secNum);
            secNum = "";
            firstNum = res ;
            console.log(firstNum);
            output.textContent = `${res}`
        }
    })
   
}
console.log(operate());
