// DOM - Document Object Model — «объектная модель документа»

const one = document.querySelector('.one');
one.style.width = '150px'; 
one.style.paddingBottom = '50px'; 
// one.style.background = 'orange'; 
// console.log(one.style);
one.classList.add('two', 'three'); // добавляем классы
one.classList.remove('two'); // удаляем классы
one.onclick = function () {
    this.classList.toggle('two');
}

const toggle = document.querySelector('.toggle');
toggle.onclick = function() {
    this.classList.toggle('three');
}

// атрибути

console.log(one.getAttribute('data'));
console.log(document.querySelector('link').getAttribute('href'));

one.setAttribute('data-num', 6);

let gas = document.querySelectorAll('.gas');
let out = document.querySelector('.out');
 
for (let i = 0; i < gas.length; i++){
    gas[i].onclick = () => {
        let gallons = document.querySelector('.gallons').value;
        let res = gas[i].getAttribute('data') * gallons;
        out.innerHTML = `${gas[i].innerHTML}: ${res}`;
        out.classList.add('two')
    }
}

let a = document.createElement('div');
a.innerHTML = 'Hello';
a.classList.add('two');
a.onclick = () => {
    alert('Hello')
}
console.log(a);
document.querySelector('.test').appendChild(a)



const base = document.querySelector('.base');

//Append
let div = document.createElement('div');
div.textContent = 'Append';
div.classList.add('twoo');
base.append(div); // появляется после елементов внутри родителя

//prepend
let div1 = document.createElement('div');
div1.textContent = 'Prepend';
div1.classList.add('twoo');
base.prepend(div1); // появляеться перед елементами внутри родителя

//before
let div2 = document.createElement('div');
div2.textContent = 'Before';
div2.classList.add('twoo');
base.before(div2); // появляется перед родителем

//after
let div3 = document.createElement('div');
div3.textContent = 'After';
div3.classList.add('twoo');
base.after(div3); // появляется после родителя

//replaceWith
let div4 = document.createElement('div');
div4.textContent = 'Replace';
div4.classList.add('twoo');
// base.replaceWith(div4); // заменяет див в котором находиться

// div4.remove(); // убирает элемент из ДОМ
// div3.remove();
// div2.remove();




