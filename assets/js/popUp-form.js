// Form regis
const click_fio = document.getElementById('click_fio'),
      click_phone = document.getElementById('click_phone'),
      click_email = document.getElementById('click_email'),
      click_message = document.getElementById('click_message'),
      formBtn = document.querySelector('.popUp .form-btn');

formBtn.addEventListener('click', () => {
checkInputsOneClick();
const click_fioSuc =  click_fio.nextElementSibling.classList,
      click_phoneSuc =  click_phone.nextElementSibling.classList,
      click_messageSuc =  click_message.nextElementSibling.classList,
      click_emailSuc =  click_email.nextElementSibling.classList;

if(click_fioSuc == 'success' && click_phoneSuc == 'success' && click_messageSuc == 'success' && click_emailSuc == 'success') {
  formBtn.type = 'submit'
}
})

function checkInputsOneClick() {
const click_fioVal = click_fio.value.trim(),
      click_phoneVal = click_phone.value.trim(),
      click_messageVal = click_message.value.trim(),
      click_emailVal = click_email.value.trim();

if(click_fioVal == '') {
  setError(click_fio)
} else {
  setSuccess(click_fio)
}

if(click_phoneVal == '') {
    setError(click_phone)
  } else {
    setSuccess(click_phone)
}

if(click_messageVal == '') {
    setError(click_message)
  } else {
    setSuccess(click_message)
}

if(click_emailVal == '') {
  setError(click_email)
} else if(!isEmail(click_emailVal)) {
  setError(click_email)
}
else {
  setSuccess(click_email)
}
}


function setSuccess(input) {
    input.style.borderColor = '#006BE9'
    input.nextElementSibling.classList.add('success')
    }
    
    function setError(input) {
    input.style.borderColor = '#E51017'
    }
    
    function isEmail(email) {
      return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }   