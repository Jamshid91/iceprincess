const change_avatar = document.querySelector('.change-avatar .change-inp');

change_avatar.addEventListener('change', (e) => {
    if(e.target.files.length > 0) {
        let src = URL.createObjectURL(e.target.files[0]);
        let addAvatar = e.target.parentElement.previousElementSibling;
        addAvatar.src = src;
    }
});


const changeInps = document.querySelectorAll('.input-box .change-btn');

changeInps.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.parentElement.children[0].removeAttribute("disabled")
    })
})