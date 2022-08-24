const form = document.querySelector('form');
const inputWeight = document.querySelector('#weight');
const inputHeight = document.querySelector('#height');

// const modalWrapper = document.querySelector('.modal-wrapper');
// const modalMessage = document.querySelector('.modal .title span');
// const modalButtonClose = document.querySelector('.modal .close');

const Modal = {

  wrapper: document.querySelector('.modal-wrapper'),
  message: document.querySelector('.modal .title span'),
  btnClose: document.querySelector('.modal .close'),

  open() {
    Modal.wrapper.classList.add('open');
  },
  close() {
    Modal.wrapper.classList.remove('open');
  }
}

form.onsubmit = (event) => {
  event.preventDefault();

  const weight = inputWeight.value;
  const height = inputHeight.value;

  const result = IMC(weight, height);
  const message = `Seu IMC é de ${result}`;

  Modal.open();
  Modal.message.innerText = message;
}

function IMC(weight, height) {
  return (weight / ((height / 100) ** 2)).toFixed(2)
}

Modal.btnClose.onclick = () => {
  Modal.close();
}




