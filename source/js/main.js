'use strict';

(function () {

  const close = document.querySelector('.close');
  const modal = document.querySelector('.modal');
  const name = document.querySelector('.form__name');
  const open = document.querySelector('.open');
  const wrapper = document.querySelector('.modal-wrapper');

  open.addEventListener('click', function (evt) {
    evt.preventDefault();
    modal.classList.add('modal--open');
    wrapper.classList.add('modal-wrapper--active');
    name.focus();
  });

  const closeModal = function () {
    modal.classList.remove('modal--open');
    wrapper.classList.remove('modal-wrapper--active');
  };

  close.addEventListener('click', closeModal);
  wrapper.addEventListener('click', closeModal);

  window.addEventListener('keydown', function (evt) {
    if (evt.key === `Escape`) {
      closeModal();
    }
  });

  const phones = document.querySelectorAll('.form__phone');

  let maskOptions = {
    mask: '+{7}(000)000-00-00'
  };

  for (let i = 0; i < phones.length; i++) {
    let mask = IMask(phones[i], maskOptions);
  };

  const sectionsButton = document.querySelector('.sections').querySelector('.footer__button');
  const officeButton = document.querySelector('.office').querySelector('.footer__button');
  const sections = document.querySelector('.sections__list');
  const office = document.querySelector('.office__wrap');

  sectionsButton.addEventListener('click', function(evt) {
    evt.preventDefault();
    sectionsButton.classList.toggle('footer__button--close');
    sections.classList.toggle('sections__list--closed')
  });

  officeButton.addEventListener('click', function(evt) {
    evt.preventDefault();
    officeButton.classList.toggle('footer__button--close');
    office.classList.toggle('office__wrap--closed')
  });

})();
