class Phone{
    constructor(displayScreen){
        this.displayScreen = displayScreen
        this.displayText = ''
        this.displayLength = ''
        this.backspaceClearAllInterval
    }

    clear(){
        this.displayText = this.displayText.toString().slice(0,-1)
    }

    appendNumber(number){
        this.displayText = this.displayText.toString() + number.toString()
    }

    phoneFormat(){
        this.noSpecial = this.displayText.toString().replace(/[-() ]/gi,'')
        this.displayLength = this.displayText.toString().replace(/[-() ]/gi,'').length
        let firstNum = this.displayText.toString().split('').shift()
        console.log(this.displayLength)
        if(firstNum == 1){
            if(this.displayLength <= 2){
                this.displayText = '1' + this.noSpecial.slice(1)
                console.log('first', firstNum )
            }
            else if(this.displayLength == 3){
                this.displayText = '1 (' + this.noSpecial.slice(1,3)
                console.log(this.displayText)
                console.log('two', firstNum)
            }
            else if(this.displayLength >= 4 && this.displayLength < 8){
                let areaCode = this.noSpecial.substring(1,4)
                this.displayText = '1 (' + areaCode + ') ' + this.noSpecial.slice(4,9)
                console.log(this.noSpecial)
                console.log('three', firstNum)
            }
            else if(this.displayLength >= 8 && this.displayLength < 12){
                this.displayText = '1 (' + this.noSpecial.slice(1,4) + ') ' + this.noSpecial.slice(4,7) + '-' + this.noSpecial.slice(7,12)
                console.log(this.displayText)
                console.log('four', firstNum)
            }
            else if(this.displayLength >= 12){
                this.displayText = this.displayText.replace(/[-() ]/gi,'')
                console.log(this.displayLength)
            }
        }
        else{
            if(this.displayLength <= 3){
                this.displayText = this.displayText.slice(0,3)
            }
            if(this.displayLength >= 3 && this.displayLength < 8 && this.displayText.includes('-') === false){
                this.displayText = this.displayText.slice(0,3) + '-' + this.displayText.slice(3,6)
                console.log('run')
            }
            if(this.displayLength >= 8 && this.displayLength <= 11 && this.displayText.includes('(') === false){
                this.displayText = this.displayText.replace('-','')
                this.displayText = '(' + this.displayText.slice(0,3) +')' + this.displayText.slice(3,6) + '-' + this.displayText.slice(6)
                console.log('as')
            }
            if(this.displayLength >= 11){
                this.displayText = this.displayText.replace(/[-()]/gi,'')
                console.log(this.displayLength)
            }
        }
    }
    
    backspaceFormat(){
        this.displayLength = this.displayText.toString().replace(/[-() ]/gi,'').length
        this.noSpecial = this.displayText.toString().replace(/[-() ]/gi,'')
        let firstNum = this.displayText.toString().split('').shift()
        if(firstNum == 1){
            if(this.displayLength <= 2){
                this.displayText = '1' + this.noSpecial.slice(1)
                console.log('first', firstNum )
            }
            else if(this.displayLength <= 3){
                this.displayText = '1 (' + this.noSpecial.slice(1,3)
                console.log(this.displayText)
                console.log('two', firstNum)
            }
            else if(this.displayLength == 4){
                let areaCode = this.noSpecial.substring(1,4)
                this.displayText = '1 (' + areaCode
                console.log(this.noSpecial)
                console.log('three3', firstNum)
            }
            else if(this.displayLength > 4 && this.displayLength < 8){
                let areaCode = this.noSpecial.substring(1,4)
                this.displayText = '1 (' + areaCode + ') ' + this.noSpecial.slice(4,9)
                console.log(this.noSpecial)
                console.log('three', firstNum)
            }
            else if(this.displayLength >= 8 && this.displayLength < 12){
                this.displayText = '1 (' + this.noSpecial.slice(1,4) + ') ' + this.noSpecial.slice(4,7) + '-' + this.noSpecial.slice(7,12)
                console.log(this.displayText)
                console.log('four', firstNum)
            }
            else if(this.displayLength >= 12){
                this.displayText = this.displayText.replace(/[-() ]/gi,'')
                console.log(this.displayLength)
            }
        }
        else{
            if(this.displayLength == 7){
            this.displayText = this.displayText.replace(/[()-]/gi,'')
            this.displayText = this.displayText.split('')
            this.displayText.splice(3,0,'-')
            this.displayText = this.displayText.join('')
            }
            if(this.displayLength == 10){
            this.displayText = this.displayText.replace('-','')
            this.displayText = '(' + this.displayText.slice(0,3) +')' + this.displayText.slice(3,6) + '-' + this.displayText.slice(6)
            }
            if(this.displayLength == 3){
            this.displayText = this.displayText.replace('-','')
            }
        }   
    }

    clearAll(){
        this.backspaceClearAllInterval = setTimeout(()=>{
            this.displayText = ''
            console.log('delete whole')
        },3000)
    }

    cancelClearAll(){
        clearTimeout(this.backspaceClearAllInterval)
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
})

backButton.addEventListener('mousedown', ()=>{
    phone.clearAll()
})

backButton.addEventListener('mouseup', ()=>{
    phone.cancelClearAll()
})

backButton.addEventListener('mouseout', ()=>{
    phone.cancelClearAll()
})