console.log('test')

// const url = 'https://restcountries.com/v3.1/'
//
//
// async function makeRequest(url, method = 'GET') {
//     let response = await fetch(url, {"method": method})
//     if (response.ok) {
//         return await response.json();
//     } else {
//         let error = await response.json()
//         throw new Error(error.message)
//     }
// }
//
// async function getCountry(country) {
//     let h3 = document.createElement("h3");
//     h3.innerText = country.name.common;
//     let capital = document.createElement("p");
//     capital.innerText = country.capital[0];
//     let flag = document.createElement("p");
//     flag.innerText = country.flag;
//     container.appendChild(h3);
//     container.appendChild(capital);
//     container.appendChild(flag);
//
//     promiseList = [];
//     for (let borderCountryCode of country.borders) {
//         let countryUrl = `${url}alpha/${borderCountryCode}?fields=name`
//         promiseList.push(makeRequest(countryUrl));
//     }
//     return Promise.all(promiseList)
// }
//
// function getBordersCountries(country) {
//     let h4 = document.createElement("h4");
//     h4.innerText = country.name.common;
//     container.appendChild(h4);
// }
//
// async function onSubmit(event) {
//     event.preventDefault();
//     container.innerText = "";
//     let form = event.target;
//     let input = form.children[0];
//     let countryCode = input.value;
//     let countryUrl = `${url}alpha/${countryCode}?fields=name,capital,flag,borders`
//     let country = await makeRequest(countryUrl);
//     let borderCountries = await getCountry(country);
//     borderCountries.forEach(getBordersCountries);
// }
//
// function onLoad() {
//     let container = document.getElementById("container");
//     let form = document.getElementById("myForm");
//     form.addEventListener("submit", onSubmit);
// }
//
// window.addEventListener("load", onLoad)