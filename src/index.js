function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  let cityElement = document.querySelector("#city");
  let str = searchInput.value;
  str = str.charAt(0).toUpperCase() + str.slice(1);
  cityElement.innerHTML = str;
  handleSearch(searchInput.value);
}
let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

function displayTemperature(response) {
  let temp = Math.round(response.data.temperature.current);
  let tempElement = document.querySelector("#current-temp");
  let cityElement = document.querySelector("city");
  cityElement.innerHTML = response.data.city;
  tempElement.innerHTML = `${temp}`;
}

function handleSearch(city) {
  let apiKey = "0083118ae860436btf146b9cbfb3oc7f";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemperature);
}
