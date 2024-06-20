document.addEventListener('DOMContentLoaded', function() {
    let inputTemp = document.getElementById('temp');
    let conversionType = document.getElementById('conversionType');
    let resultText = document.getElementById('resultText');
    let convertButton = document.getElementById('convertButton');

    const convertTemp = function() {
        let temp = parseFloat(inputTemp.value);
        let conversionValue = conversionType.value;

        if (isNaN(temp)) {
            resultText.innerText = "Please enter a valid number.";
            return;
        }

        let result;
        switch (conversionValue) {
            case 'CtoF':
                result = (temp * 9/5) + 32;
                resultText.innerText = `Result: ${temp}°C is equal to ${result.toFixed(2)}°F`;
                break;
            case 'FtoC':
                result = (temp - 32) * 5/9;
                resultText.innerText = `Result: ${temp}°F is equal to ${result.toFixed(2)}°C`;
                break;
            case 'CtoK':
                result = temp + 273.15;
                resultText.innerText = `Result: ${temp}°C is equal to ${result.toFixed(2)}K`;
                break;
            case 'KtoC':
                result = temp - 273.15;
                resultText.innerText = `Result: ${temp}K is equal to ${result.toFixed(2)}°C`;
                break;
            case 'FtoK':
                result = (temp - 32) * 5/9 + 273.15;
                resultText.innerText = `Result: ${temp}°F is equal to ${result.toFixed(2)}K`;
                break;
            case 'KtoF':
                result = (temp - 273.15) * 9/5 + 32;
                resultText.innerText = `Result: ${temp}K is equal to ${result.toFixed(2)}°F`;
                break;
        }
    };

    convertButton.addEventListener('click', convertTemp);
});
