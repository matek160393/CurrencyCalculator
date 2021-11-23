{
    const resultCalculation = (sumElement, currencyElement) => {
        const exchangeEUR = 0.22;
        const exchangeCZK = 5.57;

        switch (currencyElement.value) {
            case "EUR":
                return sumElement * exchangeEUR;
            case "CZK":
                return sumElement * exchangeCZK;
        };
    };
    const updateResultText = (sumElement, resultElement, currencyElement) => {
        const resultElement = document.querySelector(".js-form__result");
        resultElement.innertext = `${sumElement.tofixed(2)} PLN = ${resultElement.tofixed(2)} ${currencyElement} `;

    };
    const onFormSubmit = (event) => {
        event.preventDefault();

        const sumElement = document.querySelector(".js-form__sum");
        const currencyElement = document.querySelector(".js-form__currency");

        const sum = +sumElement.value;
        const currency = currencyElement.value;

        const result = resultCalculation(sum, currency);

        updateResultText(sum, currency, result);
    };
    const init = () => {
        const formElement = document.querySelector(".js-form");
        formElement.addEventListener("submit", onFormSubmit);

    };
    init();
};