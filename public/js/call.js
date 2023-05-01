class Phone{
    constructor(displayScreen){
        this.displayScreen = displayScreen
    }

    clear(){
        this.displayText = ''
    }

    appendNumber(number){
        this.displayText = this.displayText.toString() + number.toString()
        
    }

    updateDisplay(){
        this.displayScreen.value += this.displayText
    }
}


const numButton = document.querySelectorAll('.numPad')
const callBut = document.querySelectorAll("#callButton")
const displayScreen = document.querySelector('#display')
const backspaceBut = document.querySelector('#backspace')

const phone = new Phone(displayScreen)

numButton.forEach((el)=>{
    el.addEventListener('click', ()=>{
        phone.appendNumber(el.innerText)
        phone.updateDisplay()
    })
})

