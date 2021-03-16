'use strict';

(function () {

  const body = document.querySelector('body');
  const close = document.querySelector('.close');
  const modal = document.querySelector('.modal');
  const name = document.querySelector('.modal').querySelector('input[type="text"]');
  const open = document.querySelector('.open');
  const wrapper = document.querySelector('.modal-wrapper');

  if (open) {
    open.addEventListener('click', function (evt) {
      evt.preventDefault();
      modal.classList.add('modal--open');
      wrapper.classList.add('modal-wrapper--active');
      name.focus();
      body.classList.add('body--no-scroll');
    });

    const closeModal = function () {
      modal.classList.remove('modal--open');
      wrapper.classList.remove('modal-wrapper--active');
      body.classList.remove('body--no-scroll');
    };

    close.addEventListener('click', closeModal);
    wrapper.addEventListener('click', closeModal);

    window.addEventListener('keydown', function (evt) {
      if (evt.key === 'Escape') {
        closeModal();
      }
    });
  }

  const phones = document.querySelectorAll('input[type="tel"]');

  if (phones) {
    for (let i = 0; i < phones.length; i++) {
      IMask(phones[i], { mask: '+{7}(000)000-00-00' });
    }
  }

  const sectionsButton = document.querySelector('.sections').querySelector('.footer__button');
  const officeButton = document.querySelector('.office').querySelector('.footer__button');
  const sections = document.querySelector('.sections__list');
  const office = document.querySelector('.office__wrap');

  document.addEventListener('DOMContentLoaded', function () {
    sectionsButton.classList.add('footer__button--close');
    sections.classList.add('sections__list--closed');
    officeButton.classList.add('footer__button--close');
    office.classList.add('office__wrap--closed');
  });

  if (sections || office) {
    sectionsButton.addEventListener('click', function (evt) {
      evt.preventDefault();
      sectionsButton.classList.toggle('footer__button--close');
      sections.classList.toggle('sections__list--closed');
      officeButton.classList.add('footer__button--close');
      office.classList.add('office__wrap--closed');
    });

    officeButton.addEventListener('click', function (evt) {
      evt.preventDefault();
      officeButton.classList.toggle('footer__button--close');
      office.classList.toggle('office__wrap--closed');
      sectionsButton.classList.add('footer__button--close');
      sections.classList.add('sections__list--closed');
    });
  }

})();
