var cityinfo = document.createElement('ul')
var population = document.createElement('li')
var elevation = document.createElement('li')
var timeZone = document.createElement('li')
var cityinfo = document.querySelector('.city-info')


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
    event.preventDefault();
    //API Url variables
    var weatherApiKey = "c0fe5b27487172b898ec093746e91718";
    var weatherCityName = searchInputEl.value.trim();
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
    //currentweather variables

    //forecast data fetch
    fetch(forecastWeatherApiUrl).then((response) => response.json()).then((data) => 
    {
        console.log(data);
        cityName = data.city.name;

        var forecastList = data.list;

        for (var i = 0; i < forecastList.length; i++)
        {
            if(i <= 5)
            {
                day1Date = forecastList[i].dt_txt.slice(0, 10);

                if(day1HT < forecastList[i].main.temp_max || day1HT == undefined){
                    day1HT =  forecastList[i].main.temp_max;
                }
                if(day1LT > forecastList[i].main.temp_min || day1LT == undefined){
                    day1LT =  forecastList[i].main.temp_min;
                }

            }
            if(i >= 6 && i <= 13)
            {
                day2Date = forecastList[i].dt_txt.slice(0, 10);

                if(day2HT < forecastList[i].main.temp_max || day2HT == undefined){
                    day2HT =  forecastList[i].main.temp_max;
                }
                if(day2LT > forecastList[i].main.temp_min || day2LT == undefined){
                    day2LT =  forecastList[i].main.temp_min;
                }

            }
            if(i >= 14 && i <= 21)
            {
                day3Date = forecastList[i].dt_txt.slice(0, 10);

                if(day3HT < forecastList[i].main.temp_max || day3HT == undefined){
                    day3HT =  forecastList[i].main.temp_max;
                }
                if(day3LT > forecastList[i].main.temp_min || day3LT == undefined){
                    day3LT =  forecastList[i].main.temp_min;
                }

            }
            if(i >= 22 && i <= 29)
            {
                day4Date = forecastList[i].dt_txt.slice(0, 10);

                if(day4HT < forecastList[i].main.temp_max || day4HT == undefined){
                    day4HT =  forecastList[i].main.temp_max;
                }
                if(day4LT > forecastList[i].main.temp_min || day4LT == undefined){
                    day4LT =  forecastList[i].main.temp_min;
                }

            }
            if(i >= 30&& i <= 37)
            {
                day5Date = forecastList[i].dt_txt.slice(0, 10);

                if(day5HT < forecastList[i].main.temp_max || day5HT == undefined){
                    day5HT =  forecastList[i].main.temp_max;
                }
                if(day5LT > forecastList[i].main.temp_min || day5LT == undefined){
                    day5LT =  forecastList[i].main.temp_min;
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
    fetch(currentWeatherApiUrl).then((response) => response.json()).then((data) => 
    {
        console.log(data);


    });


}

showMeButton.addEventListener("click", handleShowMeButtonClick);

