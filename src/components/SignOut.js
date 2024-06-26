import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

import initializeApp from './InitializeApp';

import '../styles/SignOut.css';

initializeApp();

const auth = firebase.auth();

let con = 'Dark';

export default function SignOut() {
    return auth.currentUser ? 
        <div className='signOut'>
            <h3 className='light' onClick={changeTheme}>{con}</h3>
            <span>Chat</span>
            <button onClick={() => auth.signOut()}>Sign Out</button>
        </div> : <></>;
}

function changeTheme() {
    const h3 = document.getElementsByClassName('light')[0];
    const standard = document.getElementById('standard');

    if (h3.textContent == 'Dark') {
        document.getElementsByClassName('App')[0].style.background = 'linear-gradient(220deg, rgba(32,33,0,1) 0%, rgba(0,24,102,1) 100%)';
        h3.textContent = 'Light';
        con = 'Light';
        localStorage.setItem('theme', 'light');
        standard.style.backgroundColor = 'white';
    } else {
        document.getElementsByClassName('App')[0].style.background = 'white';
        h3.textContent = 'Dark';
        con = 'Dark';
        localStorage.setItem('theme', 'dark');
        standard.style.backgroundColor = '#999';
    }
}

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

function standardColor(theme) {
    setTimeout(() => {
        if (theme == 'light') {
            document.getElementById('standard').style.backgroundColor = 'white';
        } else {
            document.getElementById('standard').style.backgroundColor = '#999';
        }
    }, 1000)
}

function standardColorLoaded(theme = localStorage.getItem('theme')) {
    const div = document.querySelector('section').firstChild

    if  (div.nextSibling.classList.contains('signOut')) {
        if (theme == 'light') {
            document.getElementById('standard').style.backgroundColor = 'white';
        } else {
            document.getElementById('standard').style.backgroundColor = '#999';
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