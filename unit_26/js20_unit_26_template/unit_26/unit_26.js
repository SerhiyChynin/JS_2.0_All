// ВНИМАНИЕ!!! Не пишите apikey в тасках напрямую. Применяйте константу APIKEY (задать ее значение можно в файле config.js).

// Task 1
// При нажатии кнопки .b-1, срабатывает функция f1. Функция отсылает запрос методом FETCH на https://api.itgid.info со следующими параметрами:
// url: /api/26/employee/read
// method: GET

// Результат - объект со списком сотрудников. Выведите в out-1 возраст сотрудников через пробел.
// не забывайте для авторизации отправлять apikey с указанным ключом.

async function f1() {
    let out = '';
    const requestHeader = new Headers();
    requestHeader.append('apikey', APIKEY);
    let data = await fetch(`${URL}/api/26/employee/read`, {
        method: 'GET',
        headers: requestHeader
    })
    const res = await data.json();
    for (let key in res.result) {
        out += res.result[key].age + ' ';
    }
    document.querySelector('.out-1').innerHTML = out;
   
}

document.querySelector('.b-1').addEventListener('click', f1);


// Task 2
// При нажатии кнопки .b-2, срабатывает функция f2. Функция отсылает запрос методом FETCH на https://api.itgid.info со следующими параметрами:
// url: /api/26/employee/read?id=3
// method: GET
// в качестве query параметра задайте id равный числу из input .i-2

// Результат - объект с описанием сотрудника. Выведите в out-2 email полученного сотрудника.



async function f2() {
    let i_2 = +document.querySelector('.i-2').value;
    const rH = new Headers();
    rH.append('apikey', APIKEY);
    let data = await fetch(`${URL}/api/26/employee/read?id=${i_2}`, {
        method: "GET",
        headers: rH
    });
    let res = await data.json();
    document.querySelector('.out-2').innerHTML = res.result.email;
   
}

document.querySelector('.b-2').onclick = f2;


// Task 3
// При нажатии кнопки .b-3 срабатывает функция f3. Функция отсылает запрос методом FETCH на https://api.itgid.info со следующими параметрами:
// /api/26/employee/read/5
// method: POST
// число 5 получите из input .i-3

// Результат - объект с описанием сотрудника. Выведите в out-3 name полученного сотрудника.

async function f3(){
    let i_3 = +document.querySelector('.i-3').value;
    const rH = new Headers();
    rH.append('apikey', APIKEY);
    let data = await fetch(`${URL}/api/26/employee/read/${i_3}`, {
        method: 'POST',
        headers: rH
    })
    let res = await data.json();
    document.querySelector('.out-3').innerHTML = res.result.name;
}

document.querySelector('.b-3').onclick = f3;


// Task 4. 
// При нажатии кнопки .b-4 срабатывает функция f4. Функция отсылает запрос методом FETCH на https://api.itgid.info со следующими параметрами:
// url: /api/26/sr/read
// method: POST

// Результат - объект с описанием рас игры КР. Выведите в out-4 название рас (title) через пробел.


async function f4() {
    let out = '';
    const rH = new Headers();
    rH.append('apikey', APIKEY);
    let data = await fetch(`${URL}/api/26/sr/read`, {
        method: 'POST',
        headers: rH
    })
    let res = await data.json();
    for (let key in res.result) {
        out += res.result[key].title + ' ';
    }
    document.querySelector('.out-4').innerHTML = out;
   
}

document.querySelector('.b-4').onclick = f4;

// Task 5. 
// При нажатии кнопки .b-5 срабатывает функция f5. Функция отсылает запрос методом FETCH на https://api.itgid.info со следующими параметрами:
// url: /api/26/sr/read?race=gaal
// method: GET
// где gaal - название расы полученное из select .s-5

// Результат - объект с описанием указанной расы. Выведите в out-5 описание расы (description). Вывод осуществляйте через innerHTML.


async function f5(){
    let s_5 = document.querySelector('.s-5').value;
    let rH = new Headers();
    rH.append('apikey', APIKEY);
    let data = await fetch(`${URL}/api/26/sr/read?race=${s_5}`, {
        method: 'GET',
        headers: rH
    })
    const res = await data.json();
    document.querySelector('.out-5').innerHTML = res.result.description;
}

