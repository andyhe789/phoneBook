const numButton = document.querySelectorAll('.numPad')
const callBut = document.querySelectorAll("#callButton")
const displayScreen = document.querySelector('#display')
const backspaceBut = document.querySelector('#backspace')
let text = ''

numButton.forEach((el)=>{
    el.addEventListener('click', printNum)
})

callBut.forEach((el)=>{
    el.addEventListener('click', calling)
})

backspaceBut.addEventListener('click', backspaceOne)

function printNum(){
    const contactText = this.dataset.number
    text += contactText
    console.log(text)
    displayScreen.value = text
    return text
}

function backspaceOne(text){
    console.log(text)
}

function calling(){
    console.log('callllll')
}

function test(text){
    console.log(text)
}