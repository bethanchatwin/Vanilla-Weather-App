function displayCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  let cityElement = document.querySelector("#city");

  let str = searchInput.value;
  str = str.charAt(0).toUpperCase() + str.slice(1);
  cityElement.innerHTML = str;

  handleSearch(searchInput.value);
}
let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", displayCity);

function displayTemperature(response) {
  let temp = Math.round(response.data.temperature.current);
  let tempElement = document.querySelector("#current-temp");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  cityElement.innerHTML = response.data.city;
  tempElement.innerHTML = `${temp}`;
  descriptionElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
  windElement.innerHTML = `${response.data.wind.speed}km/h`;
}

function handleSearch(city) {
  let apiKey = "0083118ae860436btf146b9cbfb3oc7f";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemperature);
}
