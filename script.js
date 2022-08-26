const mobileNavShow = document.querySelector('.mobile-nav-show');
const mobileNavHide = document.querySelector('.mobile-nav-hide');
const mobileNav = document.querySelectorAll('.mobile-nav-toggle');
const navBar = document.querySelector('.navbar');


mobileNav.forEach(el => {
    el.addEventListener('click', function(event) {
        event.preventDefault();
        mobileNavToggle();
    })
})

function mobileNavToggle() {
    navBar.classList.toggle('nav-active');
    mobileNavHide.classList.toggle('d-none');
    mobileNavShow.classList.toggle('d-none');
}


const navDropdowns = document.querySelectorAll('.dropdown > ul');

navDropdowns.forEach(el => {
  el.addEventListener('click', function(event) {
    if (document.querySelector('.nav-active')) {
      event.preventDefault();
      navDropdowns.classList.toggle('dropdown-active');
    }
  })
});