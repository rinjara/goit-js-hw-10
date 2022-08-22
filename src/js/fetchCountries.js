const BASE_URL = `https://restcountries.com/v3.1/name/`;
const SEARCH_PARAMS = 'fields=name,capital,population,flags,languages';

export default function fetchCountries(name) {
  const Url = `${BASE_URL}${name}?${SEARCH_PARAMS}`;
  return fetch(Url).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
