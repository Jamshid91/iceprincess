const review_all = document.querySelector('.review-all');
const reviews = document.querySelectorAll('.review');

review_all.addEventListener('click', () => {
    reviews.forEach(review => {
        review.classList.add('showReviews')
    });
    review_all.classList.add('d-none')
});



const fio = document.getElementById('fio'),
      city = document.getElementById('city'),
      message = document.getElementById('message'),
      submit_btn = document.querySelector('.btn-submit');


submit_btn.addEventListener('click', () => {
    checkInputsLogin();
    let fioSuc = fio.nextElementSibling.classList,
        citySuc = city.nextElementSibling.classList,
        messageSuc = message.nextElementSibling.classList;

    if(fioSuc == 'success' && citySuc == 'success' && messageSuc == 'success') {
        submit_btn.type = 'submit'
    }
})

function checkInputsLogin() {
    let fioVal = fio.value.trim(),
        cityVal = city.value.trim(),
        messageVal = message.value.trim();

        if(fioVal == '' ) {
            setError(fio)
          } else {
            setSuccess(fio)
          }

          if(cityVal == '' ) {
            setError(city)
          } else {
            setSuccess(city)
          }

          if(messageVal == '' ) {
            setError(message)
          } else {
            setSuccess(message)
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