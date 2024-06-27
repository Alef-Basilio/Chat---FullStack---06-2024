export default function sendResize() {
    const messageSent = document.querySelectorAll('textarea')

    for (let i = 0; i < messageSent.length; i++) {
        messageSent[i].style.width = '15vw';
        
        if (window.innerWidth > 1100) {
            if (messageSent[i].textContent.length > 90) {
                messageSent[i].style.height = `${messageSent[i].scrollHeight}px`;
                messageSent[i].style.width = `70vw`;
            } else if (messageSent[i].textContent.length <= 90 && messageSent[i].textContent.length > 50) {
                messageSent[i].style.height = `${messageSent[i].scrollHeight}px`;
                messageSent[i].style.width = `50vw`;
            } else if (messageSent[i].textContent.length <= 50 && messageSent[i].textContent.length > 30) {
                messageSent[i].style.height = `${messageSent[i].scrollHeight}px`;
                messageSent[i].style.width = `30vw`;
            } else {
                messageSent[i].style.height = `${messageSent[i].scrollHeight}px`;
                messageSent[i].style.width = '100%';
            }
        } else if (window.innerWidth > 830) {
            if (messageSent[i].textContent.length > 90) {
                messageSent[i].style.height = `${messageSent[i].scrollHeight / 1.5}px`;
                messageSent[i].style.width = `70vw`;
            } else if (messageSent[i].textContent.length <= 90 && messageSent[i].textContent.length > 50) {
                messageSent[i].style.height = `${messageSent[i].scrollHeight / 1.5}px`;
                messageSent[i].style.width = `50vw`;
            } else if (messageSent[i].textContent.length <= 50 && messageSent[i].textContent.length > 30) {
                messageSent[i].style.height = `${messageSent[i].scrollHeight / 1.2}px`;
                messageSent[i].style.width = `30vw`;
            } else {
                messageSent[i].style.height = `${messageSent[i].scrollHeight}px`;
                messageSent[i].style.width = '100%';
            }
        } else if (window.innerWidth > 500) {
            if (messageSent[i].textContent.length > 90) {
                messageSent[i].style.height = `${messageSent[i].scrollHeight / 2}px`;
                messageSent[i].style.width = `70vw`;
            } else if (messageSent[i].textContent.length <= 90 && messageSent[i].textContent.length > 50) {
                messageSent[i].style.height = `${messageSent[i].scrollHeight / 2}px`;
                messageSent[i].style.width = `50vw`;
            } else if (messageSent[i].textContent.length <= 50 && messageSent[i].textContent.length > 30) {
                messageSent[i].style.height = `${messageSent[i].scrollHeight / 1.7}px`;
                messageSent[i].style.width = `30vw`;
            } else {
                messageSent[i].style.height = `${messageSent[i].scrollHeight}px`;
                messageSent[i].style.width = '100%';
            }
        } else {
            if (messageSent[i].textContent.length > 90) {
                messageSent[i].style.height = `${messageSent[i].scrollHeight / 2.5}px`;
                messageSent[i].style.width = `70vw`;
            } else if (messageSent[i].textContent.length <= 90 && messageSent[i].textContent.length > 50) {
                messageSent[i].style.height = `${messageSent[i].scrollHeight / 2.5}px`;
                messageSent[i].style.width = `50vw`;
            } else if (messageSent[i].textContent.length <= 50 && messageSent[i].textContent.length > 30) {
                messageSent[i].style.height = `${messageSent[i].scrollHeight / 2.1}px`;
                messageSent[i].style.width = `30vw`;
            } else {
                messageSent[i].style.height = `${messageSent[i].scrollHeight}px`;
                messageSent[i].style.width = '100%';
            }
        }
    }
}