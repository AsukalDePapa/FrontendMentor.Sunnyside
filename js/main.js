const menu = document.getElementById('menu');
const nav = document.querySelector('nav');

menu.addEventListener('click', () => {
    nav.classList.toggle('show');
})

const ul = document.querySelector('ul').querySelectorAll('a');

ul.forEach(e => {
    e.addEventListener('click', function() {
        ul.forEach(ul => ul.classList.remove('active'));

        this.classList.add('active');
    })
})

// ul.addEventListener('click')