
let a = 5;
a = a * 2;
try {

    document.querySelector('.out-11').innerHTML = a;
}
catch (err) {
    console.log(err);
    console.log(1);
}
finally {
    console.log('Work!');
}
console.log(a);
t1();
function t1() {
    console.log('Hello');
}