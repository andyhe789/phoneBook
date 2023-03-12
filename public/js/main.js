const deleteButton = document.querySelectorAll('.del')

Array.from(deleteButton).forEach((el)=>{
    el.addEventListener('click',deleteContact)
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