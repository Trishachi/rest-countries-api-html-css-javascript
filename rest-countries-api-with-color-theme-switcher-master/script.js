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
                console.log(country.name.common)
                const para = document.createElement("p");
                const node = document.createTextNode(country.name.common);
                para.appendChild(node);
        
                document.getElementById('results').appendChild(para);
            }
        );

        })
              
        // Fetch Request failed
        .catch(error => 
               console.error("Unable to fetch data:", error));
    }
fetchJSONData();