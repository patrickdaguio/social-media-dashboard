const body = document.querySelector('body');
const toggleSwitch = document.querySelector('.toggle-switch__input');
const cards = document.querySelectorAll('.card');

function changeTheme() {
    if (body.classList.contains("body-dark-theme")) {
        body.classList.replace("body-dark-theme", "body-light-theme")
    } else {
        body.classList.replace("body-light-theme", "body-dark-theme")
    }
    cardTransition()
    setTimeout(resetCardsTransition, 1000)
}

function cardTransition() {
    cards.forEach((card, index) => {
        card.style.transition = `all .5s ease ${index / 10}s`;
        if (card.classList.contains("card-dark-theme")) {
            card.classList.replace("card-dark-theme", "card-light-theme")
        } else {
            card.classList.replace("card-light-theme", "card-dark-theme")
        }
    })
}

function resetCardsTransition() {
    cards.forEach(card => card.style.transition = `all .3s`);
}

toggleSwitch.addEventListener('click', changeTheme)