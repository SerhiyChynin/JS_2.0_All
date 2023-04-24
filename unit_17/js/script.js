
let a = [4, 5, 6, 200, 0, 6, -1];

let b = a.map((item, index, arr) => {
    // console.log(item)
    // console.log(index)
    // console.log(arr)
    return item * 2
});

let c = a.filter(item => item % 2 === 0);

console.log(c);
// console.log(b);