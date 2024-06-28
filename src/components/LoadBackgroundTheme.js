const nextTheme = localStorage.getItem('nextTheme');

export default function LoadBackgroundTheme() {
    setTimeout(() => {
        if (nextTheme == 'Light') {
            document.getElementsByClassName('App')[0].style.background = 
            'linear-gradient(220deg, rgba(32,33,0,1) 0%, rgba(0,24,102,1) 100%)';
        } else {
            document.getElementsByClassName('App')[0].style.background = 'rgb(255, 255, 255)';
        }
    }, 1000);
}

window.addEventListener('load', LoadBackgroundTheme);