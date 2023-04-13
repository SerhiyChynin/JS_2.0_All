
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



