
function one() {
    console.log('Work!');
}
one();

let btn = document.querySelector('.btn');
let btn_2 = document.querySelector('.btn_2');
let btn_3 = document.querySelector('.btn_3');
btn.onclick = one;
console.log(one()); // undefind - функция ничего не возвращает;

function two() {
    console.log('work 222222');
    return 10;
}
two()
console.log(5+two());

let a = 8;
let b = 9;
function multiply() {
    console.log(a*b);
    return a * b;
}
let c = multiply();
let c1 = 10 * multiply();
console.log(c, c1);

function multi(x=10, y=7) {
    return x*y
    
}
console.log(multi(2,5));
console.log(multi(20,5));
console.log(multi(a,5));
console.log(multi(6));

btn_2.onclick = () => {
    console.log('+++++++++++');
}

btn_3.onclick = () => {
    console.log('+_+_+_+_+_+_+_+');
}