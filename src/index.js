function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  let cityElement = document.querySelector("#city");
  let str = searchInput.value;
  str = str.charAt(0).toUpperCase() + str.slice(1);
  cityElement.innerHTML = str;
}
let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);
