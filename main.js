const $popup = document.querySelector('.pop-up');
const $close = document.querySelector('.close-button');
const $button = document.getElementById('form-submit');
const $container = document.querySelector('.container');
const $email = document.getElementById('email');
const $popupEmail = document.getElementById('popup-email');


$button.addEventListener('submit', (e) => {
  e.preventDefault();
  $popup.classList.add('active');
  $container.classList.add('active');
  $popupEmail.textContent = $email.value;
  $popupEmail.style.fontWeight = 'bold';

  document.body.style.pointerEvents = 'none';
  $popup.style.pointerEvents = 'auto';
});

$close.addEventListener('click', () => {
  $popup.classList.remove('active');
  $container.classList.remove('active');
  document.body.style.pointerEvents = 'auto';
});
