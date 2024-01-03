
// script.js

// homeButton function
function homeButton() {
    const homeBtn = document.querySelector('.home__btn');
    homeBtn.addEventListener('click', function () {
        document.querySelector('.home__title').textContent = 'Scroll Project';
        document.querySelector('.home__text').textContent = 'Navigate through the page sections by clicking on the navigation items. Experience a seamless scrolling effect for a smoother browsing experience ? ';
    });
}


// smooth scrolling
function scrollFunction() {
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', smoothScroll);
    });

    function smoothScroll(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
    }
}

// Toggle Navbar for Small Screens
function navToggle() {
    const navbar = document.querySelector('.navbar');
    const navRight = document.querySelector('.nav__right');

    navbar.addEventListener('click', function () {
        navbar.classList.toggle('show-nav');
    });
}

// tabs function

function showTab(tabId) {
    // Hide all tabs
    var tabs = document.getElementsByClassName('tab-content');
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('active-tab');
    }

    // Show the selected tab
    document.getElementById(tabId).classList.add('active-tab');

}



document.addEventListener('DOMContentLoaded', function () {
    scrollFunction();
    homeButton();
    navToggle();
    showTab('tab1');
});