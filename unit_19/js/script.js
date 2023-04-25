document.querySelector('.one').onclick = function (event){
    console.log(event);
    console.log('one');
}

document.querySelector('.two').onclick = function (){
    console.log('two');
}

document.querySelector('.two').ondblclick = function () {
    console.log('dblclick');
}

document.querySelector('.two').oncontextmenu = function () {
    console.log('right button');
    return false;
}
// let w = 100;
// document.querySelector('.three').onmousemove = function () {
//     document.querySelector('.three').style.width = w + 'px';
//     w++;
//     console.log('+');
// }

document.querySelector('.three').onmouseenter = function () {
    document.querySelector('.three').style.background = 'greenyellow';
    console.log(1);

}
document.querySelector('.three').onmouseleave = function () {
    document.querySelector('.three').style.background = 'yellow';
    console.log(2);
}
document.querySelector('.three').onmousedown = function () {
    document.querySelector('.three').style.background = 'grey';
    console.log(3);
}
document.querySelector('.three').onmouseup = function () {
    document.querySelector('.three').style.background = 'brown';
    console.log(3);
}
let p = 10;
document.querySelector('button').onclick = function (event) {
    document.querySelector('progress').value = p;
    p++
}



function f1() {
    console.log(1);
}
function f2() {
    console.log(2);
}
function f3() {
    console.log(3);
}
function f4() {
    console.log(4);
}

const b1 = document.querySelector('button.one');
const b2 = document.querySelector('button.two');

// добавление события================

// b1.onclick = f1;
// b2.addEventListener('click', f2);

//добавление двух событий на одну кнопку============

// b1.onclick = function () {
//     f1();
//     f3();
// }
// b2.addEventListener('click', f2);
// b2.addEventListener('click', f4);

// b1.onclick = f1;
// b1.addEventListener('click', f2);
// b1.addEventListener('click', f3);

//удаление событие ===================

// b1.onclick = function () {
//     f1();
//     f3();
// };
// b1.onclick = null;

// b2.addEventListener('click', f2);
// b2.addEventListener('click', f4);
// b2.removeEventListener('click', f2);
// b2.addEventListener('click', f2);

//запуск события один раз

// b1.onclick = () => {
//     f1()
//     b1.onclick = null;
// };

// b2.addEventListener('click', f2, {
//     once: true
// });

// удаление всех событий

// b1.onclick = () => {
//     f1();
//     f3();
// }
// b1.onclick = null;

// b2.addEventListener('click', f2);
// b2.addEventListener('click', f4);
// // b2.removeEventListener('click');

//анонимные функции

b1.onclick = () => {
    f1();
}
b1.onclick = null;

b2.addEventListener('click', () => {
    f2();
})

b2.removeEventListener('click', () => {
    f2();
})
