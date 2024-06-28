export default function LoadMessageTheme() {
    const nextTheme = localStorage.getItem('nextTheme');

    if (nextTheme == 'Light') {
        document.getElementsByClassName('received')[0].style.backgroundColor = 'rgb(255, 255, 255)';
        document.getElementById('receivedTextarea').style.color = 'rgb(0, 0, 0)';
    } else if (nextTheme == 'Dark') {
        document.getElementsByClassName('received')[0].style.backgroundColor = '#666';
        document.getElementById('receivedTextarea').style.color = 'rgb(255, 255, 255)';
    } else {
        document.getElementsByClassName('received')[0].style.backgroundColor = '#666';
        document.getElementById('receivedTextarea').style.color = 'rgb(255, 255, 255)';
    }
}