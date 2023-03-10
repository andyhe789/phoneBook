const deleteButton = doncument.querySelector('.del')

Array.from(deleteButton).forEach((el)=>{
    el.addEventListener('click',deleteContact)
})