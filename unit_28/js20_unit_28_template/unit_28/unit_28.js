//  Задания юнита расположены на сайте.

const goods_1 = new Goods('apple', 23.5, 'https://cdn0.iconfinder.com/data/icons/fruity-3/512/Apple-48.png', 400);
console.log(goods_1);

document.querySelector('.out-3').append(goods_1.draw());

const goods_2 = new Goods('lemon', 30, 'https://cdn0.iconfinder.com/data/icons/fruity-3/512/Lemon-48.png', 300);
console.log(goods_2);
document.querySelector('.out-4').append(goods_2.draw());

const goods_3 = new Goods2('strawberry', 50, 'https://cdn0.iconfinder.com/data/icons/fruity-3/512/Strawberry-48.png', 300)
console.log(goods_3);

const goods_4 = new Goods2('apple', 23.5, 'https://cdn0.iconfinder.com/data/icons/fruity-3/512/Apple-48.png', 400, true );
console.log(goods_4);

