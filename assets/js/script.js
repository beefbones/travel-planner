var cityinfoEl = document.createElement('ul')
var populationEl = document.createElement('li')
var elevation = document.createElement('li')
var timeZone = document.createElement('li')
var cityInfo = document.querySelector('.city-info')
var searches = document.querySelector('#city-history')
var searched = JSON.parse(localStorage.getItem('history')) || [];

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'a0a60927ed0fb9fdcec46e044d6a3a77',
        'X-RapidAPI-Host': '"wft-geo-db.p.rapidapi.com'
    }
};
fetch('http://geodb-free-service.wirefreethought.com/v1/geo/cities')
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
//DOM Elements for weather
var showMeButton = document.querySelector(".button");
var searchInputEl = document.querySelector("#search-input");

function handleShowMeButtonClick(event) {
    event.preventDefault();
    var cityName = searchInputEl.value.trim();
    getWeather(cityName);


    
}

function getWeather(weatherCityName) {
    //API Url variables
    var weatherApiKey = "c0fe5b27487172b898ec093746e91718";
    weatherCityName = weatherCityName.replaceAll(' ', '+');
    var weatherCountryCode = "US";
    var weatherLimit = "1";                             
    var forecastWeatherApiUrl = `http://api.openweathermap.org/data/2.5/forecast?q=${weatherCityName}&units=imperial&appid=${weatherApiKey}`;
    var currentWeatherApiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${weatherCityName}&units=imperial&appid=${weatherApiKey}`;
    console.log('forecastWeatherApiUrl: ', forecastWeatherApiUrl);
    console.log('currentWeatherApiUrl: ', currentWeatherApiUrl);

    //forecast variables
    var cityName;                              
    var population;
    var country;
    var day1Date;
    var day1HT;
    var day1LT;
    var day2Date;
    var day2HT;
    var day2LT;
    var day3Date;
    var day3HT;
    var day3LT;
    var day4Date;
    var day4HT;
    var day4LT;
    var day5Date;
    var day5HT;
    var day5LT;
    //forecast data fetch
    fetch(forecastWeatherApiUrl).then((response) => response.json()).then((data) => {
        console.log(data);
        cityName = data.city.name;
        var forecastList = data.list;
        day1Date = dayjs().add(1, 'day').format('YYYY-MM-DD');
        day2Date = dayjs().add(2, 'day').format('YYYY-MM-DD');
        day3Date = dayjs().add(3, 'day').format('YYYY-MM-DD');
        day4Date = dayjs().add(4, 'day').format('YYYY-MM-DD');
        day5Date = dayjs().add(5, 'day').format('YYYY-MM-DD');
        for (var i = 0; i < forecastList.length; i++) {
            if (day1Date == forecastList[i].dt_txt.slice(0, 10)) {
                if (day1HT < forecastList[i].main.temp_max || day1HT == undefined) {
                    day1HT = forecastList[i].main.temp_max;
                }
                if (day1LT > forecastList[i].main.temp_min || day1LT == undefined) {
                    day1LT = forecastList[i].main.temp_min;
                }
            }
            if (day2Date == forecastList[i].dt_txt.slice(0, 10)) {
                if (day2HT < forecastList[i].main.temp_max || day2HT == undefined) {
                    day2HT = forecastList[i].main.temp_max;
                }
                if (day2LT > forecastList[i].main.temp_min || day2LT == undefined) {
                    day2LT = forecastList[i].main.temp_min;
                }
            }
            if (day3Date == forecastList[i].dt_txt.slice(0, 10)) {
                if (day3HT < forecastList[i].main.temp_max || day3HT == undefined) {
                    day3HT = forecastList[i].main.temp_max;
                }
                if (day3LT > forecastList[i].main.temp_min || day3LT == undefined) {
                    day3LT = forecastList[i].main.temp_min;
                }
            }
            if (day4Date == forecastList[i].dt_txt.slice(0, 10)) {
                if (day4HT < forecastList[i].main.temp_max || day4HT == undefined) {
                    day4HT = forecastList[i].main.temp_max;
                }
                if (day4LT > forecastList[i].main.temp_min || day4LT == undefined) {
                    day4LT = forecastList[i].main.temp_min;
                }
            }
            if (day5Date == forecastList[i].dt_txt.slice(0, 10)) {
                if (day5HT < forecastList[i].main.temp_max || day5HT == undefined) {
                    day5HT = forecastList[i].main.temp_max;
                }
                if (day5LT > forecastList[i].main.temp_min || day5LT == undefined) {
                    day5LT = forecastList[i].main.temp_min;
                }
            }
        }
        console.log('day1LT', day1LT);
        console.log('day1HT', day1HT);
        console.log('day1Date', day1Date);
        console.log('day2LT', day2LT);
        console.log('day2HT', day2HT);
        console.log('day2Date', day2Date);
        console.log('day3LT', day3LT);
        console.log('day3HT', day3HT);
        console.log('day3Date', day3Date);
        console.log('day4LT', day4LT);
        console.log('day4HT', day4HT);
        console.log('day4Date', day4Date);
        console.log('day5LT', day5LT);
        console.log('day5HT', day5HT);
        console.log('day5Date', day5Date);
        //element.text.value = day5ht;
    });
    //current weather data fetch
    fetch(currentWeatherApiUrl).then((response) => response.json()).then((data) => {
        console.log(data);
        var currentDate = dayjs();
        var currentTemp = data.main.temp;
        var currentTempFeels = data.main.feels_like;
        var currentTempMin = data.main.temp_min;
        var currentTempMax = data.main.temp_max;
        var weatherDescription = data.weather[0].description;
        var weatherIcon = data.weather[0].icon;
        var weatherIconURL = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
        console.log("currentDate:", currentDate);
        console.log("currentTemp:", currentTemp);
        console.log("currentTempFeels:", currentTempFeels);
        console.log("currentTempMin:", currentTempMin);
        console.log("currentTempMax:", currentTempMax);
        console.log("weatherDescription:", weatherDescription);
        console.log("weatherIcon:", weatherIcon);
        console.log("weatherIconURL:", weatherIconURL);
    });
}

// Create function to get city history
function grabHistory()  {
    searches.innerHTML = "";
    for (var i = 0; i < searched.length; i++) {
        var list = document.createElement('li');
        list.textContent = searched[i];
        searches.append(list);

        list.addEventListener('click', function(event) {
            var text = event.target.innerHTML

        })
    }
}
showMeButton.addEventListener("click", handleShowMeButtonClick);