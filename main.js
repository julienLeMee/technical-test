const popup = document.querySelector('.pop-up-display');
const close = document.querySelector('.close-button');
const button = document.querySelector('.form-input-button');
const container = document.querySelector('.container');

button.addEventListener('click', togglePopup)
close.addEventListener('click', closePopup)

function togglePopup(){
  popup.classList.toggle('pop-up-display');
  container.classList.toggle('active');
}

function closePopup(){
  popup.classList.toggle('pop-up-display');
  container.classList.toggle('active');
  }
