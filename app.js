const rangeCharacters = document.getElementById("range-char");
const numberCharacters = document.getElementById("number-char");
const formContainer = document.querySelector("#password-form");
const numberEl = document.querySelector("#numbers");
const symbolsEl = document.querySelector("#symbols");
const uppercaseEl = document.querySelector("#uppercase");
const passwordDisplay = document.querySelector("#password-display");


const lowercaseCode = arrayLowToHigh(97, 122);
const numberCode = arrayLowToHigh(48, 57);
const symbolCode = arrayLowToHigh(33, 47)
    .concat(58, 64)
    .concat(91, 96)
    .concat(123, 126);
const uppercaseCode = arrayLowToHigh(65, 90);


rangeCharacters.addEventListener("input", syncCharAmount);
numberCharacters.addEventListener("input", syncCharAmount);

function syncCharAmount(e){
    const valueAmount = e.target.value;
    rangeCharacters.value = valueAmount;
    numberCharacters.value = valueAmount;
}

//générer le password quand le form est envoyer
formContainer.addEventListener('submit', function(e){
    e.preventDefault()
    const characterAmount = numberCharacters.value;
    const includeUppercase = uppercaseEl.checked;
    const includeNumbers = numberEl.checked;
    const includeSymbols = symbolsEl.checked;

    const password = generatePassword(characterAmount,
         includeUppercase, 
         includeNumbers,
         includeSymbols
         );

        passwordDisplay.innerText = password;
});

function generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols){
        let charCodes = lowercaseCode;
        if (includeNumbers) charCodes = charCodes.concat(numberCode);
        if (includeSymbols) charCodes = charCodes.concat(symbolCode);
        if (includeUppercase) charCodes = charCodes.concat(uppercaseCode);
    

    const passwordCharacters = [];
    for (let h = 0; h < characterAmount; h++) {
        let characterCode = charCodes[Math.floor(Math.random() * charCodes.length)];
        passwordCharacters.push(String.fromCharCode(characterCode));
    }
    return passwordCharacters.join("");
}

function arrayLowToHigh(low, high) {
    let array = [];
    for(let i = low; i <= high; i++){
        array.push(i);
    }
    return array;
}

