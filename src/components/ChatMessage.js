import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import initializeApp from './InitializeApp';

import '../styles/ChatMessage.css';

initializeApp();

const auth = firebase.auth();
const firestore = firebase.firestore();

export default function ChatMessage(props) {
const { text, uid, photoURL, id } = props.message;
const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

    return (
        <>
            <div className={`message ${messageClass}`}>
                <div className='actions'>
                    <img src={photoURL}></img>
                    <div>
                        <button className={'modify' + id} onClick={() => Modify(id)}>Modify</button>
                        <button className='delete' onClick={() => Delete(id)}>Delete</button>
                    </div>
                </div>
                <div className='content'>
                    <textarea readOnly id={'textarea' + id} key={id} onChange={() => adjustTextareaHeight()}>{text}</textarea>
                </div>
            </div>
        </>
    )
}

function Modify(id) {
    const textarea = document.getElementById(`textarea${id}`);
    const modify = document.getElementsByClassName('modify'+id+'');

    if (textarea.readOnly) {
        textarea.removeAttribute('readOnly');
        modify[0].textContent = 'Send';
        modify[0].style.backgroundColor = 'green';
    } else {
        textarea.setAttribute('readOnly', 'true');
        modify[0].textContent = 'Modify';
        modify[0].style.backgroundColor = 'yellow';
    }
    

    firestore.collection('messages').where('id', '==', id).get().then(querySnapshot => {
        querySnapshot.forEach(doc => {
            firestore.collection('messages').doc(`${doc.id}`).update({
                text: textarea.value
            })
        })
    })
}
  
function Delete(id) {
    firestore.collection('messages').where('id', '==', id).get().then(querySnapshot => {
        querySnapshot.forEach(doc => {
            firestore.collection('messages').doc(`${doc.id}`).delete()
        })
    })
}

function adjustTextareaHeight() {
    const textarea = document.querySelectorAll('textarea');

    for (let i = 0; i < textarea.length; i++) {
        textarea[i].style.height = '1px';
        textarea[i].style.height = `${textarea[i].scrollHeight}px`;
    }
}

setTimeout(adjustTextareaHeight, 1000);