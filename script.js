function convertToFahrenheit() {
    const celsiusInput = document.getElementById('celsius').value;
    const fahrenheitInput = document.getElementById('fahrenheit');
    
    if (celsiusInput !== '') {
        const fahrenheit = (celsiusInput * 9/5) + 32;
        fahrenheitInput.value = fahrenheit.toFixed(2);
    } else {
        fahrenheitInput.value = '';
    }
}

function convertToCelsius() {
    const fahrenheitInput = document.getElementById('fahrenheit').value;
    const celsiusInput = document.getElementById('celsius');
    
    if (fahrenheitInput !== '') {
        const celsius = (fahrenheitInput - 32) * 5/9;
        celsiusInput.value = celsius.toFixed(2);
    } else {
        celsiusInput.value = '';
    }
}

    
