let names = document.querySelector('.name');
let price = document.querySelector('.price');
let clouds = document.querySelector('.disclaimer');




fetch('https:api.openweathermap.org/data/2.5/weather?q=Kyiv&appid=33c21b2a24e3bccf78b34b4681a5c1c7')
    .then(function (resp) { return resp.json() })
    .then(function (data) {
        console.log(data.weather);
        document.querySelector('.out').innerHTML = data.name + ' '+ Math.floor(data.main.temp - 273) + '&deg';
        names.innerHTML = data.name;
        price.innerHTML = Math.floor(data.main.temp - 273) + '&deg';
        clouds.innerHTML = data.weather[0].description;
        document.querySelector('.features li').innerHTML = `<img 
        src="https://openweathermap.org/img/w/${data.weather[0].icon}.png">`; //data.weather[0].icon; //https://cdn2.iconfinder.com/data/icons/custom-ios-14-1/60/Weather-512.png
    })
    .catch(function () {
         
    });