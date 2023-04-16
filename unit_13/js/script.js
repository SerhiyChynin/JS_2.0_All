
let a = {
    a: 5,
    b: 'hello',
    z2: 'hi',
    'villa de': 'haha'
}

delete a.a
console.log(a.z2);
let k = 'b';
a.z2 = 0;
a.ddd = 777;
console.log(a[k]);
console.log(a);
// document.querySelector('.out').innerHTML = a;

let out = '';
for (let key in a) {
    out += key +': ' + a[key] +'; ' + '<br>';
}
document.querySelector('.out').innerHTML = out;
