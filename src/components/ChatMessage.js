import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import InitializeApp from './InitializeApp';
import LoadReceivedTheme from './LoadReceivedTheme';
import MessageMeasures from './MessageMeasures';

import '../styles/ChatMessage.css';

InitializeApp();

const auth = firebase.auth();
const firestore = firebase.firestore();

export default function ChatMessage(props) {
const { text, uid, photoURL, id } = props.message;
const messageClass = uid === auth.currentUser.uid ? 'sent' : '';

    return (
        <>
            <div className={`message ${messageClass}`}>
                <div className='actions'>
                    <img src={photoURL} alt='user_image'></img>
                    <div>
                        <button id={'modify' + id} onClick={() => Modify(id)}>Modify</button>
                        <button className='delete' onClick={() => Delete(id)}>Delete</button>
                    </div>
                </div>
                <div className='content'>
                    <textarea readOnly id={'textarea' + id} key={id} onChange={() => MessageMeasures}>{text}</textarea>
                </div>
            </div>
        </>
    )
}

window.setInterval(LoadReceivedTheme, 2000);
MessageMeasures();
window.setInterval(MessageMeasures, 2000);

function Modify(id) {
    const textarea = document.getElementById(`textarea${id}`);
    const modify = document.getElementById(`modify${id}`);

    if (textarea.readOnly) {
        textarea.removeAttribute('readOnly');
        modify.textContent = 'Send';
        modify.style.backgroundColor = 'green';
    } else {
        textarea.setAttribute('readOnly', 'true');
        modify.textContent = 'Modify';
        modify.style.backgroundColor = 'yellow';
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