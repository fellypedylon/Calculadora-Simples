let runningTotal = 0;
let buffer = "0";
let previousOperator = null; // FIX 3: era undefined, deve ser null

const screen = document.querySelector(".screen");

function buttonClick(value) {
    if (isNaN(value)) {
        handleSymbol(value);
    } else {
        handleNumber(value);
    }
    screen.innerText = buffer;
}

function handleSymbol(symbol) {
    switch (symbol) {
        case "C":
            buffer = "0";
            runningTotal = 0;
            break;
        case "=":
            if (previousOperator === null) {
                return;
            }
            flushOperation(parseInt(buffer));
            previousOperator = null;
            buffer = "" + runningTotal;
            runningTotal = 0;
            break;

        case "←":
            if (buffer.length === 1) {
                buffer = "0";
            } else {
                buffer = buffer.substring(0, buffer.length - 1);
            }
            break;
        case "+":
        case "-":
        case "×": // FIX 1: era "*", o botão envia "×"
        case "÷": // FIX 2: era "/", o botão envia "÷"
            handleMath(symbol);
            break;
    }
}

function handleMath(symbol) {
    if (buffer === "") {
        return;
    }

    const intBuffer = parseInt(buffer);
    if (runningTotal === 0) {
        runningTotal = intBuffer;
    } else {
        flushOperation(intBuffer);
    }

    previousOperator = symbol;
    buffer = "0";
}

function flushOperation(intBuffer) {
    if (previousOperator === "+") {
        runningTotal += intBuffer;
    } else if (previousOperator === "-") {
        runningTotal -= intBuffer;
    } else if (previousOperator === "×") { // FIX 1: era "*"
        runningTotal *= intBuffer;
    } else if (previousOperator === "÷") { // FIX 2: era "/"
        runningTotal /= intBuffer;
    }
}

function handleNumber(numberString) {
    if (buffer === "0") {
        buffer = numberString;
    } else {
        buffer += numberString;
    }
}

function init() {
    document.querySelector(".calc-buttons").addEventListener("click", function (event) {
        buttonClick(event.target.innerText.trim()); // FIX (HTML): .trim() remove espaços do innerText
    });
}

init();