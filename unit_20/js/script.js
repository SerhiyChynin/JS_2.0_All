
// document.querySelector('.i-1').onkeypress = (e) => {
//     console.log(e.charCode);
//     console.log(e.code);
//     console.log(e.key);
// }
document.querySelector('.i-1').onkeydown = (e) => {
    console.log(e.charCode);
    console.log(e.code);
    console.log(e.key);
    if (e.key == 'CapsLock') {
        document.querySelector('.ch-1').checked = true;
    }
    else {
        document.querySelector('.ch-1').checked = false;
        
    }

}
document.querySelector('.i-1').onkeyup = (e) => {
    console.log('up');
    console.log(e.charCode);
    console.log(e.code);
    console.log(e.key);
    if (e.key == 'CapsLock') {
        document.querySelector('.ch-1').checked = true;
    }
    else {
        document.querySelector('.ch-1').checked = false;
        
    }

}
document.querySelector('.i-2').onkeypress = (e) => {
    console.log('up');
    console.log(e.charCode);
    console.log(e.code);
    console.log(e.key);
    const a = {
        q: 'w',
        w: 'e'
    }
    document.querySelector('.i-2').value = a[e.key];
    return false;

}
