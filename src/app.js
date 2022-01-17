import axios from 'axios';

async function allCountries() {
    try {
        const result = await axios.get("https://restcountries.com/v2/all");
        const countries = result.data;
        console.log(countries);
        countries.sort((a, b) => {
            return a.population - b.population;
        });
        // aantallen leesbaarder maken.
        return listItems(countries);
    } catch (e) {
        console.error(e);
    }
}

console.log(allCountries());

function listItems(countries) {
    const countryInfo = document.getElementById("info");

    countryInfo.innerHTML = countries.map((country) => {
        return `
            <li>
                <img class="flag" src="${country.flag}" alt="Flag of ${country.name}">
                <span class="${country.region}">${country.name}</span>
                <p class="population">Has a population of ${country.population} people</p>
            </li>
        `;
    }).join("");
}