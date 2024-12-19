document.addEventListener("DOMContentLoaded", () => {
    const weatherStatus = document.getElementById("weather-status");
    const weatherTemp = document.getElementById("weather-temp");
    const weatherHumidity = document.getElementById("weather-humidity");

    // Cambia estas coordenadas por las que desees
    const lat = -34.6037;
    const lon = -58.3816;
    const apiKey = "9dad8274c8b5a114d982b04b3f58b2b9";  // Tu clave API de OpenWeatherMap

    // Función para obtener el clima
    const obtenerClima = async () => {
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=es&appid=${apiKey}`;
        
        try {
            const response = await fetch(url);
            const data = await response.json();

            if (data && data.weather && data.main) {
                weatherStatus.textContent = data.weather[0].description;  // Estado del clima
                weatherTemp.textContent = `${data.main.temp}°C`;  // Temperatura en °C
                weatherHumidity.textContent = `${data.main.humidity}%`;  // Humedad
            } else {
                weatherStatus.textContent = 'No disponible';
                weatherTemp.textContent = 'No disponible';
                weatherHumidity.textContent = 'No disponible';
            }
        } catch (error) {
            console.error("Error al obtener el clima: ", error);
            weatherStatus.textContent = 'Error al obtener los datos';
            weatherTemp.textContent = 'Error';
            weatherHumidity.textContent = 'Error';
        }
    };

    obtenerClima();  // Llamada a la función para obtener el clima
});
