let formElement = document.querySelector(".js-form");
let sumElement = document.querySelector(".js-form__sum");
let currencyElement = document.querySelector(".js-form__currency");
let resultElement = document.querySelector(".js-form__result");
let exchangeElement = document.querySelector(".js-form__exchange");
let exchangeEUR = 0.22;
let exchangeCZK = 5.57;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    switch (currencyElement.value) {
        case "EUR":
            EUR = sumElement.value * 0.22;
            resultElement.innerText = EUR.toFixed(2);
            exchangeElement.innerText = exchangeEUR;
            break;
        case "CZK":
            CZK = sumElement.value * 5.57;
            resultElement.innerText = CZK.toFixed(2);
            exchangeElement.innerText = exchangeCZK;
            break;

    }



});
