class Phone{
    constructor(displayScreen){
        this.displayScreen = displayScreen
        this.displayText = ''
    }

    clear(){
        this.displayText = this.displayText.toString().slice(0,-1)
        if(this.displayLength == 4){
            this.displayText = this.displayText.toString().slice(0,-1)
        }
    }

    appendNumber(number){
        this.displayText = this.displayText.toString() + number.toString()
    }

    phoneFormat(){
        this.displayLength = this.displayText.toString().length
        console.log(this.displayLength)
        if(this.displayLength > 4 && this.displayLength < 8 && this.displayText.includes('-') === false){
            this.displayText = this.displayText.slice(0,3) + '-' + this.displayText.slice(3,6)
            console.log(this.displayText.includes('-'))
        }
        // else if(this.displayLength >= 8){
        //     this.displayText = '(' + this.displayText.slice(0,3) +')' + this.displayText.slice(3,6) + '-' 
        // }
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
        phone.phoneFormat()
    })
})

backButton.addEventListener('click', ()=>{
    phone.clear()
    phone.updateDisplay()
    phone.phoneFormat()
})