document.querySelector('.b-5').onclick = f5;


// Task 6.
// При нажатии кнопки .b-6 срабатывает функция f6. Функция отсылает запрос методом FETCH на https://api.itgid.info со следующими параметрами:
// url: /api/26/run
// method: GET
// поскольку такого адреса в API не предусмотрено, то сервер должен вернуть ошибку 404
// выведите статус ответа сервера в .out-6-status

async function f6(){
    const rH = new Headers();
    rH.append('apikey', APIKEY);
    const data = await fetch(`${URL}/api/26/run`, {
        method: 'GET',
        headers: rH
    })
    document.querySelector('.out-6-status').innerHTML = data.status;
}

document.querySelector('.b-6').onclick = f6;

// Task 7.
// При нажатии кнопки .b-7 срабатывает функция f7. Функция отсылает запрос методом FETCH на https://api.itgid.info со следующими параметрами:
// url: /api/26/sr/read/human
// method: POST
// human - название расы из select .s-7

// Результат - объект с описанием указанной расы. Выведите в out-7 изображение расы. Картинку формируйте через createElement. 
// В начале функции делайте очистку .out-7.


async function f7() {
    document.querySelector('.out-7').innerHTML = '';
    let s_7 = document.querySelector('.s-7').value;
    const rH = new Headers();
    rH.append('apikey', APIKEY);
    const data = await fetch(`${URL}/api/26/sr/read/${s_7}`, {
        method: 'POST',
        headers: rH
    })
    const res = await data.json();
    let img = document.createElement('img');
    img.src = `${URL}${res.result.image}`;
    document.querySelector('.out-7').append(img);
}

document.querySelector('.b-7').onclick = f7;

// Task 8.
// При нажатии кнопки .b-8 срабатывает функция f8. Функция отсылает запрос методом FETCH на https://api.itgid.info со следующими параметрами:
// url: /api/26/random/random-number
// method: GET
// если запрос отправлен верно, то будет получен объект со случайным числом
// выведите в .out-8 данное число.

async function f8() {
    const requestHeaders = new Headers();
    requestHeaders.append('apikey', APIKEY);
    const data = await fetch(`${URL}/api/26/random/random-number`, {
        method: 'GET',
        headers: requestHeaders
    })
    let res = await data.json();
    document.querySelector('.out-8').innerHTML = res['random-number'];
    
}

document.querySelector('.b-8').onclick = f8;

// Task 9
// При нажатии кнопки .b-9 срабатывает функция f9. Функция отсылает запрос методом FETCH на https://api.itgid.info со следующими параметрами:
// url: /api/26/random/random-number?min=100&max=110
// method: GET
// где min - число из переменной min. Max - число из переменной max.

// если запрос отправлен верно, то будет получен объект со случайным число от min до max.
// выведите число в .out-9

let min = 400;
let max = 500;

async function f9() {
    let rH = new Headers();
    rH.append('apikey', APIKEY);
    let data = await fetch(`${URL}/api/26/random/random-number?min=${min}&max=${max}`, {
        method: 'GET',
        headers: rH
    });
    let res = await data.json();
document.querySelector('.out-9').innerHTML =  res['random-number'];  
}

document.querySelector('.b-9').onclick = f9;

// Task 10
// При нажатии кнопки .b-10 срабатывает функция f10. Функция отсылает запрос методом FETCH на https://api.itgid.info со следующими параметрами:
// url: /api/26/random/random-number
// method: POST
// в теле POST запроса передайте параметры min равные переменной min и max равное переменной max. Формат - formdata.

// если запрос отправлен верно, то будет получен объект со случайным число от min до max.
// выведите число в .out-10

async function f10() {
    const rH = new Headers();
    rH.append('apikey', APIKEY);
    const formData = new FormData();
    formData.append('min', min);
    formData.append('max', max);
    const data = await fetch(`${URL}/api/26/random/random-number`, {
        method: 'POST',
        headers: rH,
        body: formData
    })
    let res = await data.json();
    document.querySelector('.out-10').innerHTML = res['random-number'];
    
}

