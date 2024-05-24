document.addEventListener('DOMContentLoaded', () => {
    const searchQueryInput = document.getElementById('searchQuery');
    const searchButton = document.getElementById('searchButton');

    function getWeatherData(cityName) {
        const apiKey = 'b1fd6e14799699504191b6bdbcadfc35'; // API anahtarınızı buraya ekleyin
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&lang=tr&appid=${apiKey}`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(result => displayResult(result))
            .catch(error => console.error('Hava durumu verisi alınırken hata oluştu:', error));
    }

    function displayResult(result) {
        const cityElement = document.querySelector('.city');
        cityElement.innerText = `${result.name}, ${result.sys.country}`;

        const now = new Date();
        const dateElement = document.querySelector('.date');
        dateElement.innerText = dateBuilder(now);

        const hourElement = document.querySelector('.hour');
        hourElement.innerText = getHour(now);

        const tempElement = document.querySelector('.temp');
        tempElement.innerText = `${Math.round(result.main.temp)}°C`;

       

        const humidityElement = document.querySelector('.humidity');
        humidityElement.innerText = `Humidity : ${result.main.humidity}%`;

        const windElement = document.querySelector('.wind');
        windElement.innerText = `Wind : ${result.wind.speed}m/s N`;
    }

    function dateBuilder(d) {
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

        const day = days[d.getDay()];
        const date = d.getDate();
        const month = months[d.getMonth()];
        const year = d.getFullYear();

        return `${day} ${date} ${month} ${year}`;
    }

    function getHour(h) {
        const hour = h.getHours();
        const minute = h.getMinutes();
        return `${hour}:${minute}`;
    }

    searchQueryInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            getWeatherData(searchQueryInput.value);
        }
    });

    searchButton.addEventListener('click', () => {
        getWeatherData(searchQueryInput.value);
    });

    // Sayfa yüklendiğinde 'Çorum' şehri için hava durumu verisini al
    getWeatherData('Ankara');
});
