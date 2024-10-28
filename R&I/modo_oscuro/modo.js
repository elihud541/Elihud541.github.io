const bdark = document.querySelector('#bdark');
const body = document.querySelector('body');

load();

bdark.addEventListener('click', e => {
    body.classList.toggle('darkmode');
    const isDarkMode = body.classList.contains('darkmode');
    store(isDarkMode);
    updateButtonText(isDarkMode);
});

function load() {
    const darkmode = localStorage.getItem('darkmode');

    if (!darkmode) {
        store('false'); 
        updateButtonText(false);
    } else if (darkmode === 'true') {
        body.classList.add('darkmode');
        updateButtonText(true);
    } else {
        updateButtonText(false);
    }
}

function store(value) {
    localStorage.setItem('darkmode', value);
}

function updateButtonText(isDarkMode) {
    if (isDarkMode) {
        bdark.textContent = 'Modo Claro';
    } else {
        bdark.textContent = 'Modo Oscuro';
    }
}
