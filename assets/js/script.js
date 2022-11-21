var cityinfo = createElement('ul')
var population = createElement('li')
var elevation = createElement('li')
var timeZone = createElement('li')
var cityinfo = queryselector('.city-info')


const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key':'a0a60927ed0fb9fdcec46e044d6a3a77',
        'X-RapidAPI-Host':'"wft-geo-db.p.rapidapi.com'
    }
};

fetch('http://geodb-free-service.wirefreethought.com/v1/geo/cities')
.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));









//DOM Elements for weather
var showMeButton = document.querySelector(".button");
var searchInputEl = document.querySelector("#search-input");


function handleShowMeButtonClick (event) {
    console.log("show me button was clicked");
    var weatherApiKey = "c0fe5b27487172b898ec093746e91718";
    var weatherCityName = searchInputEl.value.trim();
    weatherCityName = weatherCityName.replaceAll(' ', '+');
    var weatherCountryCode = "US";
    var weatherLimit = "1";
    var weatherApiUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${weatherCityName},${weatherCountryCode}&limit=${weatherLimit}&appid=${weatherApiKey}`;
    console.log(weatherApiUrl);
}

showMeButton.addEventListener("click", handleShowMeButtonClick);


