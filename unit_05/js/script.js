
for (let i = 0; i <= 5; i++){
    if (i == 4) break;
    console.log(i);
}

for (let i = 0; i <= 5; i++){
    console.log('***************');
}

let div = document.querySelectorAll('.one');
console.log(div);
// div.style.background = 'orange'; // эта команда получает первый элемент встреченый на страницке и прекращает работу

for (let i = 0; i < div.length; i++){
    div[i].style.background = 'orange';
    div[i].onclick = two;
}

function two() {
    console.log('Hello!');
}

let b = document.getElementsByClassName('one');
let c = document.getElementsByTagName('div');
console.log(b);
console.log(c);

for (let i = 0; i < b.length; i++){
    b[i].style.border = '1px solid black'
}

for (let i = 0; i < c.length; i++){
    c[i].style.border = '3px solid green'
}

document.querySelector('button').onclick = () => {

    let r = document.getElementsByName('r');
    console.log(r);
    for (let i = 0; i < r.length; i++){
        if (r[i].checked) {
           console.log(r[i].value);
       }
    }
}

let out = ''; 
for (let i = 0; i <= 10; i++){
    if (i == 6) continue; // пропуск круга, если i = 6  пропусти этот круг и работай дальше
    out += i + ' ';
    // if (i == 6) break;
}
document.getElementById('out').innerHTML = out;
