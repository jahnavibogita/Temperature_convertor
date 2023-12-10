function convertCelsiusToFahrenheit() {
    var celsiusInput = document.getElementById("celsius");
    var fahrenheitInput = document.getElementById("fahrenheit");

    var celsiusValue = parseFloat(celsiusInput.value);
    var fahrenheitValue = (celsiusValue * 9 / 5) + 32;

    fahrenheitInput.value = fahrenheitValue.toFixed(2);
}

function convertFahrenheitToCelsius() {
    var celsiusInput = document.getElementById("celsius");
    var fahrenheitInput = document.getElementById("fahrenheit");

    var fahrenheitValue = parseFloat(fahrenheitInput.value);
    var celsiusValue = (fahrenheitValue - 32) * 5 / 9;

    celsiusInput.value = celsiusValue.toFixed(2);
}
