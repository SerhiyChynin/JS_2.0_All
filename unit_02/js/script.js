let a = 6;
let b = 'Hello';
// console.log(a);

let input = document.querySelector('input.input-in');
let btn = document.querySelector('button');
let out = document.querySelector('.out');

btn.onclick = function () {
    let b = input.value; // + приеобразовывает строку в число
    console.log(b*2);
    console.log(b + 10); // '55' + 10 = 5510; js принимает значение в виде строки а не числа
    out.innerHTML = b;
    input.value = '';
};
