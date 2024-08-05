const bars = document.getElementById('fa-bars');
const xmark = document.getElementById('fa-xmark');
const sidemenu = document.getElementById('side-menu');


bars.addEventListener('click', () => {
  bars.classList.toggle('active');
  xmark.classList.toggle('active');
  sidemenu.classList.toggle('activelist');
  
});

xmark.addEventListener('click', () => {
  bars.classList.toggle('active');
  xmark.classList.toggle('active');
  sidemenu.classList.toggle('activelist');

});