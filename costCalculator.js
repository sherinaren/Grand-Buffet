let itemPrices = {
    "AL": 11.59,
    "KL6": 6.99,
    "KL3": 5.99,
    "AD": 13.99,
    "KD6": 7.99,
    "KD3": 6.99,
    "FD": 2.59,
    "TGSH": 10.99,
    "TGSS": 7.99,
    "TG": 5.49
};

let itemQuantity = {
    "AL": 0,
    "KL6": 0,
    "KL3": 0,
    "AD": 0,
    "KD6": 0,
    "KD3": 0,
    "FD": 0,
    "TGSH": 0,
    "TGSS": 0,
    "TG": 0
};

function calculateTotalCost(itemQuantity) {
    let totalCost = 0
    for (const [itemName, quantity] of Object.entries(itemQuantity)) {
        if (quantity !==0) {
            totalCost = totalCost + quantity * itemPrices[itemName] * 1.0825 
        } 
    }    
    return Math.round(totalCost*100)/100
};

let calculateDisplay = document.getElementById("cal_dis");

function updateCalculateDisplay() {
    calculateDisplay.innerText = "Total: Your total, tax included, will be $" + calculateTotalCost(itemQuantity) + ".";
};

function updateResetDisplay2() {
    calculateDisplay.innerText = "Total: 0";
};
// Reset Button Code

let resetElems = document.querySelectorAll(".resetButton");
function clickResetButton(itemQuantity) {
    for (const [itemName, quantity] of Object.entries(itemQuantity)) {
        itemQuantity[itemName]=0
        updateDisplay(itemName)
    }
    updateResetDisplay2()
    return itemQuantity
};
resetElems.forEach((button) =>
    button.addEventListener('click', () => {
        itemQuantity=clickResetButton(itemQuantity)
    }))
;
 


// Plus and Minus Button Code
let counterDisplayElems = document.querySelectorAll('.counter-display');
let counterMinusElems = document.querySelectorAll('.counter-minus');
let counterPlusElems = document.querySelectorAll('.counter-plus');


function updateDisplay (ID_of_display) {
    let display = document.querySelector('.counter-display#'+ID_of_display);
    display.innerText = itemQuantity[ID_of_display];
};

function clickPlusButton (ID_of_a_button) {
    itemQuantity[ID_of_a_button]++
    updateDisplay(ID_of_a_button)
    updateCalculateDisplay()
};

function clickMinusButton (ID_of_a_button) {
    if (itemQuantity[ID_of_a_button] >= 1) {
        itemQuantity[ID_of_a_button]--;
    }
    updateDisplay(ID_of_a_button)
    updateCalculateDisplay()
};

counterPlusElems.forEach((button)=>
    button.addEventListener('click', () => clickPlusButton(button.id))
);

counterMinusElems.forEach((button)=>
    button.addEventListener('click', () => clickMinusButton(button.id))
);

counterDisplayElems.forEach((button)=>
    button.addEventListener('click', () => updateDisplay(button.id))
);

