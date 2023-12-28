const bodyy = document.querySelector('body');
const buttonns = document.querySelectorAll('.button');

buttonns.forEach((btn) => {
  btn.addEventListener('click', (chai) => {
    if (chai.target.id !== '') {
      bodyy.style.backgroundColor = chai.target.id;
    }
  });
});
