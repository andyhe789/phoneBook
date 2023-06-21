class Phone{
    constructor(displayScreen){
        this.displayScreen = displayScreen
        this.displayText = ''
    }

    clear(){
        this.displayText = this.displayText.toString().slice(0,-1)
        // if(this.displayLength == 5){
        //     this.displayText = this.displayText.replace('-','')
        // }
    }

    appendNumber(number){
        this.displayText = this.displayText.toString() + number.toString()
    }

    phoneFormat(){
        this.displayLength = this.displayText.toString().length
        let specialCharacters = '( ) -'
        console.log(this.displayLength)
        if(this.displayLength <= 3){
            this.displayText = this.displayText.slice(0,3)
            
        }
        if(this.displayLength == 3 && this.displayText.includes('-') === true){
            this.displayText = this.displayText.replace('-','')
        }
        if(this.displayLength > 3 && this.displayLength < 8 && this.displayText.includes('-') === false){
            this.displayText = this.displayText.slice(0,3) + '-' + this.displayText.slice(3,6)
            console.log('run')
        }
        if(this.displayLength >= 8 && this.displayText.includes('(') === false){
            this.displayText = this.displayText.replace('-','')
            this.displayText = '(' + this.displayText.slice(0,3) +')' + this.displayText.slice(3,6) + '-' + this.displayText.slice(6)
            console.log('as')
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
        phone.phoneFormat()
    })
})

backButton.addEventListener('click', ()=>{
    phone.clear()
    phone.updateDisplay()
    phone.phoneFormat()
})

