// Fetch Data from endpoint

function fetchJSONData() {
    fetch("https://restcountries.com/v3.1/all")
        .then((res) => {
            if (!res.ok) {
                throw new Error
                    (`HTTP error! Status: ${res.status}`);
            }
            return res.json();
        })
        // Fetch request successful
        .then(data => {
            console.log(data);
            let cardsHTML = '';
            data.forEach((country) => {
                //console.log(country.flags.svg)

                //Create HTML Elements 
                // let image = document.createElement("img");
                // image.src = country.flags.svg;
                // let title = document.createElement("h2");
                // title.innerText = country.name.common;
                // let population = document.createElement("p");
                // population.innerText = country.population;
                // let region = document.createElement("p");
                // region.innerText = country.region;
                // let capital =  document.createElement("p");
                // capital.innerText = country.capital;

                //Create card and add data to card
                const {flags, name, population} = country;
                cardsHTML += `
                <div class="container">
                    <div class="card col-4"  style="width: 18rem;">
                        <img class="card-img-top" src="${flags.svg}" alt="Flag of ${name.common}">
                        <div class="card-body">
                            <h2 class="card-title">${name.common}</h2>
                            <p class="card-text">Population: ${population.toLocaleString()}</p>
                        </div>
                        
                    </div>
                </div>
                `
        
                // document.getElementById('results').appendChild(capital);
                document.getElementById('results').innerHTML = cardsHTML;
            }
        );

        })
              
        // Fetch Request failed
        .catch(error => 
               console.error("Unable to fetch data:", error));
    }
fetchJSONData();