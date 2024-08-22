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
        .then((data) => 
              console.log(data))
        // Fetch Request failed
        .catch((error) => 
               console.error("Unable to fetch data:", error));
}
fetchJSONData();