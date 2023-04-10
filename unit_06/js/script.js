let out = document.querySelector('.out');
// for (let i = 0; i < 5; i++){
//     for (let k = 0; k < 10; k++){
//         out.innerHTML += '*';
//     }
//         out.innerHTML += ' ';
// }

// Запускает первый круг и = 0, выводит звезду, потом запускается внутренний цикл проходит 10 раз, выводит звезду каждый
// потом и = 1 снова запускает внутряк выводит звезды и так 5 раз.

// for (let i = 0; i < 5; i++){
//     for (let k = 0; k < 10; k++){
//         out.innerHTML += k + ' ';
//     }
//         out.innerHTML += '<br>';
// }

for (let i = 1; i < 10; i++){
    // out.innerHTML += '3*' + i + '=' + (i * 3) + '<br>';
    for (let k = 1; k < 10; k++){
        out.innerHTML += `${i} * ${k} = ${i*k} <br>`
    }
    out.innerHTML += '<br>' + '<hr>'
}

