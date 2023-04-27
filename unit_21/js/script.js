
document.querySelector('.one').addEventListener('touchstart', (e) => {
    console.log(e);
    console.log('Touch Me');
    document.querySelector('.out-1').innerHTML += 'Touch' + ' ';
    document.querySelector('.out-2').innerHTML = e.touches.length;
});

document.querySelector('.one').addEventListener('touchend', (e) => {
    console.log(e);
    console.log('End');
    document.querySelector('.out-1').innerHTML += 'End' + ' ';
});
document.querySelector('.two').addEventListener('touchmove', (e) => {
    console.log(e);
    console.log('Move');
    document.querySelector('.out-1').innerHTML += 'Move' + ' ';
});