const deleteButton = document.querySelectorAll('.del')
const navClick = document.querySelectorAll('.ejsName, .ejsNumber')

Array.from(deleteButton).forEach((el)=>{
    el.addEventListener('click',deleteContact)
})
Array.from(navClick).forEach((el)=>{
    el.addEventListener('click', putNav)
})

async function deleteContact(){
    const contactID = this.parentNode.dataset.id
    try{
        const response = await fetch('contact/deleteContact',{
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'contactIdFromJSFile': contactID
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function putNav(){
    const contactID = this.parentNode.dataset.id
    const toggleStatus = this.parentNode.dataset.toggle
    try{
        const response = await fetch('contact/putNav',{
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'contactIdFromJSFile': contactID,
                'toggleStatusFromJSFile': toggleStatus
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

