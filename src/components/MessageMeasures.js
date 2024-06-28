export default function MessageMeasures() {
    const allTextareas = document.querySelectorAll('textarea')
    const allMessages = document.getElementsByClassName('message');

    for (let i = 0; i < allTextareas.length; i++) {
        const vwOne = '15vw';
        const vwTwo = '30vw';
        const vwThree = '50vw';
        const vwFour = '70vw';
        let textContent = allTextareas[i].textContent;

        allTextareas[i].style.width = '100%';
        
        if (window.innerWidth >= 1120) {
            if (textContent.length > 90) {
                allMessages[i].style.width = vwFour;
            } else if (textContent.length <= 90 && textContent.length > 50) {
                allMessages[i].style.width = vwThree;
            } else if (textContent.length <= 50 && textContent.length > 30) {
                allMessages[i].style.width = vwTwo;
            } else {
                allMessages[i].style.width = vwOne;
            }
        } else if (window.innerWidth >= 550) {
            if (textContent.length > 90) {
                allMessages[i].style.width = vwFour;
            } else if (textContent.length <= 90 && textContent.length > 50) {
                allMessages[i].style.width = vwThree;
            } else if (textContent.length <= 50 && textContent.length > 30) {
                allMessages[i].style.width = vwTwo;
            } else {
                allMessages[i].style.width = vwTwo;
            }
        } else if (window.innerWidth >= 330) {
            if (textContent.length > 90) {
                allMessages[i].style.width = vwFour;
            } else if (textContent.length <= 90 && textContent.length > 50) {
                allMessages[i].style.width = vwThree;
            } else if (textContent.length <= 50 && textContent.length > 30) {
                allMessages[i].style.width = vwThree;
            } else {
                allMessages[i].style.width = vwThree;
            }
        } else {
            if (textContent.length > 90) {
                allMessages[i].style.width = vwFour;
            } else if (textContent.length <= 90 && textContent.length > 50) {
                allMessages[i].style.width = vwFour;
            } else if (textContent.length <= 50 && textContent.length > 30) {
                allMessages[i].style.width = vwFour;
            } else {
                allMessages[i].style.width = vwFour;
            }
        }

        allTextareas[i].style.height = '1px';
        allTextareas[i].style.height = `${allTextareas[i].scrollHeight}px`;
    }
}