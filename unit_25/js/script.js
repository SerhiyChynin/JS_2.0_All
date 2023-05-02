function f1() {
    // 1. обьект запроса
    const xhr = new XMLHttpRequest();
    // 2. куда посылаем и параметры
    xhr.open('GET', 'https://api.openweathermap.org/data/2.5/weather?id=292223&units=metric&APPID=33c21b2a24e3bccf78b34b4681a5c1c7');
    // 3. как обрабатываем ответ от сервера
    xhr.onload = function () {
        console.log((xhr.status));
        console.log((xhr.response));
        const data = JSON.parse(xhr.response);
        console.log(data);
    }
    // 4. посфлаем запрос
    xhr.send();
}
// f1();

function f2() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.itgid.info/api/25/employee/read');
    xhr.setRequestHeader('apikey', 'ObEzqRmgSvy0Wcny');
    xhr.onload = function () {
        const data = JSON.parse(xhr.response)
        console.log(data);
    }
    xhr.send();
}
// f2();

function f3() {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', URL + '/api/25/random/generate-password');
    xhr.setRequestHeader('apikey', APIKEY);
    const data = new FormData();
    data.append('length', 20);  //Отправляеться в send(data);
    const upCase = new FormData();
    upCase.append('uppercase', 1);
    xhr.onload = function () {
        const data = JSON.parse(xhr.response);
        console.log(data);
    }
    xhr.send(data, upCase);
}
f3();