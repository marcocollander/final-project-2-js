const qs = (selector) => document.querySelector(selector);

const btn = qs('.convertor__btn');
const result = qs('.convertor__result');
const amount = qs('.convertor__value');
const symbol = qs('.convertor__symbol');
const gif = qs('.gif');

btn.addEventListener('click', (e) => {
  e.preventDefault();
  setTimeout(() => {
    gif.classList.add('show');
  }, 100);

  setTimeout(() => {
    gif.classList.remove('show');
  }, 600);

  fetch('https://api.nbp.pl/api/exchangerates/tables/a/')
    .then((res) => res.json())
    .then((data) => {
      const currency = data[0].rates.filter(
        (elem) => elem.code === symbol.value
      );
      result.innerText =
        'To ' + (currency[0].mid * amount.value).toFixed(2) + ' PLN';
    })
    .catch((error) => console.log(error));
});
