const chosen_btn = document.querySelectorAll('.chosen-btn');

chosen_btn.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.classList.toggle('chosenCheck')
    })
})