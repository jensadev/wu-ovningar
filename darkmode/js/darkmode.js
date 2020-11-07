// /*
//  * Vänta på att sidan har laddats.
//  * Läs mer, https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event
//  */
// window.addEventListener('load', (event) => {
//     console.log('page is fully loaded');
     
//     let sw = document.querySelector('#switch');
//     let navbar = document.querySelector('.navbar');
//     let darkmode = false;

//     sw.addEventListener('click', (e) => {
        
//         darkmode = sw.checked === false ? darkmode = false : darkmode = true;
//         console.log(darkmode)
//         if(darkmode === true) {
//             navbar.classList.toggle('dark');
//         } else {
//             navbar.classList.toggle('dark');
//         }
//     });

// });