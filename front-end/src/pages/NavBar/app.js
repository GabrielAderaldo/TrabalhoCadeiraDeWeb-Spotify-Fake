export function func() {
    const burguer = document.querySelector('.burguer');
    const nav = document.querySelector('.nav-link');
    const navLinks = document.querySelectorAll('.nav-link li');
    //Toggle nav
    nav.classList.toggle('nav-active');

    //Animeted Links
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';

        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;

        }
    });

    burguer.classList.toggle('toggle');

}


