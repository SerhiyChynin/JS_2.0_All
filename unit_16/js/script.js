
let ar = [4, 7, 9];
let pS = document.getElementsByTagName('p');
let qP = document.querySelectorAll('p');
console.log(qP);
console.log(pS);
for (let item of pS) {
    console.log(item);
}
// for (let i = 0; i < ar.length; i++){
//     console.log(ar[i]);
// }

// for (let key in ar) {
//     console.log(key);
//     console.log(ar[key]); //доступ к ключам
// }

// for (let item of ar) {
//     console.log(item);     // доступ к значениям сразу
// }


