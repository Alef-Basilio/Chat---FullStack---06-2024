import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

import initializeApp from './InitializeApp';

import '../styles/header.css';

initializeApp();

const auth = firebase.auth();

let nextTheme = localStorage.getItem('nextTheme');

export default function Header() {
    const signOut = Header;

    return auth.currentUser ? 
        <header>
            <h3 className='nextTheme' onClick={() => changeTheme()}>{nextTheme}</h3>
            <span>Chatie</span>
            <button onClick={() => auth.signOut()}>Sign Out</button>
        </header> : <></>;
}

function changeTheme() {
    const h3 = document.getElementsByClassName('nextTheme')[0];
    const received = document.getElementsByClassName('received')[0];
    const receivedTextarea = document.getElementById('receivedTextarea');

    nextTheme = localStorage.getItem('nextTheme');

    if (nextTheme == 'Dark') {
        document.getElementsByClassName('App')[0].style.background = 
        'linear-gradient(220deg, rgba(32,33,0,1) 0%, rgba(0,24,102,1) 100%)';
        h3.textContent = 'Light';
        localStorage.setItem('nextTheme', 'Light');
        received.style.backgroundColor = 'white';
        receivedTextarea.style.color = 'black';
    } else {
        document.getElementsByClassName('App')[0].style.background = 'white';
        h3.textContent = 'Dark';
        localStorage.setItem('nextTheme', 'Dark');
        received.style.backgroundColor = '#666';
        receivedTextarea.style.color = 'white';
    }
}