import './styles.css';
const debounce = require('lodash.debounce');
import { createMarkup, createCountryList } from './js/update-markup';
import fetchCountries from './js/fetch-countries';
import error from './js/notifications';

const input = document.querySelector('input');
const countriesContainer = document.querySelector('.js-countries');
input.addEventListener('input', debounce(onSearchHandler, 500));

function onSearchHandler(event) {
  clearMarkup();
  const inputValue = event.target.value;
  if (inputValue === '') return;
  fetchCountries(inputValue).then(countries => switchResult(countries));
}

function switchResult(countries) {
  if (countries.length === 1) {
    createMarkup(countries);
  } else if (countries.length > 1 && countries.length <= 10) {
    createCountryList(countries);
  } else if (countries.status === 404) {
    error({
      text: 'Not found!',
    });
  } else {
    error({
      text: 'To many matches found. Please enter a more specific query!',
    });
  }
}

const clearMarkup = () => {
  countriesContainer.innerHTML = '';
};
