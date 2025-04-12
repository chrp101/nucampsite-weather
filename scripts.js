async function fetchWeather() {
    const apiKey = '9dcefe327a3a18e8a96072ddc046550e'; // You should move this to environment variables in production
    const city = 'Las Vegas';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        console.error('Error fetching weather:', error);
        displayWeatherError();
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
    iconElement.classList.add('weather-icon-img');

    const iconContainer = document.getElementById('weather-icon');
    const tempContainer = document.getElementById('weather-temp');
    const descContainer = document.getElementById('weather-description');

    // Clear existing content (if reloaded)
    iconContainer.innerHTML = '';
    iconContainer.appendChild(iconElement);
    tempContainer.textContent = `${temp}°F`;
    descContainer.textContent = description;
    
    // Make weather component visible
    document.getElementById('weather').classList.remove('d-none');
}

function displayWeatherError() {
    const weatherContainer = document.getElementById('weather');
    weatherContainer.innerHTML = '<span class="text-warning">Weather unavailable</span>';
    weatherContainer.classList.remove('d-none');
}

// Fetch weather when page loads
document.addEventListener('DOMContentLoaded', fetchWeather);