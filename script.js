let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button:not(#darkModeToggle)');
let darkModeToggle = document.getElementById('darkModeToggle');

let string = "";
let arr = Array.from(buttons);

// ============================================
// DARK MODE FUNCTIONALITY
// ============================================

// Check for saved dark mode preference on page load
if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
    updateDarkModeIcon();
}

// Dark mode toggle event listener
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    // Save preference to localStorage
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', 'disabled');
    }
    
    updateDarkModeIcon();
});

// Update icon based on current mode
function updateDarkModeIcon() {
    const icon = darkModeToggle.querySelector('i');
    if (document.body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}

// ============================================
// CALCULATOR FUNCTIONALITY
// ============================================

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
    else if(value === '%') {
        string += '/100';
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
