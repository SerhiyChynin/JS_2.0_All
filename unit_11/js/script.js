let a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
 
let b = ['a', 'b', 'c', 'd', 'f'];

console.log(a);
console.log(a.length);
console.log( a.push(10,11,22,33));
console.log(a);
b.push('jango', 'hello')
b.pop();
console.log(b);

delete a[3];
console.log(a);

a.splice(3,3, 'hi') // вырезает эелемнт внутри массива первый параметр с какого индекса второй сколько индексов, третий добавляет элементы на место вырезаных
console.log(a);

//shift unshift 
