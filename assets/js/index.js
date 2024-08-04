const swiper_block4 = new Swiper('.swiper-block4', {
  loop: false,

  pagination: {
    el: '.swiper-pagination-block4',
    clickable: true
  },

  navigation: {
    nextEl: '.swiper-block4-next',
    prevEl: '.swiper-block4-prev',
  },

  breakpoints: {
      0: {
        spaceBetween: 16,
        slidesPerView: 1,
      },
      1199: {
        spaceBetween: 24,  
        slidesPerView: 2,
      },
}
});


const selects = document.querySelectorAll('.select-head'),
    options = document.querySelectorAll('.options li');

selects.forEach(select => {
  select.addEventListener('click', () => {
      select.parentElement.classList.toggle('showSelect');
  })
});

window.addEventListener('click', (e) => {
  selects.forEach(select => {
    select.parentElement.contains(e.target) || select.parentElement.classList.remove('showSelect');
  });
});



options.forEach(option => {
  option.addEventListener('click', () => {
      let active = option.parentElement.parentElement.previousElementSibling.children[1].children[0];
      active.textContent = option.textContent;
      option.parentElement.parentElement.parentElement.classList.remove('showSelect')
  })
});



// Start form code
const userName = document.getElementById('name'),
    userPhone = document.getElementById('phone'),
    popUpThanks = document.querySelector('.popUp-thanks'),
    formBtn = document.querySelector('.block6 .form-btn');

formBtn.addEventListener('click', () => {
checkInputs();
const userNameSuc =  userName.nextElementSibling.classList,
      userPhoneSuc =  userPhone.nextElementSibling.classList;

if(userNameSuc == 'success' && userPhoneSuc == 'success') {
  // formBtn.type = 'submit'
  popUpThanks.classList.remove('d-none')
}
})

function checkInputs() {
const userNameVal = userName.value.trim(),
      userPhoneVal = userPhone.value.trim();

if(userNameVal == '' || userName.value.length <= 2) {
  setError(userName)
} else {
  setSuccess(userName)
}

if(userPhoneVal == '') {
  setError(userPhone)
} else if(!isEmail(userPhoneVal)) {
  setError(userPhone)
}
else {
  setSuccess(userPhone)
}
}

function setSuccess(input) {
input.style.borderColor = '#006BE9'
input.parentElement.children[3].classList.add('success');
input.parentElement.children[3].classList.remove('error');
input.nextElementSibling.classList.add('success')
}

function setError(input) {
input.style.borderColor = '#E51017'
input.parentElement.children[3].classList.add('error');
input.parentElement.children[3].classList.remove('success');
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}   


// // Start Modal1 code
// const modal1 = document.querySelector('.modal1'),
//     modal1Btn = document.querySelector('.modal1-btn');  
 
//     modal1Btn.addEventListener('click' , () => {
//       modal1.classList.remove('showModal1')
//     })
// // Start Form modal code
// const modalForm = document.querySelector('.modal-form'),
//     modalBtn = document.querySelector('.modal-btn');  
 
//     modalBtn.addEventListener('click' , () => {
//       modalForm.classList.remove('showModal1')
//     })

