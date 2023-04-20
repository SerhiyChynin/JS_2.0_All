
let a = new Set();
//Создает новую коллекцию уникальный элементов, проходит строгую проверку и если такой есть то не добавит

a.add(1);
a.add(2);
a.add('Hello');
a.add(1);
a.add('1');
// a.clear();
// a.delete('Hello');
console.log(a);
console.log(a[0]); // set так не работает!!!
console.log(a.length); // no!!! 
console.log(a.size); // кол-во элементов
console.log(a.has(2)); //проверяем есть или нету

for (let item of a) {
    console.log(item);
}

let arr = [1, 2, 'hello', 'go', 3, 4, 3, 2, 2, 3, 1];
let b = new Set(arr); // новый уникальный набор из arr!!!!
console.log(b);

let bArr = Array.from(b);
console.log(bArr);