document.querySelector('.b-10').onclick = f10;

// Task 11
// При нажатии кнопки .b-11 срабатывает функция f11. Функция отсылает запрос методом FETCH на https://api.itgid.info со следующими параметрами:
// url: /api/26/random/random-string?length=16
// method: GET
// Значение длины строки получаем из input .i-11

// Если запрос сделан правильно, то сервер возвратит объект с строкой случайных символов длиной 16.
// Выведите строку в .out-11

async function f11() {
    const i_11 = +document.querySelector('.i-11').value;
    const rH = new Headers();
    rH.append('apikey', APIKEY);
    const data = await fetch(`${URL}/api/26/random/random-string?length=${i_11}`, {
        method: 'GET',
        headers: rH
    })
    let res = await data.json();
    document.querySelector('.out-11').innerHTML = res['random-string'];
}

document.querySelector('.b-11').onclick = f11;

// Task 12
// При нажатии кнопки .b-12 срабатывает функция f12. Функция отсылает запрос методом FETCH на https://api.itgid.info со следующими параметрами:
// url: /api/26/random/generate-password
// method: POST
// укажите в body POST запроса аргумент length равный числу из input .i-12 (form-data) 
// укажите в body POST запроса аргумент symbols равный 0 или 1, данные берем из состояния checkbox .ch-12
// если запрос отправлен верно, то будет возвращен пароль длиной равный указанной длине и если указан symbols равный 1 то в пароле будут спецсимволы
// выведите в .out-12 полученный пароль.



async function f12(){
    const rH = new Headers();
    rH.append('apikey', APIKEY);
    let ch_12 = document.querySelector('.ch-12');
    let i_12 = +document.querySelector('.i-12').value;
    if (ch_12.checked) {
        ch_12 = 1;
    }
    else {
        ch_12 = 0;
    }
    const formData = new FormData();
    formData.append('length', i_12);
    formData.append('symbols', ch_12);
    const data = await fetch(`${URL}/api/26/random/generate-password`, {
        method: 'POST',
        headers: rH,
        body:   formData
    })
    let res = await data.json();
    document.querySelector('.out-12').innerHTML = res.password;
}

document.querySelector('.b-12').onclick = f12;

// Task 13
// При нажатии кнопки .b-13 срабатывает функция f13. Функция отсылает запрос методом FETCH на https://api.itgid.info со следующими параметрами:
// url: /api/26/random/generate-password
// method: POST
// укажите в body POST запроса аргумент length равный числу из input .i-13 (form-data) 
// укажите в body POST запроса аргумент symbols равный 0 или 1, данные берем из состояния checkbox .ch-131
// укажите в body POST запроса аргумент uppercase равный 0 или 1, данные берем из состояния checkbox .ch-132
// если запрос отправлен верно, то будет возвращен пароль длиной равный указанной длине и если указан symbols равный 1 то в пароле будут спецсимволы, и аналогично если uppercase равен 1 то будут символы в разных регистрах.
// выведите в .out-13 полученный пароль.


// не забывайте для авторизации отправлять apikey с указанным ключом.

async function f13(){
    const rH = new Headers();
    rH.append('apikey', APIKEY);
    let ch_131 = document.querySelector('.ch-131');
    let ch_132 = document.querySelector('.ch-132');
    let i_13 = +document.querySelector('.i-13').value;
    if (ch_131.checked) {
        ch_131 = 1;
    }
    else {
        ch_131 = 0;
    }
    if (ch_132.checked) {
        ch_132 = 1;
    }
    else {
        ch_132 = 0;
    }
    const formData = new FormData();
    formData.append('length', i_13);
    formData.append('symbols', ch_131);
    formData.append('uppercase', ch_132);
    const data = await fetch(`${URL}/api/26/random/generate-password`, {
        method: 'POST',
        headers: rH,
        body:   formData
    })
    let res = await data.json();
    document.querySelector('.out-13').innerHTML = res.password;
}

document.querySelector('.b-13').onclick = f13;


