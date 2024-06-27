export default function standardColor(theme) {
    setTimeout(() => {
        if (theme == 'light') {
            document.getElementById('standard').style.backgroundColor = 'white';
            document.getElementById('example').style.color = 'black';
        } else {
            document.getElementById('standard').style.backgroundColor = '#111';
            document.getElementById('example').style.color = 'white';
        }
    }, 1000)
}

let con = 'Dark';

window.onload = () => {
    const theme = localStorage.getItem('theme');

    if (theme == 'light') {
        document.getElementsByClassName('App')[0].style.background = 'linear-gradient(220deg, rgba(32,33,0,1) 0%, rgba(0,24,102,1) 100%)';
        con = 'Light';
        standardColor(theme);
    } else {
        document.getElementsByClassName('App')[0].style.background = 'white';
        con = 'Dark';
        standardColor(theme);
    }
}

function standardColorLoaded(theme = localStorage.getItem('theme')) {
    const div = document.querySelector('section').firstChild

    if  (div.nextSibling.classList.contains('signOut')) {
        if (theme == 'light') {
            document.getElementById('standard').style.backgroundColor = 'white';
            document.getElementById('example').style.color = 'black';
        } else {
            document.getElementById('standard').style.backgroundColor = '#111';
            document.getElementById('example').style.color = 'white';
        }
    }
}

let sla = 0;

setInterval(() => {
    if (sla == 0 && document.querySelector('section').childElementCount > 1) {
        standardColorLoaded();
        sla = 1;
    } //else { console.log(document.querySelector('section').childElementCount)}
}, 1000);