function solve() {

    let arriveInputButton = document.getElementById('arrive');
    let departInputButton = document.getElementById('depart');
    let url = `http://localhost:3030/jsonstore/bus/schedule/depot`;
    let infoElement = document.querySelector('.info');
    let name = '';

    function depart() {

        fetch(url)
            .then(res => res.json())
            .then(data => {
                infoElement.textContent = `Next stop ${data.name}`;
                name = data.name;
                let nextId = data.next;
                url = `http://localhost:3030/jsonstore/bus/schedule/${nextId}`;
            })
            .catch(reason => {
                infoElement.textContent = 'Error';
                departInputButton.setAttribute('disabled', 'disabled');
                arriveInputButton.setAttribute('disabled', 'disabled');
            });


        departInputButton.setAttribute('disabled', 'disabled');
        arriveInputButton.removeAttribute('disabled');

    }

    function arrive() {
        infoElement.textContent = `Arriving at ${name}`;
        departInputButton.removeAttribute('disabled');
        arriveInputButton.setAttribute('disabled', 'disabled');
    }

    return {
        depart,
        arrive
    };
}

let result = solve();