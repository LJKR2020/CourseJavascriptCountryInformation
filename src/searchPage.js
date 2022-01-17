import axios from "axios";

async function fetchCountry() {
    try {
        const countryInfo = await axios.get("https://restcountries.com/v2/name/panama");
        const countryData = countryInfo.data[0];

        return countryAnswer(countryData);

    } catch (e) {
        console.error(e);
    }

}

console.log(fetchCountry());

function countryAnswer(countryData) {
    const countryOutcome = document.getElementById("country-outcome");

    countryOutcome.innerHTML = `
    <img id="flag" src="${countryData.flag}" alt="The flag of the country"/>
    <p class="(countryData.Region)" id="country-name">${countryData.name}</p>
    <p>${countryData.name} is situated in ${countryData.subregion}. It has a population of ${countryData.population} people.</p>
    <p>The capital is ${countryData.capital} and you can pay with ${countryValuta(countryData)}'s.</p>
`;
}

function countryValuta(countryData) {
    const countryInfo = fetchCountry();
    const {currencies} = countryInfo;
    console.log(currencies);
}