import RestCountries from './js/RestCountries.js';

const RC = new RestCountries();


const countriesEl = document.querySelector(".countries");
getAll();


const searchInput = document.querySelector('input');
const selectEl = document.querySelector('select');
const countryEl = document.querySelector('.country');



searchInput.addEventListener('keyup', getSearch);
selectEl.addEventListener('change', getRegion);
countriesEl.addEventListener('click', routeToCountry);

function getAll() {
    RC.getAll().then((res) => {
        let countries = res;
        console.log(countries);
        let output = ``;
        countries.forEach((country, idx) => {
            output += `
                        <div class="country" countryName="${country.name.common}">
                            <div class="flag">
                                <img src="${country.flags[0]}" alt="flag" countryName="${country.name.common}">
                            </div>
                            <div class="details" countryName="${country.name.common}">
                                <h2>${country.name.common}</h2>
                                <div class="detail">
                                    <span>Population : </span>
                                    <span>${country.population}</span>
                                </div>
                                <div class="detail">
                                    <span>Region : </span>
                                    <span>${country.region}</span>
                                </div>
                                <div class="detail">
                                    <span>Capital : </span>
                                    <span>${country.capital}</span>
                                </div>
                            </div>
                        </div>`;
        });
        countriesEl.innerHTML = output;
    }).catch((err) => {
        console.log(err);
    });


}


function getRegion(e) {
    const region = e.target.value;
    console.log(region);
    RC.getRegion(region).then((res) => {
        let regioned = res;
        let output = ``;
        regioned.forEach((country, idx) => {
            output += `
                        <div class="country" countryName="${country.name.common}">
                            <div class="flag">
                                <img src="${country.flags[0]}" alt="flag" countryName="${country.name.common}">
                            </div>
                            <div class="details" countryName="${country.name.common}">
                                <h2>${country.name.common}</h2>
                                <div class="detail">
                                    <span>Population : </span>
                                    <span>${country.population}</span>
                                </div>
                                <div class="detail">
                                    <span>Region : </span>
                                    <span>${country.region}</span>
                                </div>
                                <div class="detail">
                                    <span>Capital : </span>
                                    <span>${country.capital}</span>
                                </div>
                            </div>
                        </div>`;
        });
        countriesEl.innerHTML = output;
    });
}

function getSearch(e) {
    const search = e.target.value;
    console.log(search);
    if (search) {
        RC.getSearch(search).then((res) => {
            let searched = res;
            let output = ``;
            searched.forEach((country, idx) => {
                output += `
                        <div class="country" countryName="${country.name.common}">
                            <div class="flag">
                                <img src="${country.flags[0]}" alt="flag" countryName="${country.name.common}">
                            </div>
                            <div class="details" countryName="${country.name.common}">
                                <h2>${country.name.common}</h2>
                                <div class="detail">
                                    <span>Population : </span>
                                    <span>${country.population}</span>
                                </div>
                                <div class="detail">
                                    <span>Region : </span>
                                    <span>${country.region}</span>
                                </div>
                                <div class="detail">
                                    <span>Capital : </span>
                                    <span>${country.capital}</span>
                                </div>
                            </div>
                        </div>`;
            });
            countriesEl.innerHTML = output;
        }).catch(err => console.log(err));
    } else {
        getAll();
    }

}


function routeToCountry(e) {
    const name = e.target.attributes.countryName.value;
    console.log(name);
    window.location.href = `html/countryDetails.html?name=${name}`;
}