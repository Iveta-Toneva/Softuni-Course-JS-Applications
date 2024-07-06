function getInfo() {

    let stopIdElement = document.getElementById('stopId');
    let stopNameElement = document.getElementById('stopName');
    let busesUlElement = document.getElementById('buses');
    busesUlElement.innerHTML = '';
    let url = `http://localhost:3030/jsonstore/bus/businfo/${stopIdElement.value}`;

    fetch(url)
        .then(res => res.json())
        .then(data => {
            stopNameElement.textContent = data.name;
            Object.entries(data.buses).forEach(entry => {
                let liElement = document.createElement('li');
                liElement.textContent = `Bus ${entry[0]} arrives in ${entry[1]} minutes`;
                busesUlElement.appendChild(liElement);
            });
        })
        .catch(reason => {
            stopNameElement.textContent = 'Error';
        })

}