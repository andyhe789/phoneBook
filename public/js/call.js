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

    conditional(){
        this.displayLength = this.displayText.toString().length
        console.log(this.displayLength)
        if(this.displayLength >= 3 && this.displayLength <= 10){
            let arr = this.displayText.toString().split('')
            arr[3] = '-'
            this.displayText = arr.join('')
            console.log(arr)
        }
        if(this.displayLength > 10){
            this.displayText = this.displayText.toString().replace('-', '')
            console.log('over 10')
        }

        // if(this.displayLength >= 8 && this.displayLength <= 10){
        //     this.splitText = this.displayText.toString().split('')
        //     this.parenthesesText = this.splitText.splice(0,0,'(')
        //     // this.parenthesesText = this.splitText.splice(4,0,')')

        //     console.log(this.parenthesesText)
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
        phone.conditional()
    })
})

backButton.addEventListener('click', ()=>{
    phone.clear()
    phone.updateDisplay()
    phone.conditional()
})

