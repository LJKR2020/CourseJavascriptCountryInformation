import axios from 'axios';

async function allCountries(e) {
    try {
        const result = await axios.get("https://restcountries.com/v2/all");
        console.log(result.data);
    } catch (e) {
        console.error(e);
    }
}

allCountries("");

const countryinfo = document.getElementById("info");

countryinfo.innerHTML = `
    <h5>vlag landnaam</h5>
    <p>has a population of ... people</p>
`;
