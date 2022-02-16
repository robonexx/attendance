const navBtn = document.querySelector('.nav-btn');
const nav = document.querySelector('.nav');

navBtn.addEventListener('click', function () {
  nav.classList.toggle('active');
  navBtn.classList.toggle('open');
/* 
  nav.style.transform = 'translateX(0)';
  nav.style.background = 'black';
  nav.style.width = '100vw';
    nav.style.height = 'fit-content';
    nav.style.position = "absolute" */

  console.log('nav active');
});
