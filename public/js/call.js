const buttons = document.querySelectorAll('[data-number]')
let screenInput = document.getElementById('display')

for(let i = 0; i <buttons.length; i++){
    buttons[i].addEventListener('click', function(){
        screenInput.value += this.value;
        console.log('pressed')
    })
}

function show(){
    console.log('1')
}