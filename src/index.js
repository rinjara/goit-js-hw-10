import './css/styles.css';
import fetchCountries from './js/fetchCountries';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { createCountryList, createCountryCard } from './js/htmlTemplates';

const DEBOUNCE_DELAY = 300;

const refs = {
  input: document.querySelector('#search-box'),
  list: document.querySelector('.country-list'),
  info: document.querySelector('.country-info'),
};

function onInputEnter(event) {
  const enteredCountryName = event.target.value;
  if (enteredCountryName === '') {
    refs.info.innerHTML = '';
    refs.list.innerHTML = '';
    return;
  }
  const countryName = String(enteredCountryName).trim();

  fetchCountries(countryName)
    .then(results => {
      if (results.length > 10) {
        Notify.info(
          'Too many matches found. Please enter a more specific name.'
        );
        refs.info.innerHTML = '';
        refs.list.innerHTML = '';
        return;
      } else if (results.length >= 2 && results.length <= 10) {
        const markUp = createCountryList(results);
        refs.info.innerHTML = '';
        refs.list.innerHTML = markUp;
      } else {
        const countryCard = createCountryCard(results);
        refs.list.innerHTML = '';
        refs.info.innerHTML = countryCard;
      }
    })
    .catch(error => Notify.warning(`Oops, there is no country with that name`));
}

refs.input.addEventListener('input', debounce(onInputEnter, DEBOUNCE_DELAY));
