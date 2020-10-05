import countriesTemplate from '../templates/coutries.hbs';
const countriesContainer = document.querySelector('.js-countries');

export const createMarkup = country => {
  countriesContainer.insertAdjacentHTML(
    'beforeend',
    countriesTemplate(country),
  );
};

export const createCountryList = array => {
  const countryList = `
  <ul class="country-list">
  ${createCountryListItem(array)}
  </ul>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', countryList);
};

const createCountryListItem = arr =>
  arr.map(item => {
    return `<li class="country-list-item">${item.name}</li>`;
  });
