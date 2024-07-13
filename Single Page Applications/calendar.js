window.addEventListener('load', calendar);

function calendar() {

    let yearSection = document.querySelector('#years');
    clear();
    yearSection.style.display = 'block';
    let tdElements = document.querySelectorAll('#years .day');

    tdElements.forEach(el => {
        el.addEventListener('click', (e) => {
            let year = e.currentTarget.textContent;
            year = year.trim();
            renderMonths(year);
        });
    });

}

function renderMonths(year) {

    clear();

    let montsSection = document.querySelector(`#year-${year}`);

    montsSection.style.display = 'block';

    let tdElements = montsSection.querySelectorAll('td');

    tdElements.forEach(el => {

        el.addEventListener('click', (e) => {
            renderDays(e, year);
        });
    })

    let caption = montsSection.querySelector('caption');
    caption.addEventListener('click', () => {
        calendar();
    });

}


function renderDays(e, year) {

    let month = e.currentTarget.textContent;

    let months = {
        'Jan': 1,
        'Feb': 2,
        'Mar': 3,
        'Apr': 4,
        'May': 5,
        'Jun': 6,
        'Jul': 7,
        'Aug': 8,
        'Sept': 9,
        'Oct': 10,
        'Nov': 11,
        'Dec': 12
    }


    month = month.trim();
    let section = document.querySelector(`#month-${year}-${months[month]}`);
    clear();

    section.style.display = 'block';

    let caption = section.querySelector('caption');

    caption.addEventListener('click', () => {

        clear();
        let year = caption.textContent.split(' ')[1];
        renderMonths(year);

    });

}

function clear() {

    let sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
}


