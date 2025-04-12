async function fetchWeather() {
    const apiKey = 'your-api-key-here'; // Replace this manually if you're not using a bundler
    const city = 'Las Vegas';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        displayWeather(data);
    } catch (error) {
        console.error('Error fetching weather:', error);
    }
}

function displayWeather(data) {
    const iconCode = data.weather[0].icon;
    const temp = Math.round(data.main.temp);
    const description = data.weather[0].description;

    const iconUrl = `https://openweathermap.org/img/w/${iconCode}.png`;
    const iconElement = document.createElement('img');
    iconElement.src = iconUrl;
    iconElement.alt = description;

    document.getElementById('weather-icon').appendChild(iconElement);
    document.getElementById('weather-temp').textContent = `${temp}\u00B0`;
    document.getElementById('weather-description').textContent = description;
}

fetchWeather();
