window.addEventListener('storage', function (e) {
    console.log('change');
    document.querySelector('.out-1').innerHTML = localStorage.getItem('b1');
})


localStorage.setItem('data', 5);
console.log(localStorage.getItem('data')); 

const a = [3, 4, 5];
let ls = localStorage;
ls.setItem('a', JSON.stringify(a));
let b = ls.getItem('a');
b = JSON.parse(b);
console.log(b);
console.log(typeof(b));
console.log(b[1]);

const c = {
    'a': 3,
    'b':4,
    'c': 5
};
ls.setItem('c', JSON.stringify(c));
let d = ls.getItem('c');
d = JSON.parse(d);
console.log(d);
console.log(typeof(c));