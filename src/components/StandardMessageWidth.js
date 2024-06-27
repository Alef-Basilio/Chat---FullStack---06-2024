export default function sendResize2() {
    const messageSent = document.getElementById('example');

    messageSent.style.width = '15vw';
    if (window.innerWidth > 1100) {
        if (messageSent.textContent.length > 90) {
            messageSent.style.height = `${messageSent.scrollHeight}px`;
            messageSent.style.width = `70vw`;
        } else if (messageSent.textContent.length <= 90 && messageSent.textContent.length > 50) {
            messageSent.style.height = `${messageSent.scrollHeight}px`;
            messageSent.style.width = `50vw`;
        } else if (messageSent.textContent.length <= 50 && messageSent.textContent.length > 30) {
            messageSent.style.height = `${messageSent.scrollHeight}px`;
            messageSent.style.width = `30vw`;
        } else {
            messageSent.style.height = `${messageSent.scrollHeight}px`;
            messageSent.style.width = '100%';
        }
    } else if (window.innerWidth > 830) {
        if (messageSent.textContent.length > 90) {
            messageSent.style.height = `${messageSent.scrollHeight / 1.5}px`;
            messageSent.style.width = `70vw`;
        } else if (messageSent.textContent.length <= 90 && messageSent.textContent.length > 50) {
            messageSent.style.height = `${messageSent.scrollHeight / 1.5}px`;
            messageSent.style.width = `50vw`;
        } else if (messageSent.textContent.length <= 50 && messageSent.textContent.length > 30) {
            messageSent.style.height = `${messageSent.scrollHeight / 1.5}px`;
            messageSent.style.width = `30vw`;
        } else {
            messageSent.style.height = `${messageSent.scrollHeight}px`;
            messageSent.style.width = '100%';
        }
    } else if (window.innerWidth > 500) {
        if (messageSent.textContent.length > 90) {
            messageSent.style.height = `${messageSent.scrollHeight / 2}px`;
            messageSent.style.width = `70vw`;
        } else if (messageSent.textContent.length <= 90 && messageSent.textContent.length > 50) {
            messageSent.style.height = `${messageSent.scrollHeight / 2}px`;
            messageSent.style.width = `50vw`;
        } else if (messageSent.textContent.length <= 50 && messageSent.textContent.length > 30) {
            messageSent.style.height = `${messageSent.scrollHeight / 2}px`;
            messageSent.style.width = `30vw`;
        } else {
            messageSent.style.height = `${messageSent.scrollHeight}px`;
            messageSent.style.width = '100%';
        }
    } else {
        if (messageSent.textContent.length > 90) {
            messageSent.style.height = `${messageSent.scrollHeight / 2.5}px`;
            messageSent.style.width = `70vw`;
        } else if (messageSent.textContent.length <= 90 && messageSent.textContent.length > 50) {
            messageSent.style.height = `${messageSent.scrollHeight / 2.5}px`;
            messageSent.style.width = `50vw`;
        } else if (messageSent.textContent.length <= 50 && messageSent.textContent.length > 30) {
            messageSent.style.height = `${messageSent.scrollHeight / 2.5}px`;
            messageSent.style.width = `30vw`;
        } else {
            messageSent.style.height = `${messageSent.scrollHeight}px`;
            messageSent.style.width = '100%';
        }
    }
}