const numButton = document.querySelectorAll('.numPad')
const callBut = document.querySelectorAll("#callButton")

numButton.forEach((el)=>{
    el.addEventListener('click', printNum)
})

callBut.forEach((el)=>{
    el.addEventListener('click', calling)
})

function printNum(){
    const contactID = this.dataset.number
    console.log(contactID)
}
function calling(){
    console.log('callllll')
}
