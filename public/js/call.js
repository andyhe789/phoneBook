class Phone{
    constructor(displayScreen){
        this.displayScreen = displayScreen
        this.displayText = ''
        this.displayLength = ''
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
        this.displayLength = this.displayText.toString().replace(/[-()]/gi,'').length
        let specialCharacters = '( ) -'
        console.log(this.displayLength)
        if(this.displayLength <= 3){
            this.displayText = this.displayText.slice(0,3)
        }
        if(this.displayLength == 3 && this.displayLength < 8 && this.displayText.includes('-') === false){
            this.displayText = this.displayText.slice(0,3) + '-' + this.displayText.slice(3,6)
            console.log('run')
        }
        if(this.displayLength >= 8 && this.displayLength <= 11 && this.displayText.includes('(') === false){
            this.displayText = this.displayText.replace('-','')
            this.displayText = '(' + this.displayText.slice(0,3) +')' + this.displayText.slice(3,6) + '-' + this.displayText.slice(6)
            console.log('as')
        }
        if(this.displayLength >= 10){
            this.displayText = this.displayText.replace(/[-()]/gi,'')
            console.log(this.displayLength)
        }
    }
    
    backspaceFormat(){
        this.displayLength = this.displayText.toString().replace(/[-()]/gi,'').length
        if(this.displayLength <= 7){
            this.displayText = this.displayText.replace(/[()-]/gi,'')
            this.displayText = this.displayText.split('')
            // this.displayText = this.displayText.slice(0,3) + '-' + this.displayText.slice(3,6)
            console.log(this.displayLength)
        }
        console.log(' dele')
        // if(this.displayLength >= 8 && this.displayLength <= 11 && this.displayText.includes('(') === false){
        //     console.log(this.displayLength)
        //     console.log('deas')
        // }
        // if(this.displayLength <= 7){
        //     this.displayText = this.displayText.replace(/[()]/gi,'')
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
        phone.phoneFormat()
        phone.updateDisplay()
        
    })
})

backButton.addEventListener('click', ()=>{
    phone.clear()
    phone.backspaceFormat()
    phone.updateDisplay()
    // phone.phoneFormat()
})

