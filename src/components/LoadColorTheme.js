const nextTheme = localStorage.getItem('nextTheme');

export default function LoadBackgroundTheme() {
    setTimeout(() => {
        if (nextTheme == 'Light') {
            document.getElementsByClassName('App')[0].style.background = 
            'linear-gradient(220deg, rgba(32,33,0,1) 0%, rgba(0,24,102,1) 100%)';
            //document.getElementsByClassName('received')[0].style.backgroundColor = 'white';
            //document.getElementById('receivedTextarea').style.color = 'black';
        } else {
            document.getElementsByClassName('App')[0].style.background = 'white';
            //document.getElementsByClassName('received')[0].style.backgroundColor = '#666';
            //document.getElementById('receivedTextarea').style.color = 'white';
        }
    }, 1000);
}

window.addEventListener('load', LoadBackgroundTheme);