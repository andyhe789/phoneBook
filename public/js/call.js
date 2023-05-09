class Phone{
    constructor(displayScreen){
        this.displayScreen = displayScreen
        this.displayText = ''
    }

    clear(){
        this.displayText = this.displayText.toString().slice(0,-1)
    }

    appendNumber(number){
        this.displayText = this.displayText.toString() + number.toString()
    }

    conditional(){
        this.displayLength = this.displayText.toString().length
        console.log(this.displayLength)
        switch (this.displayLength){
            case 3:
                 this.displayText += '-'
                 break;
        }
    }
    
    updateDisplay(){
        this.displayScreen.value = this.displayText
    }
}


const numButton = document.querySelectorAll('.numPad')
const backButton = document.querySelector('#backspace')
const callBut = document.querySelectorAll("#callButton")
const displayScreen = document.querySelector('#display')
const backspaceBut = document.querySelector('#backspace')

const phone = new Phone(displayScreen)

numButton.forEach((el)=>{
    el.addEventListener('click', ()=>{
        phone.appendNumber(el.innerText)
        phone.updateDisplay()
        phone.conditional()
    })
})

backButton.addEventListener('click', ()=>{
    phone.clear()
    phone.updateDisplay()
    phone.conditional()
})

