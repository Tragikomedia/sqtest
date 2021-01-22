const button = document.body.querySelector('.navbar i');
const navbar = document.body.querySelector('.navbar');
const menu = document.body.querySelector('.navbar ul');
const links = document.body.querySelectorAll('a');

button.addEventListener('click', toggleSideMenu);

links.forEach(link => link.addEventListener('click', () => {
    if (menu.style.display) toggleSideMenu();
}))

function toggleSideMenu() {
    if (!menu.style.display || menu.style.display === "none") {
        menu.style.display = "flex";
        navbar.style.backgroundColor = "#131325"
    }
    else {
        menu.removeAttribute('style');
        navbar.removeAttribute('style');
    }  
}