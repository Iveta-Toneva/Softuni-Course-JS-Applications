window.onload = students;

function students() {

    let firstNameInput = document.querySelector('input[name=firstName]');
    let lastNameInput = document.querySelector('input[name=lastName]');
    let facultyNumberInput = document.querySelector('input[name=facultyNumber]');
    let gradeInput = document.querySelector('input[name=grade]');
    let submitButton = document.querySelector('#submit');
    let url = 'http://localhost:3030/jsonstore/collections/students';
    let tableBody = document.querySelector('table tbody');

    showStudents();

    submitButton.addEventListener('click', (event) => {

        event.preventDefault();

        if (!firstNameInput.value || !lastNameInput.value) {
            return;
        }

        if (!facultyNumberInput.value || typeof facultyNumberInput.value !== 'string') {
            return;
        }
        if (!gradeInput.value || Number.isNaN(gradeInput.value)) {
            return;
        }

        let student = {
            firstName: firstNameInput.value,
            lastName: lastNameInput.value,
            facultyNumber: facultyNumberInput.value,
            grade: gradeInput.value
        };

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(student)
        })
            .then(res => res.json())
            .then(data => {
                facultyNumberInput.value = '';
                lastNameInput.value = '';
                facultyNumberInput.value = '';
                gradeInput.value = '';
                showStudents();
            });


    });

    function showStudents() {
        tableBody.innerHTML = '';
        fetch(url)
            .then(res => res.json())
            .then(data => {
                Object.values(data).forEach(student => {
                    let tableRow = document.createElement('tr');
                    let tdFirstName = document.createElement('td');
                    tdFirstName.textContent = student.firstName;
                    let tdLastName = document.createElement('td');
                    tdLastName.textContent = student.lastName;
                    let tdNumber = document.createElement('td');
                    tdNumber.textContent = student.facultyNumber;
                    let tdGrade = document.createElement('td');
                    tdGrade.textContent = student.grade;
                    tableRow.appendChild(tdFirstName);
                    tableRow.appendChild(tdLastName);
                    tableRow.appendChild(tdNumber);
                    tableRow.appendChild(tdGrade);
                    tableBody.appendChild(tableRow);

                });
            });
    }

}