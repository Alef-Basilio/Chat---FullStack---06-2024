const nextTheme = localStorage.getItem('nextTheme');

export default function LoadReceivedTheme() {
    if (nextTheme == 'Light') {
        document.getElementsByClassName('received')[0].style.backgroundColor = 'white';
        document.getElementById('receivedTextarea').style.color = 'black';
    } else if (nextTheme == 'Dark') {
        document.getElementsByClassName('received')[0].style.backgroundColor = '#666';
        document.getElementById('receivedTextarea').style.color = 'white';
    } else {
        document.getElementsByClassName('received')[0].style.backgroundColor = '#666';
        document.getElementById('receivedTextarea').style.color = 'white';
    }
}