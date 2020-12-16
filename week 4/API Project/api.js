
const newGlobalConfimed = document.getElementById("new-global-confirmed");
const newGlobalDeaths = document.getElementById("new-global-deaths");
const newGlobalRecovered = document.getElementById("new-global-recovered");
const totalGlobalCases = document.getElementById("total-global-cases");
const totalGlobalDeaths = document.getElementById("total-global-deaths");
const dropdown = document.getElementById("drop-down");
//const totalGlobalRecovered
const newConfimed = document.getElementById("new-confirmed");
const newDeaths = document.getElementById("new-deaths");
const newRecovered = document.getElementById("new-recovered");
const totalDeaths = document.getElementById("total-deaths");
const totalCases= document.getElementById("total-cases");
const totalRecovered = document.getElementById("total-recovered");
console.log(totalRecovered);

let url = "https://api.covid19api.com/summary";

/*let getData = async () => {
  
    let response = await fetch(url);
    let json = await response.json();
    console.log(json);
    console.log(Object.values());
}

getData();*/


let getCountries = async () => {
    let response = await fetch (url);
    let data = await response.json();
    console.log(data);
    let countries = data.Countries;

    for(let i =0; i< data.Countries.length; i++){
        var option = document.createElement("option");  
        option.innerHTML = data.Countries[i].Country;
        dropdown.appendChild(option);  
    }
    return data;
};

getCountries().then(data => setData(data));


function setData(fetchedData){
   
    newGlobalConfimed.innerHTML = fetchedData.Global.NewConfirmed;
    newGlobalDeaths.innerHTML = fetchedData.Global.NewDeaths;
    newGlobalRecovered.innerHTML = fetchedData.Global.NewRecovered;
    totalGlobalCases.innerHTML = "Total Cases: " + fetchedData.Global.TotalConfirmed;
    totalGlobalDeaths.innerHTML = "Total Deaths: " + fetchedData.Global.TotalDeaths;
    //totalGlobalRecovered.innerHTML = fetchedData.Global.TotalRecovered:;
    console.log(fetchedData.Countries.find(x => x.Country == "United States of America"));
    setCountryData(fetchedData);
}

function setCountryData(fetchedData){
    newConfimed.innerHTML = fetchedData.Countries[182].NewConfirmed;
    newDeaths.innerHTML = fetchedData.Countries[182].NewDeaths;
    newRecovered.innerHTML = fetchedData.Countries[182].NewRecovered;
    totalCases.innerHTML = fetchedData.Countries[182].TotalConfirmed;
    totalDeaths.innerHTML = fetchedData.Countries[182].TotalDeaths;
    totalRecovered.innerHTML = fetchedData.Countries[182].TotalRecovered;
}


// Material Select Initialization
var selection = [].slice.call(document.querySelectorAll('.dropdown'))
var dropdownList = dropdownElementList.map(function (dropdownToggleEl) {
  return new bootstrap.Dropdown(dropdownToggleEl)
})

console.log(selection);






/*
let countries = data.Countries;

    let totalConfirmedCases = 0;
    let highestCases = ['', 0];
    let lowestCases = ['', countries[0].TotalConfirmed];

    for(let i = 0; i < countries.length; i++) {

        totalConfirmedCases += countries[i].TotalConfirmed;
        if(countries[i].TotalConfirmed > highestCases[1]){
            highestCases[1] = countries[i].TotalConfirmed;
            highestCases[0]=countries[i].Country;
        }
        if(countries[i].TotalConfirmed < lowestCases[1]){
    lowestCases[1] = countries[i].TotalConfirmed;
    lowestCases[0] = countries[i].Country;
            
        }

    }
    console.log(highestCases);
    console.log(lowestCases);
    console.log(`We have ${totalConfirmedCases} total confirmed cases!`);
    */
