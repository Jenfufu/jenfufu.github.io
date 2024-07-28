let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

window.onscroll = () => {
  menu.classList.remove('bx-x');
  navbar.classList.remove('active');
};

const sr = ScrollReveal({
  distance: '60px',
  duration: 2500,
  reset: true,
});

function setFavicon() {
  var link = $('link[type="image/x-icon"]').remove().attr("href");
  $('<link href="'+ link +'" rel="icon" type="image/x-icon" />').appendTo('head');
}

sr.reveal('.home-text', { delay: 200, origin: 'top' });
sr.reveal('.home-img', { delay: 400, origin: 'top' });
sr.reveal('.about, .cta, .resume, .contact, .footer', { delay: 200, origin: 'top' });