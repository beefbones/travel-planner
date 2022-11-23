dayjs.extend(window.dayjs_plugin_utc);
dayjs.extend(window.dayjs_plugin_timezone);



var cityinfo = document.createElement('ul')
var population = document.createElement('li')
var elevation = document.createElement('li')
var timeZone = document.createElement('li')
var cityinfo = document.querySelector('.city-info')
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
    // console.log('forecastWeatherApiUrl: ', forecastWeatherApiUrl);
    // console.log('currentWeatherApiUrl: ', currentWeatherApiUrl);

    //forecast variables
    var cityName;
    var population;
    var country;
    var day1Date = dayjs().add(1, 'day').format('YYYY-MM-DD');
    var day1HT;
    var day1LT;
    var day2Date = dayjs().add(2, 'day').format('YYYY-MM-DD');
    var day2HT;
    var day2LT;
    var day3Date = dayjs().add(3, 'day').format('YYYY-MM-DD');
    var day3HT;
    var day3LT;
    var day4Date = dayjs().add(4, 'day').format('YYYY-MM-DD');
    var day4HT;
    var day4LT;
    var day5Date = dayjs().add(5, 'day').format('YYYY-MM-DD');
    var day5HT;
    var day5LT;
    var forecastTempDay1;
    var forecastWeatherIconDay1;
    var forecastTempDay2;
    var forecastWeatherIconDay2;
    var forecastTempDay3;
    var forecastWeatherIconDay3;
    var forecastTempDay4;
    var forecastWeatherIconDay4; 

    //forecast data fetch
    fetch(forecastWeatherApiUrl).then((response) => response.json()).then((data) => {
        // console.log(data);
        cityName = data.city.name;
        var forecastList = data.list;

        for (var i = 0; i < forecastList.length; i++) {
            if (day1Date == forecastList[i].dt_txt.slice(0, 10)) {
                if (day1HT < forecastList[i].main.temp_max || day1HT == undefined) {
                    day1HT = forecastList[i].main.temp_max;
                }
                if (day1LT > forecastList[i].main.temp_min || day1LT == undefined) {
                    day1LT = forecastList[i].main.temp_min;
                }
                if (forecastList[i].dt_txt.slice(11, 13) == "12") {
                    forecastTempDay1 = forecastList[i].main.temp;
                    forecastWeatherIconDay1 = forecastList[i].weather[0].icon;
                }
            }
            if (day2Date == forecastList[i].dt_txt.slice(0, 10)) {
                if (day2HT < forecastList[i].main.temp_max || day2HT == undefined) {
                    day2HT = forecastList[i].main.temp_max;
                }
                if (day2LT > forecastList[i].main.temp_min || day2LT == undefined) {
                    day2LT = forecastList[i].main.temp_min;
                }
                if (forecastList[i].dt_txt.slice(11, 13) == "12") {
                    forecastTempDay2 = forecastList[i].main.temp;
                    forecastWeatherIconDay2 = forecastList[i].weather[0].icon;
                }
            }
            if (day3Date == forecastList[i].dt_txt.slice(0, 10)) {
                if (day3HT < forecastList[i].main.temp_max || day3HT == undefined) {
                    day3HT = forecastList[i].main.temp_max;
                }
                if (day3LT > forecastList[i].main.temp_min || day3LT == undefined) {
                    day3LT = forecastList[i].main.temp_min;
                }
                if (forecastList[i].dt_txt.slice(11, 13) == "12") {
                    forecastTempDay3 = forecastList[i].main.temp;
                    forecastWeatherIconDay3 = forecastList[i].weather[0].icon;
                }
            }
            if (day4Date == forecastList[i].dt_txt.slice(0, 10)) {
                if (day4HT < forecastList[i].main.temp_max || day4HT == undefined) {
                    day4HT = forecastList[i].main.temp_max;
                }
                if (day4LT > forecastList[i].main.temp_min || day4LT == undefined) {
                    day4LT = forecastList[i].main.temp_min;
                }
                if (forecastList[i].dt_txt.slice(11, 13) == "12") {
                    forecastTempDay4 = forecastList[i].main.temp;
                    forecastWeatherIconDay4 = forecastList[i].weather[0].icon;
                }
            }
            if (day5Date == forecastList[i].dt_txt.slice(0, 10)) {
                if (day5HT < forecastList[i].main.temp_max || day5HT == undefined) {
                    day5HT = forecastList[i].main.temp_max;
                }
                if (day5LT > forecastList[i].main.temp_min || day5LT == undefined) {
                    day5LT = forecastList[i].main.temp_min;
                }
                if (forecastList[i].dt_txt.slice(11, 13) == "12") {
                    forecastTempDay5 = forecastList[i].main.temp;
                    forecastWeatherIconDay5 = forecastList[i].weather[0].icon;
                }
            }
        }
        // console.log('day1LT', day1LT);
        // console.log('day1HT', day1HT);
        // console.log('day1Date', day1Date);
        // console.log('day2LT', day2LT);
        // console.log('day2HT', day2HT);
        // console.log('day2Date', day2Date);
        // console.log('day3LT', day3LT);
        // console.log('day3HT', day3HT);
        // console.log('day3Date', day3Date);
        // console.log('day4LT', day4LT);
        // console.log('day4HT', day4HT);
        // console.log('day4Date', day4Date);
        // console.log('day5LT', day5LT);
        // console.log('day5HT', day5HT);
        // console.log('day5Date', day5Date);

        //new dates forecast
        var day1CardDate = dayjs().add(1, 'day').format('M/D/YYYY');
        var day2CardDate = dayjs().add(2, 'day').format('M/D/YYYY');
        var day3CardDate = dayjs().add(3, 'day').format('M/D/YYYY');
        var day4CardDate = dayjs().add(4, 'day').format('M/D/YYYY');
        var day5CardDate = dayjs().add(5, 'day').format('M/D/YYYY');

         //Day1 forecast weather elements
         const forecastCardDateEl = document.getElementById("day1Date");
         forecastCardDateEl.textContent = day1CardDate;
        //  forecastCardDateEl.append(day1CardDate);

         const forecastCardTempEl = document.getElementById("forecastTempDay1");
         forecastCardTempEl.textContent = (Math.floor(forecastTempDay1));
         // forecastCardTempEl.append(Math.floor(forecastTempDay1));

         const forecastCardWeatherIconEl = document.getElementById("forecastWeatherIconDay1");
         forecastCardWeatherIconEl.setAttribute('src', `http://openweathermap.org/img/wn/${forecastWeatherIconDay1}@2x.png`);

         const forecastCardTempMinEl = document.getElementById("day1HT");
         forecastCardTempMinEl.textContent = (Math.floor(day1HT));
         // forecastCardTempMinEl.append(Math.floor(day1HT));

         const forecastCardTempMaxEl = document.getElementById("day1LT");
         forecastCardTempMaxEl.textContent = (Math.floor(day1LT));
         // forecastCardTempMaxEl.append(Math.floor(day1LT));

         //Day2 forecast weather elements
         const forecastCardDateDay2El = document.getElementById("day2Date");
         forecastCardDateDay2El.textContent = (day2CardDate);
         // forecastCardDateDay2El.append(day2CardDate);

         const forecastCardTempDay2El = document.getElementById("forecastTempDay2");
         forecastCardTempDay2El.textContent = (Math.floor(forecastTempDay2));
         // forecastCardTempDay2El.append(Math.floor(forecastTempDay2));

         const forecastCardWeatherIconDay2El = document.getElementById("forecastWeatherIconDay2");
         forecastCardWeatherIconDay2El.setAttribute('src', `http://openweathermap.org/img/wn/${forecastWeatherIconDay2}@2x.png`);

         const forecastCardTempMinDay2El = document.getElementById("day2HT");
         forecastCardTempMinDay2El.textContent = (Math.floor(day2HT));
         // forecastCardTempMinDay2El.append(Math.floor(day2HT));

         const forecastCardTempMaxDay2El = document.getElementById("day2LT");
         forecastCardTempMaxDay2El.textContent = (Math.floor(day2LT));
        // forecastCardTempMaxDay2El.append(Math.floor(day2LT));

         //Day3 forecast weather elements
         const forecastCardDateDay3El = document.getElementById("day3Date");
         forecastCardDateDay3El.textContent = (day3CardDate);
        // forecastCardDateDay3El.append(day3CardDate);

         const forecastCardTempDay3El = document.getElementById("forecastTempDay3");
         forecastCardTempDay3El.textContent = (Math.floor(forecastTempDay3));
        // forecastCardTempDay3El.append(Math.floor(forecastTempDay3));

         const forecastCardWeatherIconDay3El = document.getElementById("forecastWeatherIconDay3");
         forecastCardWeatherIconDay3El.setAttribute('src', `http://openweathermap.org/img/wn/${forecastWeatherIconDay3}@2x.png`);

         const forecastCardTempMinDay3El = document.getElementById("day3HT");
         forecastCardTempMinDay3El.textContent = (Math.floor(day3HT));
        // forecastCardTempMinDay3El.append(Math.floor(day3HT));

         const forecastCardTempMaxDay3El = document.getElementById("day3LT");
         forecastCardTempMaxDay3El.textContent = (Math.floor(day3LT));    
        // forecastCardTempMaxDay3El.append(Math.floor(day3LT));

         //Day4 forecast weather elements
         const forecastCardDateDay4El = document.getElementById("day4Date");
         forecastCardDateDay4El.textContent = (day4CardDate);
        // forecastCardDateDay4El.append(day4CardDate);

         const forecastCardTempDay4El = document.getElementById("forecastTempDay4");
         forecastCardTempDay4El.textContent = (Math.floor(forecastTempDay4));   
        // forecastCardTempDay4El.append(Math.floor(forecastTempDay4));

         const forecastCardWeatherIconDay4El = document.getElementById("forecastWeatherIconDay4");
         forecastCardWeatherIconDay4El.setAttribute('src', `http://openweathermap.org/img/wn/${forecastWeatherIconDay4}@2x.png`);

         const forecastCardTempMinDay4El = document.getElementById("day4HT");
         forecastCardTempMinDay4El.textContent = (Math.floor(day4HT));
        // forecastCardTempMinDay4El.append(Math.floor(day4HT));

         const forecastCardTempMaxDay4El = document.getElementById("day4LT");
         forecastCardTempMaxDay4El.textContent = (Math.floor(day4LT));
        // forecastCardTempMaxDay4El.append(Math.floor(day4LT));

    });
    //current weather data fetch
    fetch(currentWeatherApiUrl).then((response) => response.json()).then((data) => {
        // console.log(data);
        var currentDate = dayjs.utc();
        currentDate= currentDate.local().format('M/D/YYYY');
        var currentTemp = data.main.temp;
        var currentTempFeels = data.main.feels_like;
        var currentTempMin = data.main.temp_min;
        var currentTempMax = data.main.temp_max;
        var weatherDescription = data.weather[0].description;
        var weatherIcon = data.weather[0].icon;
        var weatherIconURL = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
        // console.log("currentDate:", currentDate);
        // console.log("currentTemp:", currentTemp);
        // console.log("currentTempFeels:", currentTempFeels);
        // console.log("currentTempMin:", currentTempMin);
        // console.log("currentTempMax:", currentTempMax);
        // console.log("weatherDescription:", weatherDescription);
        // console.log("weatherIcon:", weatherIcon);
        // console.log("weatherIconURL:", weatherIconURL);

        //creating Current date weather elements
        const currentCardDateEl = document.getElementById("currentDate");
        currentCardDateEl.textContent = (currentDate);
        // currentCardDateEl.append(currentDate);

        const currentCardTempEl = document.getElementById("currentTemp");
        currentCardTempEl.textContent = (Math.floor(currentTemp));
        // currentCardTempEl.append(Math.floor(currentTemp));

        const currentCardWeatherIconEl = document.getElementById("weatherIcon");
        currentCardWeatherIconEl.setAttribute('src', weatherIconURL);

        const currentCardTempMinEl = document.getElementById("currentTempMin");
        currentCardTempMinEl.textContent = (Math.floor(currentTempMin));
        // currentCardTempMinEl.append(Math.floor(currentTempMin));

        const currentCardTempMaxEl = document.getElementById("currentTempMax");
        currentCardTempMaxEl.textContent = (Math.floor(currentTempMax));
        // currentCardTempMaxEl.append(Math.floor(currentTempMax));    
    });
    
}

showMeButton.addEventListener("click", handleShowMeButtonClick);