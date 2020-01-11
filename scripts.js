const weather = {}

function getcity()
{
    var city = document.getElementById("cityname").value;
    getweather(city);
}
function getweather(city)
{   
    var apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2671bd95216beeb2b40e0cca97ec23ba`;
    fetch(apiurl)
    .then(function(response) {
        var data = response.json();
        return data;
    })
    .then(function(data){
        weather.temp = data.main.temp;
        weather.desc = data.weather[0].description;
        weather.lati = data.coord.lat;
        weather.longi = data.coord.lon;
        weather.main = data.weather[0].main;
        weather.pressure = data.main.pressure;
        weather.humidity = data.main.humidity;
    })
    .then(function(){
        displayWeather();
    });

}

function displayWeather()
{
    document.getElementById("lati").innerHTML = weather.lati
    document.getElementById("longi").innerHTML = weather.longi
    document.getElementById("main").innerHTML = weather.main
    document.getElementById("desc").innerHTML = weather.desc
    document.getElementById("temp").innerHTML = weather.temp
    document.getElementById("pressure").innerHTML = weather.pressure
    document.getElementById("humidity").innerHTML = weather.humidity
}


