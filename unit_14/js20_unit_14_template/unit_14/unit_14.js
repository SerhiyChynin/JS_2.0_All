const params = {
    "url" : "https://api.openweathermap.org/data/2.5/",
    "appid" : "33c21b2a24e3bccf78b34b4681a5c1c7"
}
const cities = {
    703448 : "Kyiv",
    292223 : "Dubai",
    702550 : "Lviv",
    1726705: "Barcelona",
    2643743 : "London",
    1850147 : "Tokyo",
    2147714 : "Sydney",
    292223 : "Dubai"
} 
const select = document.createElement('select');
select.classList.add('city-name');
    
    for (let key in cities) {
        const option = document.createElement('option');
        option.value = key;
        option.textContent = cities[key];
        select.append(option);        
    }
document.querySelector('.out').prepend(select)

function getWeather() {


    fetch(`${params.url}weather?id=${select.value}&units=metric&APPID=${params.appid}`)
        .then(weather => {
            return weather.json();
        }).then(showWeather);
    }
    
    getWeather();
select.onchange = getWeather;

function showWeather(data) {
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.floor(data.main.temp) + ' &deg';
    document.querySelector('.clouds').innerHTML = data.weather[0].description;
    document.querySelector('.wind').innerHTML = 'wind speed: ' + Math.floor(data.wind.speed) + ' m/s';
    document.querySelector('.pressure').innerHTML = 'pressure: ' + Math.floor(data.main.pressure * 0.75) + ' mm';
    document.querySelector('.icon li').innerHTML = `<img 
    src="https://openweathermap.org/img/w/${data.weather[0].icon}.png">`;
}