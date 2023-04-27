const numButton = document.querySelectorAll('.numPad')
const callBut = document.querySelectorAll("#callButton")
const displayScreen = document.querySelector('#display')
let text = ''

numButton.forEach((el)=>{
    el.addEventListener('click', printNum)
})

callBut.forEach((el)=>{
    el.addEventListener('click', calling)
})

function printNum(){
    const contactText = this.dataset.number
    text += contactText
    console.log(text)
    displayScreen.value = text
}
function calling(){
    console.log('callllll')
}
