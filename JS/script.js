{
    const exchangeEUR = 0.22;
    const exchangeCZK = 5.57;

    const resultCalculate = (sum, currency,) => {

        switch (currency) {
            case "EUR":
                return sum * exchangeEUR;
            case "CZK":
                return sum * exchangeCZK;
        };
    };

    const displayCourse = (currency) => {
        switch (currency) {
            case "EUR":
                return exchangeEUR;
            case "CZK":
                return exchangeCZK;
        };
    };
    const UpdateCourseText = (resultExchange) => {
        const Exchange = document.querySelector(".js-form__exchange");
        Exchange.innerText = `${resultExchange}`;
    };

    const updateResultText = (result, sum, currency,) => {
        const resultElement = document.querySelector(".js-form__result");
        resultElement.innerText = `${sum} PLN = ${result} ${currency} `;
    };
    const onFormSubmit = (event) => {
        event.preventDefault();

        const sumElement = document.querySelector(".js-form__sum");
        const currencyElement = document.querySelector(".js-form__currency");


        const sum = +sumElement.value;
        const currency = currencyElement.value;

        const result = resultCalculate(sum, currency,);
        const resultExchange = displayCourse(currency);

        updateResultText(result, sum, currency,);
        UpdateCourseText(resultExchange);
    };
    const init = () => {
        const formElement = document.querySelector(".js-form");
        formElement.addEventListener("submit", onFormSubmit);
    };
    init();
};