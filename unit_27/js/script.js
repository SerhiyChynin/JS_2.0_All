
const p1 = new Promise(function () {
    
    
});
// console.log(p1);

// const p2 = new Promise((resolve, reject) => {
//     // fetch(`https://gipogiz.ua`)
//         fetch(`${URL}/api/delay`)
//         .then(response => {
//             // console.log(response);
//             if (response.ok) resolve(response.json());
//             else reject(response);
//         })
//         .catch(error => reject(error));
// });

// p2.then(f1, f2);

// function f1(data) {
//     console.log(data);
//     console.log(p2);
//     console.log('success');
// }

// function f2() {
//     console.log(p2);
//     console.log('error');
// }
// console.log(p2);
// console.log(`==========================`);

// chain promise

// fetch(`${URL}/api/delay`)
//     .then(response => {
//     return response.json();
// })
//     .then(data => {
//         console.log(data);
//         return fetch(`${URL}/api/test`)
//     })
//     .then(response => {
//         return response.json();
//     })
//     .then(data => {
//         console.log(data);
//     });

// practice chain promise

function chain(){
    const rH = new Headers();
    rH.append('apikey', APIKEY);
    fetch(`${URL}/api/27/random/random-number?min=1&max=10`, {
        method: 'GET',
        headers: rH
        })
        .then(response => {
            return response.json();
        })
        .then(data => {
        console.log(data[`random-number`]);
        return (fetch(`${URL}/api/27/employee/read?id=${data[`random-number`]}`, {
            method: 'GET',
            headers: rH
        })
        )
    })
        .then(response => {
        console.log(response);
        return response.json();
            })    
        .then(data => {
        console.log(data.result.name);
            })
}
chain();
// async function chain() {
//   const rH = new Headers();
//   rH.append('apikey', APIKEY);
//   try {
//     const response1 = await fetch(`${URL}/api/27/random/random-number?min=1&max=10`, {
//       method: 'GET',
//       headers: rH
//     });
//     const data1 = await response1.json();
//     const response2 = await fetch(`${URL}/api/27/employee/read?id=${data1['random-number']}`, {
//       method: 'GET',
//       headers: rH
//     });
//     const data2 = await response2.json();
//     console.log(data2.result.name);
//   } catch (error) {
//     console.log(error);
//   }
// }
// chain();

async function chain2(){
    const rH = new Headers();
    rH.append('apikey', APIKEY);
    let res = await fetch(`${URL}/api/27/random/random-number?min=1&max=10`, {
        method: 'GET',
        headers: rH
        })
    const data = await res.json();
    const res2 = await fetch(`${URL}/api/27/employee/read?id=${data[`random-number`]}`, {
            method: 'GET',
            headers: rH
        })
        const data2 = await res2.json()
        console.log(data2.result.name);
    
    }  
chain2();

// Promise All паралельные запросы;

// const p3 = new Promise((resolve, reject) => {
//     fetch(`${URL}/api/test`)
//         .then(data => resolve(data.json()));
    
// });
// const p4 = new Promise((resolve, reject) => {
//     fetch(`${URL}/api/delay`)
//         .then(data => resolve(data.json()));
// });

// const p5 = new Promise((resolve, reject) => {
//     fetch(`${URL}/api/test`)
//         .then(data => resolve(data.json()));
    
// });
// const p6 = new Promise((resolve, reject) => {
//     fetch(`${URL}/api/delay`)
//         .then(data => resolve(data.json()));
// });

// Promise.all([p3, p4, p5, p6]).then(data => {
//     console.log(data);
// });