
//HW2:
//Goals:
  //1. Update page to Chicago data as default
  //2. Get user's location information and recode

//DONE: Update page to Chicago
let startInfo = "Chicago"
let overwriteChicago = document.querySelector('#weather h4').innerHTML = startInfo;
let openweathermap_api_url = 'https://api.openweathermap.org/data/2.5/weather?lat=41.8&lon=-87.6&appid=4ce6f502d38ddae567bf1702b05e168c&units=imperial'


//Fetch weather data for Chicago
let getWeather = function("") {
  fetch(openweathermap_api_url).then(convertToJSON).then(updateWeather).catch(displayError);
}

// Listen for the Search button and contact the movie service.
let button = document.getElementById("chi_weather")
button.addEventListener("click", function(event) {
  event.preventDefault();
  getWeather(search_term);
  let search_term = openweathermap_api_url;
)}


// let updateWeather = function(dataFromService) {
//   topHit = dataFromService.results[0];
//   weatherImage = document.querySelector('#weather img');
//   weatherImage.src = 'http://openweathermap.org/img/w/' + topHit.weather.icon;
// }

// let updateWeather = function(dataFromService) {
//   topHit = dataFromService.results[0];
//   city = topHit.name;
//   let latitude = '41.8781';
//   let longitude = '-87.6298';
//
//   fetch(openweathermap_api_url).then(convertToJSON).then(updateWeather).catch(displayError);
// }

// This section: Fetch Chicago weather
// let updateWeather = function(dataFromService) {
//   topHit = dataFromService.results[0];
//   newLocation ="https://api.openweathermap.org/data/2.5/weather?lat=" + info.coords.latitude.toFixed(4) + "&lon" + info.coords.longitude.toFixed(4);
//   locationElement = document.querySelector('#weather h4');
//     locationElement.innerHTML = newLocation
//
// }



  // This function takes a potential movie title as input,
  // and outputs a URL that will query the service for that title.
// let weatherServiceUrl = function(info) {
//   console.info(info)
//   let latitude = '41.8781';
//   let longitude = '-87.6298';
//   let url = 'https://api.openweathermap.org/data/2.5/weather?'+ 'lat=' + latitude.toFixed(3) + '&lon=' + longitude.toFixed(3);
//   return url;
//   }

// let overwriteLocation = document.querySelector('#weather h5').innerHTML = url;

  //DONE: Get user's location
  // let link = document.getElementById("get_forecast")
  // link.addEventListener("click", function(event) {
  //   event.preventDefault();
  //   navigator.geolocation.getCurrentPosition(weatherServiceUrl);
  // });









// Convert to JSON script
let convertToJSON = function(response) {
  return response.json();
}

let displayError = function(error) {
  console.debug(error);
  window.alert("Sorry, something went wrong.");
}



// HINT:
// Weather icon example: http://openweathermap.org/img/w/10d.png
// The very last part ('10d.png') can change based on the current conditions.
