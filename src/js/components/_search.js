
document.addEventListener('DOMContentLoaded', () => {
  const formSearch = document.querySelector('.search__form');
  const mobileFormBtn = document.querySelector('.search__btn');
  const formClose = document.querySelectorAll('.form__close');

  const toggleForm = () => {
    formSearch.classList.toggle('open');
  };

  const closeForm = () => {
    formSearch.classList.remove('open');
  };

  if (mobileFormBtn) {
    mobileFormBtn.addEventListener('click', toggleForm);
  }

  formClose.forEach(el => {
    el.addEventListener('click', closeForm);
  });
});
