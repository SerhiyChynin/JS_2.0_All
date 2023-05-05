function f1(m, cl, d) {
    
    let c = `<p class="${cl}">${m}</p>`
    document.querySelector(d).innerHTML = c ;
}
f1('Hello World!', 'bg-orange', '.test')
f1('Hello World!', 'yg', '.test2')


let proto = new F1('Message', 'bg-orange', '.test' );
console.log(proto);
proto.showAlert()
let proto2 = new F2('Message', 'yg', '.test2', `check_box`);
console.log(proto2);
proto2.showIcon();


let div = document.createElement('div');
div.classList.add('out3');
div.classList.add('yg');
div.innerHTML = 'Hello World!!!!!';
document.querySelector('.test2').append(div);
