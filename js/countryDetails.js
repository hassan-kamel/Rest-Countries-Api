import RestCountries from './RestCountries.js';

const RC = new RestCountries();


let countryName = (window.location.href).split('=')[1];




const countryEl = document.querySelector('.country');



RC.getCountry(countryName).then((res) => {
    let country = res[0];
    // console.log('country: ', country);

    countryEl.innerHTML = `

            
                <div class="flag">
                    <img src="${country.flags[0]}" alt="flag">
                </div>
                <div class="details">
                    <h2>${country.name}</h2>
                    <div class="all">
                        <div class="detail">
                            <span>Native Name : </span>
                            <span>${country.name.official}</span>
                        </div>
                        <div class="detail">
                            <span>Population : </span>
                            <span>${country.population}</span>
                        </div>
                        <div class="detail">
                            <span>Region : </span>
                            <span>${country.region}</span>
                        </div>
                        <div class="detail">
                            <span>sub Region : </span>
                            <span>${country.subregion}</span>
                        </div>
                        <div class="detail">
                            <span>Capital : </span>
                            <span>${country.capital}</span>
                        </div>
                        <div class="detail">
                            <span>Top Level Domain : </span>
                            <span>${country.tld[0]}</span>
                        </div>
                        <div class="detail currencies">
                            <span>Currencies : </span>
                            
                        </div>
                        <div class="detail languages">
                            <span>Languages : </span>
                            
                        </div>
                    </div>

                    <div class="borders">
                        <span>Borders : </span>
                       
                    </div>
                </div>
   `;
    const currencies = document.querySelector('.currencies ');
    const languages = document.querySelector('.languages ');
    const borders = document.querySelector('.borders ');



    const countryCurrencies = Object.values(country.currencies);
    const countryLanguages = Object.values(country.languages);
    console.log('countryLanguages: ', countryLanguages);


    for (const currency of countryCurrencies) {
        let el = document.createElement('span');
        el.classList.add("mr-1rem");
        el.innerHTML = `${currency.name}--${currency.symbol}`
        currencies.appendChild(el);
    };
    countryLanguages.forEach((language) => {
        let el = document.createElement('span');
        el.classList.add("mr-1rem");
        el.innerHTML = `${language}`
        languages.appendChild(el);

    });
    country.borders.forEach(border => {
        let el = document.createElement('span');
        el.innerHTML = `${border}`
        borders.appendChild(el);
    })

}).catch((err) => {
    console.log('err: ', err);
});

const backEl = document.querySelector('.back');

backEl.addEventListener('click', () => {
    window.location.href = '/Rest-Countries-Api';
});
























/*  */