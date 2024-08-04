const selects = document.querySelectorAll('.select-head'),
    options = document.querySelectorAll('.options li');

selects.forEach(select => {
  select.addEventListener('click', () => {
      select.parentElement.classList.toggle('showSelect');
  })
});

options.forEach(option => {
    option.addEventListener('click', () => {
        let active = option.parentElement.parentElement.previousElementSibling .children[0];
        active.textContent = option.textContent;
        option.parentElement.parentElement.parentElement.classList.remove('showSelect')
    })
  });

window.addEventListener('click', (e) => {
  selects.forEach(select => {
    select.parentElement.contains(e.target) || select.parentElement.classList.remove('showSelect');
  });
});