// Task 14
// При нажатии кнопки .b-14 срабатывает функция f14. Функция отсылает запрос методом FETCH на https://api.itgid.info со следующими параметрами:
// url: /api/26/gow/world
// method: GET
// если все сделано верно, то получите объект с описанием миров игры GoW
// выведите в .out-14 title миров через пробел. 

async function f14() {
    let out = '';
    const rH = new Headers();
    rH.append('apikey', APIKEY);
    let data = await fetch(`${URL}/api/26/gow/world`, {
        method: 'GET',
        headers: rH
    })
    let res = await data.json();
    for (let key in res.worlds) {
        out += res.worlds[key].title + ' ';
    }
    document.querySelector('.out-14').innerHTML = out;
}

document.querySelector('.b-14').onclick = f14;


// Task 15
// При нажатии кнопки .b-15 срабатывает функция f15. Функция отсылает запрос методом FETCH на https://api.itgid.info со следующими параметрами:
// url: /api/26/gow/world/niflheim
// method: GET
// где niflheim - название мира полученное из .s-15
// выведите описание мира (description) в out-15

async function f15(){
    let s_15 = document.querySelector('.s-15').value;
    const rH = new Headers();
    rH.append('apikey', APIKEY);
    let data = await fetch(`${URL}/api/26/gow/world/${s_15}`, {
        method: 'GET',
        headers: rH
    })
    let res = await data.json();
    document.querySelector('.out-15').innerHTML = res.world.description;
}


document.querySelector('.b-15').onclick = f15;

// Task 16
// При нажатии кнопки .b-16 срабатывает функция f16. Функция отсылает запрос методом FETCH на https://api.itgid.info со следующими параметрами:
// url: /api/26/gow/governor/сурт
// method: GET
// имя правителя - получите из select .s-16
// если все сделано верно, то получите объект с описанием мира где правитель Сурт игры GoW. 
// выведите в .out-16 руну данного мира. Как изображение (createElement). Очищайте out-16 в начале функции.

async function f16(){
    document.querySelector('.out-16').innerHTML = '';
    let s_16 = document.querySelector('.s-16').value;
    const rH = new Headers();
    rH.append('apikey', APIKEY);
    let data = await fetch(`${URL}/api/26/gow/governor/${s_16}`, {
        method: 'GET',
        headers: rH
    })
    let res = await data.json();
    let img = document.createElement('img');
    img.src = `${URL}${res.world.rune}`
    document.querySelector('.out-16').append(img);
}


document.querySelector('.b-16').onclick = f16;


// Task 17
// При нажатии кнопки .b-17 срабатывает функция f17. Функция отсылает запрос методом FETCH на https://api.itgid.info со следующими параметрами:
// url: /api/26/get-time
// method: POST
// если все сделано верно, то получите объект с текущим временем сервера.
// выведите в .out-17 время в формате час:минуты

async function f17(){
    const rH = new Headers();
    rH.append('apikey', APIKEY);
    const data = await fetch(`${URL}/api/26/get-time`, {
        method: 'POST',
        headers: rH
    })
    const res = await data.json();
    document.querySelector('.out-17').innerHTML = `${res.time.h}:${res.time.m}`;
}


document.querySelector('.b-17').onclick = f17;


// Task 18
// При нажатии кнопки .b-18 срабатывает функция f18. Функция отсылает запрос методом FETCH на https://api.itgid.info со следующими параметрами:
// url: /api/26/gow/rune
// method: POST
// если все сделано верно, то получите объект с названиями миров и рунами
// выведите в .out-18 руны как изображения, а в качестве атрибута alt установите название мира. 
// выполните очистку .out-18 в начале функции

async function f18(){
    document.querySelector('.out-18').innerHTML = '';
    let out = '';
    const rH = new Headers();
    rH.append('apikey', APIKEY);
    const data = await fetch(`${URL}/api/26/gow/rune`, {
        method: 'POST',
        headers: rH
    })
    const res = await data.json();
    for (let key in res.rune) {
        out += `<img src="${URL}${res.rune[key]}" alt="${key}">`
    }
    document.querySelector('.out-18').innerHTML = out;
}


document.querySelector('.b-18').onclick = f18;
