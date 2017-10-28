//HW2:
//Goals:
  //1. Update page to Chicago data as default
  //2. Get user's location information and recode

//DONE: Update page to Chicago
let startInfo = "What's the weather outside?"
let overwriteInfo = document.querySelector('#weather p').innerHTML = startInfo;
let startLocation = "TBD"
let overwriteChicago = document.querySelector('#weather h4').innerHTML = startLocation;

// #3. DONE
// Show user's weather using the button
let button = document.getElementById("get_forecast")
button.addEventListener("click", function(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(chicagoWeather);
});

let chicagoWeather = function(info) {
  console.info(info)
  let openweathermap_api_url = "https://api.openweathermap.org/data/2.5/weather?lat=" + info.coords.latitude.toFixed(2) + "&lon=" + info.coords.longitude.toFixed(2) + "&appid=4ce6f502d38ddae567bf1702b05e168c&units=imperial"
  fetch(openweathermap_api_url).then(convertToJSON).then(updateWeather).catch(displayError);
}

// #1. DONE
// Show Chicago's weather using the button
// Functional code
// let chicagoWeather = function() {
//   // let latitude = '41.8781';
//   // let longitude = '-87.6298';
//   let openweathermap_api_url = 'https://api.openweathermap.org/data/2.5/weather?lat=41.8&lon=-87.6&appid=4ce6f502d38ddae567bf1702b05e168c&units=imperial'
//   fetch(openweathermap_api_url).then(convertToJSON).then(updateWeather).catch(displayError);
// }

let updateWeather = function(dataFromService) {
  console.info(dataFromService)
    currentLocationID = dataFromService.name;
    currentLocation = document.querySelector('#weather h4');
    currentLocation.innerHTML = currentLocationID;
    currentTemperatureID = dataFromService.main.temp.toFixed(0);
    currentWeatherDescription = dataFromService.weather[0].description
    currentTemperature = document.querySelector('#weather p');
    currentTemperature.innerHTML = "It is " + currentTemperatureID + " degrees outside with " + currentWeatherDescription +".";
    currentWeatherImgUrl = "http://openweathermap.org/img/w/" + dataFromService.weather[0].icon + ".png";
    currentWeatherImg = document.querySelector('#weather img');
    currentWeatherImg.src = currentWeatherImgUrl;
}


//#2. DONE
// Get user's location
// Emit the user's actual location into the console.

let link = document.getElementById("get_forecast")
link.addEventListener("click", function(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(userData);
});

// Emit user's location to the console
let userData = function(info) {
  console.log("User Latitude:", info.coords.latitude);
  console.log("User Longitude:", info.coords.longitude);

  }

//displayError Script
let displayError = function(error) {
  console.debug(error);
  window.alert("Sorry, something went wrong.");
}

// Convert to JSON script
let convertToJSON = function(response) {
  return response.json();
}
