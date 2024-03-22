window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

var navItems = document.getElementsByClassName('nav-item');

for (var i = 0; i < navItems.length; i++) {
    navItems[i].addEventListener('mouseover', function() {
        this.classList.add('active');
    });

    navItems[i].addEventListener('mouseout', function() {
        this.classList.remove('active');
    });
}
