document.querySelector('.one').onclick = function (event){
    console.log(event);
    console.log('one');
}

document.querySelector('.two').onclick = function (){
    console.log('two');
}

document.querySelector('.two').ondblclick = function () {
    console.log('dblclick');
}

document.querySelector('.two').oncontextmenu = function () {
    console.log('right button');
    return false;
}
// let w = 100;
// document.querySelector('.three').onmousemove = function () {
//     document.querySelector('.three').style.width = w + 'px';
//     w++;
//     console.log('+');
// }

document.querySelector('.three').onmouseenter = function () {
    document.querySelector('.three').style.background = 'greenyellow';
    console.log(1);

}
document.querySelector('.three').onmouseleave = function () {
    document.querySelector('.three').style.background = 'yellow';
    console.log(2);
}
document.querySelector('.three').onmousedown = function () {
    document.querySelector('.three').style.background = 'grey';
    console.log(3);
}
document.querySelector('.three').onmouseup = function () {
    document.querySelector('.three').style.background = 'brown';
    console.log(3);
}
let p = 10;
document.querySelector('button').onclick = function (event) {
    document.querySelector('progress').value = p;
    p++
}

