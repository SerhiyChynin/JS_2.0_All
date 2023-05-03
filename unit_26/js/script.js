

async function getWeather() {
    let a = await fetch(`${params.url}weather?id=${params['cityId']}&units=metric&APPID=${params.appid}`)
    console.log(a);
    const result = await a.json();
    console.log(result);
    console.log(1);
        // .then(weather => {
        //     return weather.json();
        // })
        // .then(data => {
        //     console.log(data);
        // })
        //.then(showWeather);
    }
    
    // getWeather();
async function f1() {
    const requestHeaders = new Headers();
    requestHeaders.append('apikey', APIKEY)
    const res = await fetch(`${URL}/api/26/employee/read`, {
        method: 'GET',
        headers: requestHeaders
    });
    // if (!res.ok) {
    //     const message = 'Error' + response.status;
    //     throw new (message);
    // }
    const data = await res.json();
    console.log(data);
}
f1();

async function f2() {
    const requestHeaders = new Headers();
    requestHeaders.append('apikey', APIKEY)
    const formData = new FormData();
    formData.append('length', 40);
    formData.append('symbols', 1);
    const data = await fetch(`${URL}/api/26/random/generate-password`, {
        method: 'POST',
        headers: requestHeaders,
        body: formData
    })
    const res = await data.json();
    console.log(res);
}
f2();