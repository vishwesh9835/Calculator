let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);

// 1. CLICK LISTENER
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        handleInput(e.target.innerText.trim());  
    })
});

// 2. KEYBOARD LISTENER
document.addEventListener('keydown', (e) => {
    
    if (e.key === "Enter") {
        e.preventDefault();
        handleInput("="); 
    }
    else if (e.key === "Backspace") {
        e.preventDefault();
        handleInput("DEL");
    }
    else if (e.key === "Escape") {
        e.preventDefault();
        handleInput("AC");
    }
    else {
        const allowedKeys = "0123456789+-*/.%";
        if (allowedKeys.includes(e.key)) {
            handleInput(e.key);
        }
    }
});

// 3. MAIN LOGIC FUNCTION
function handleInput(value) {

    if (input.value === "Error") {
        string = "";
    }

    if (value === '=') {
        try {
            if (string === "") {
                input.value = "";
            } else {
                string = eval(string).toString();
                input.value = string;
            }
        } catch (error) {
            input.value = "Error";
            string = "";
        }
    }
    else if (value === 'AC') {
        string = "";
        input.value = string;
    }
    else if (value === 'DEL') {
        string = string.toString();
        string = string.substring(0, string.length - 1);
        input.value = string;
    }
    else {
        string += value;
        input.value = string;
    }
}
