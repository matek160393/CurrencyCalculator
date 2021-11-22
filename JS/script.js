{
    const formElement = document.querySelector(".js-form");
    const sumElement = document.querySelector(".js-form__sum");
    const currencyElement = document.querySelector(".js-form__currency");
    const resultElement = document.querySelector(".js-form__result");
    const exchangeElement = document.querySelector(".js-form__exchange");


    const resultCalculation = () => {
        const exchangeEUR = 0.22;
        const exchangeCZK = 5.57;

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
    }
   

    formElement.addEventListener("submit", (event) => {
        event.preventDefault();
        resultCalculation();



    });

}