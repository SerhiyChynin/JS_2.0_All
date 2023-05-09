function f1() {
    let a = 0;
    return function() {
        a = a + 1;
        return a;
    }
}

let b = f1();
let c = f1();
console.log(c());
console.log(b);
console.log(b());
console.log(b());
console.log(b());
