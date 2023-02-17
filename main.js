const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault(); 
  const city = document.querySelector('#city').value; // Obtiene el valor del campo de entrada de la ciudad
  getWeatherData(city);
});

const getWeatherData = (city) => {
  const apiKey = 'TU_CLAVE_API'; // Reemplaza "TU_CLAVE_API" con tu clave API de OpenWeatherMap
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=es`;
  fetch(apiUrl) // Realiza una solicitud a la API
    .then(response => response.json()) // Convertimos la respuesta a formato JSON
    .then(data => {
      showWeatherData(data); // Llamamos a la función para mostrar los datos del clima en el HTML
    })
    .catch(error => {
      console.log('Ha ocurrido un error:', error); // Muestra un mensaje de error en la consola si la solicitud falla
    });
};

const showWeatherData = (data) => {
  const temperature = data.main.temp; // Obtiene la temperatura actual de la ciudad
  const description = data.weather[0].description; // Obtiene la descripción del clima actual de la ciudad
  const city = data.name; // Obtiene el nombre de la ciudad
  const html = `
    <h2>El clima en ${city}:</h2>
    <p>Temperatura actual: ${temperature}°C</p>
    <p>Descripción del clima: ${description}</p>
  `;
  document.querySelector('#weather-data').innerHTML = html; // Agrega los datos del clima al HTML
};
