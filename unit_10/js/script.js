
// let a = 'Ivan';
// let b = 37;
// let c1 = 'Oven';

// let c = ['Ivan', 37, 'Oven'];
// console.log(c);
// console.log(c[1]);
// for (let i = 0; i < c.length; i++){
//     console.log(c[i]);
// }

// let d = 0;
// while (d < c.length) {
//     console.log(c[d]);
//     d++
// }
// let t = [];

// let zodiac = ['Kozerog', 1, 1, 19];
// let man = ['Ivan', 'male', 185, 90, 'Ivanov'];
// console.log(zodiac);
// console.log(man);
// console.log(zodiac.length);
// console.log(man.length);
// console.log(man[4]);
// man[0] = 'Sergey'
// console.log(man[0]);

let a = [1, 2, 3, 4];
console.log(a);
let b = a[0];
a[0] = a[3]
// a[3] = b;

a[0] = a[a.length - 1];
a[a.length - 1] = b;
console.log(a);
console.log(a[888]);


let out = '';
let d = 0;
while (d < a.length) {
    if (a[d] % 2 === 0) {
    out += a[d]+' ';
}
d++
}
document.querySelector('.out').innerHTML = out;


// min max
let q = [4, 7, 12, 2, 7, 5,102];
let max = q[0];
let min = q[0];
for (let i = 0; i < q.length; i++){
    if (q[i] > max) {
        max = q[i];
    }
    if (q[i] < min) {
        min = q[i];
    }
}

console.log('max: ' + max);
console.log('min: ' + min);

// sum

let sum = 0;

for (let i = 0; i < q.length; i++){
    sum = sum + q[i];    
}
console.log('sum: '+sum);