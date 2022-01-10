import axios from 'axios';

async function allCountries() {
    try {
        const result = await axios.get("https://restcountries.com/v2/all");
        const countries = result.data;
        console.log(countries);

        const countryInfo = document.getElementById("info");

        countryInfo.innerHTML = `
            <section>
            <h3> 
                <img id="flag" src=${countries[157].flag} alt=${countries[157].name}>
                ${countries[157].name}
            </h3>
            <p>Has a population of ${countries[157].population} people</p>
            </section>
            
        `;

    } catch (e) {
        console.error(e);
    }
}

const listOfCountries = allCountries();
console.log(listOfCountries);



