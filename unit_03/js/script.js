let a = 6;

if (a > 9) {
    console.log('Hello!');
}
else {
    console.log('No Hello!');
}

let input = document.querySelector('.age');
let btn = document.querySelector('button');

btn.onclick = () => {
    if (+input.value >= 16 && +input.value < 100) {
        console.log('Welcom');
    }
    else if (+input.value >= 100) {
        console.log('Crazy!');
    }
    else {
        console.log('not yet!');
    }
    switch (+input.value) {
        case 15:
            console.log('one more');
            break;
        case 16:
            console.log('Welcome again');
            break;
        default:
            console.log('Okey!');
    }
};

let b = 5;

console.log(b > 3 && b < 7 );
