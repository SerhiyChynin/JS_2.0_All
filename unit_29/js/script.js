function f1() {
    let a = 0;
    return function() {
        a = a + 1;
        return a;
    }
}

let b = f1();
let c = f1();
// console.log(c());
// console.log(c());
// console.log(c());
// console.log(c());
// console.log(b());
// console.log(b());
// console.log(b());

let a = 0;
function rec() {
    a++;
    console.log(a);
    if (a > 10) return a = 0;
    rec();
}
if (a === 0) {
    
    rec()
}
console.log(a);

let n = 0;
function move() {
    
    document.querySelector('.out').style.left = n + 'px';
    n = n + 10;
    if (n >= 500) return n;
    setTimeout(move, 100)
    
}
document.querySelector('button').onclick = move;

