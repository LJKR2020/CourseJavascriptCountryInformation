import axios from 'axios';

async function allCountries() {
    try {
        const result = await axios.get("https://restcountries.com/v2/all");
        const countries = result.data;
        countries.sort((a, b) => {
            return a.population - b.population
        });
        return listItems(countries);
    } catch (e) {
        console.error(e);
    }
}

allCountries();

function listItems(countries) {
    const countryInfo = document.getElementById("info");

    countryInfo.innerHTML = countries.map((country) => {
        return `
            <li>
            <img id="flag" src=${country.flag} alt=${country.name}>
            <h3>${country.name}</h3>
            <p>Has a population of ${country.population} people</p>
            </li>
            
        `;
    })
}





