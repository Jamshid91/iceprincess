const filter_head = document.querySelectorAll('.filter-head'),
      filterBtn = document.querySelector('.filter-btn'),
      filters = document.querySelector('.filters');

filter_head.forEach(filter => {
    filter.addEventListener('click', () => {
        filter.parentElement.classList.toggle('showFilter')
    })
});

filterBtn.addEventListener('click', () => {
    filters.classList.toggle('showFilters')
})


// document.addEventListener('click', (e) => {
//     filter_head.forEach(filter => {
//         filter.parentElement.contains(e.target) || filter.parentElement.classList.remove('showFilter')
//     });
// });

const checks = document.querySelectorAll('.check-box');

checks.forEach(check => {
    check.addEventListener('click', () => {
        check.children[0].toggleAttribute('checked')
    })
})