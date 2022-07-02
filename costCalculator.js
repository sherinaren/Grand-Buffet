let itemPrices = {
    "AL": 13.99,
    "KL7": 8.99,
    "KL3": 6.99,
    "AD": 18.99,
    "KD7": 10.99,
    "KD3": 8.99,
    "FD": 2.99,
    "TGSH": 10.99,
    "TGL": 7.99,
    "TGD": 10.99
};

let itemQuantity = {
    "AL": 0,
    "KL7": 0,
    "KL3": 0,
    "AD": 0,
    "KD7": 0,
    "KD3": 0,
    "FD": 0,
    "TGSH": 0,
    "TGL": 0,
    "TGD": 0
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
    calculateDisplay.innerText = "Your total, tax included, will be $" + calculateTotalCost(itemQuantity) + ".";
};

function updateResetDisplay2() {
    calculateDisplay.innerText = "0";
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

