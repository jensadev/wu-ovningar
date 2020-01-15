/*
 * Vänta på att sidan har laddats.
 * Läs mer, https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event
 */
window.addEventListener('load', (event) => {
    console.log('page is fully loaded');

    let form = document.querySelector("form");

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log("Stop form from submitting and reloading");

        let search = document.querySelector('#search-field');

        let searches = document.querySelector('#searches');
        let li = document.createElement('li');
        li.textContent = search.value;
        search.value = "";
        searches.appendChild(li);
    });

});