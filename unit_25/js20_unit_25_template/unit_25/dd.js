function f3() {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', URL + '/api/25/random/generate-password');
    xhr.setRequestHeader('apikey', APIKEY);
    const data = new FormData();
    data.append('length', 20);  //Отправляеться в send(data);
    xhr.onload = function () {
        const data = JSON.parse(xhr.response);
        console.log(data);
    }
    xhr.send(data);
}
f3();