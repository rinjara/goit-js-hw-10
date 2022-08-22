function createCountryList(countryInfo) {
  return countryInfo
    .map(
      ({ name, flags }) => `<li class="country-list__item">
    <img src="${flags.svg}" width="20" hight = "20" alt="${name.official} flag" class="country-list-img"> ${name.official}
</li>`
    )
    .join('');
}

function createCountryCard(countryInfo) {
  return countryInfo
    .map(
      ({ name, capital, population, flags, languages }) => `<h1 class="country">
    <img src="${flags.svg}" width="50" hight = "50" alt="${
        name.official
      }" class="gallery-img"> ${name.official}</h1>
    <p><b>Capital:</b> ${capital}</p>
    <p><b>Population:</b> ${population}</p>
    <p><b>Languages:</b> ${Object.values(languages).join(', ')}</p>
`
    )
    .join('');
}

export { createCountryList, createCountryCard };
