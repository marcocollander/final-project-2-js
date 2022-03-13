const querySelector = (selector) => document.querySelector(selector);

const btn = querySelector('.convertor__btn');
const result = querySelector('.convertor__result');

const addEventListener = (element, callback) =>
  element.addEventListener('click', callback);
