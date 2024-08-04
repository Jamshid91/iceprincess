const quantity_remove = document.querySelectorAll('.quantity-remove')
const quantity_add = document.querySelectorAll('.quantity-add')

let i = 1;
quantity_add.forEach(addBtn => {
    addBtn.addEventListener('click', () => {
        i++
        if(i == 10) {
            addBtn.classList.add('disabledBtn') 
        }
        addBtn.previousElementSibling.value = i;
        addBtn.previousElementSibling.previousElementSibling.classList.remove('disabledBtn')
    })
});

quantity_remove.forEach(removeBtn => {
    removeBtn.addEventListener('click', () => {
        i--
        if(i == 1) {
            removeBtn.classList.add('disabledBtn') 
        }
        removeBtn.nextElementSibling.value = i;
        removeBtn.nextElementSibling.nextElementSibling.classList.remove('disabledBtn')
    })
})