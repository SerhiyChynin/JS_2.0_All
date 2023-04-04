document.querySelector('button').onclick = myFunc;

function myFunc() {
    console.log(document.querySelector('.one').value);    
    document.querySelector('button').style.background = document.querySelector('.one').value;
}

document.querySelector('.one').oninput = () => {
     console.log(document.querySelector('.one').value); 
    document.querySelector('span').innerHTML = document.querySelector('.one').value;
}


document.querySelector('#btn-1').onclick = () => {
    console.log(document.querySelector('#i-2').value); 
    let checkBox = document.querySelector('#i-2');
    console.log(checkBox.checked);
    if (checkBox.checked) {
        console.log('Working');
    }
    else {
        console.log('not working');
    }
}

document.querySelector('#btn-2').onclick = (event) => { 
    event.preventDefault();
    // console.log(document.querySelector('#i-3').value); 
    // document.querySelector('#i-3').value = 'orange';
    let form = document.querySelector('form');
    console.log(form.elements.i3.value);
    console.log(form.elements.i4.value);
}