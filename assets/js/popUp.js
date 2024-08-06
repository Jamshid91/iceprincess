const popUp = document.querySelector('.popUp'),
      popUp_closeBtns = document.querySelectorAll('.popUp-close'),
      add_basket_btns = document.querySelectorAll('.product .add-basket');


add_basket_btns.forEach(btn => {
    btn.addEventListener('click', () => {
        popUp.classList.remove('d-none');
        body.classList.add('bodyStopScroll')
    })
});

popUp_closeBtns.forEach(close => {
    close.addEventListener('click', () => {
        close.parentElement.classList.add('hidePopUp');
        setTimeout(() => {
            close.parentElement.parentElement.classList.add('d-none');
            window.location.reload()
        }, 500);
    })
});


window.addEventListener('click', (e) => {
    if(e.target == popUp) {
        popUp.children[0].classList.add('hidePopUp');
        setTimeout(() => {
            popUp.classList.add('d-none');
            window.location.reload()
        }, 500);
    }
});