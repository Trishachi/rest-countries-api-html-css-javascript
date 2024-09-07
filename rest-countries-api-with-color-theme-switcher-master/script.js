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
            data.forEach((country) => {
                //console.log(country.flags.svg)

                //Create HTML Elements 
                let image = document.createElement("img");
                image.src = country.flags.svg;
                let title = document.createElement("h2");
                title.innerText = country.name.common;
                let population = document.createElement("p");
                population.innerText = country.population;
                let region = document.createElement("p");
                region.innerText = country.region;
                let capital =  document.createElement("p");
                capital.innerText = country.capital;

                //Create card and add data to card
                
        
                document.getElementById('results').appendChild(capital);
            }
        );

        })
              
        // Fetch Request failed
        .catch(error => 
               console.error("Unable to fetch data:", error));
    }
fetchJSONData();