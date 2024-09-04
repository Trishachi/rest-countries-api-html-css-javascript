// Fetch Data from endpoint

function fetchJSONData() {
    fetch("data.json")
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
                console.log(country.name)
                const para = document.createElement("p");
                const node = document.createTextNode(country.name);
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