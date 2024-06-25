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

    if (h3.textContent == 'Dark') {
        document.getElementsByClassName('App')[0].style.background = 'linear-gradient(220deg, rgba(32,33,0,1) 0%, rgba(0,24,102,1) 100%)';
        h3.textContent = 'Light';
        con = 'Light';
        localStorage.setItem('theme', 'light');
    } else {
        document.getElementsByClassName('App')[0].style.background = 'white';
        h3.textContent = 'Dark';
        con = 'Dark';
        localStorage.setItem('theme', 'dark');
    }
}

window.onload = () => {
    const theme = localStorage.getItem('theme');

    if (theme == 'light') {
        document.getElementsByClassName('App')[0].style.background = 'linear-gradient(220deg, rgba(32,33,0,1) 0%, rgba(0,24,102,1) 100%)';
        con = 'Light';
    } else {
        document.getElementsByClassName('App')[0].style.background = 'white';
        con = 'Dark';
    }
}