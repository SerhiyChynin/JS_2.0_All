const params = {
    "url" : "https://api.openweathermap.org/data/2.5/",
    "appid" : "33c21b2a24e3bccf78b34b4681a5c1c7"
}

function getWeather() {
    const cityId = document.querySelector('#city').value;
    fetch(`${params.url}weather?id=${cityId}&units=metric&APPID=${params.appid}`)
        .then(weather => {
            return weather.json();
        }).then(showWeather);
}

getWeather();
document.querySelector('#city').onchange = getWeather;

function showWeather(data) {
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.floor(data.main.temp) + ' &deg';
    document.querySelector('.clouds').innerHTML = data.weather[0].description;
    document.querySelector('.icon li').innerHTML = `<img 
    src="https://openweathermap.org/img/w/${data.weather[0].icon}.png">`;
    console.log(data.weather[0].icon);
}