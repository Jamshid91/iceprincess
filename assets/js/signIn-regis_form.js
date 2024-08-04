// Form regis
const fio = document.getElementById('fio'),
      phone = document.getElementById('phone'),
      email = document.getElementById('email'),
      pass = document.getElementById('pass'),
      repeat_pass = document.getElementById('repeat-pass'),
      formBtn = document.querySelector('.btn-regis');

formBtn.addEventListener('click', () => {
checkInputsRegis();
const fioSuc =  fio.nextElementSibling.classList,
      phoneSuc =  phone.nextElementSibling.classList,
      emailSuc =  email.nextElementSibling.classList,
      passSuc =  pass.nextElementSibling.classList,
      repeat_passSuc =  repeat_pass.nextElementSibling.classList;

if(fioSuc == 'success' && phoneSuc == 'success' && emailSuc == 'success' && passSuc == 'success' && repeat_passSuc == 'success') {
  formBtn.type = 'submit'
}
})

function checkInputsRegis() {
const fioVal = fio.value.trim(),
      phoneVal = phone.value.trim(),
      emailVal = email.value.trim(),
      passVal = pass.value.trim(),
      repeat_passVal = repeat_pass.value.trim();

if(fioVal == '' || fio.value.length <= 2) {
  setError(fio)
} else {
  setSuccess(fio)
}

if(phoneVal == '') {
    setError(phone)
  } else {
    setSuccess(phone)
}

if(passVal == '' ) {
    setError(pass)
  } else {
    setSuccess(pass)
  }

if(repeat_passVal == '' || repeat_passVal != passVal) {
    setError(repeat_pass)
  } else {
    setSuccess(repeat_pass)
  }

if(emailVal == '') {
  setError(email)
} else if(!isEmail(emailVal)) {
  setError(email)
}
else {
  setSuccess(email)
}
}



// Form sign in

const login_info = document.getElementById('login-info'),
      login_pass = document.getElementById('login-pass'),
      submit_btn = document.querySelector('.btn-signIn');


submit_btn.addEventListener('click', () => {
    checkInputsLogin();
    let login_infoSuc = login_info.nextElementSibling.classList,
        login_passSuc = login_pass.nextElementSibling.classList;

    if(login_infoSuc == 'success' && login_passSuc == 'success') {
        submit_btn.type = 'submit'
    }
})

function checkInputsLogin() {
    let login_infoVal = login_info.value.trim(),
        login_passVal = login_pass.value.trim();

        if(login_infoVal == '' ) {
            setError(login_info)
          } else {
            setSuccess(login_info)
          }

          if(login_passVal == '' ) {
            setError(login_pass)
          } else {
            setSuccess(login_pass)
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