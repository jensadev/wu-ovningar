/*
 * Vänta på att sidan har laddats.
 * Läs mer, https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event
 */
window.addEventListener('load', (event) => {
  console.log('page is fully loaded');

  // Hämta de element vi arbetar med
  const btn = document.querySelector('#menu');
  const sidenav = document.querySelector('.sidenav');
  const main = document.querySelector('main');
  const body = document.querySelector('body');

  // lyssna efter klick på menu knappen
  btn.addEventListener('click', () => {
    // toggla sidenav-open klassen på sidenav
    sidenav.classList.toggle('sidenav-open');
    // Byt ut texten på knappen om klassen sidenav-open finns på sidenav
    btn.textContent = sidenav.classList.contains('sidenav-open') ? 'Close' : 'Menu';
    // main.classList.toggle('container-sideopen'); // push container
    // body.classList.toggle('smoke'); // darken rest of page
  }, false);
});