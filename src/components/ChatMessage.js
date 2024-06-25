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
                        <button onClick={() => Modify(id)}>Modify</button>
                        <button onClick={() => Delete(id)}>Delete</button>
                    </div>
                </div>
                <div className='content'>
                    <p>{text}</p>
                </div>
            </div>
        </>
    )
}

function Modify(id) {
    firestore.collection('messages').where('id', '==', id).get().then(querySnapshot => {
        querySnapshot.forEach(doc => {
            console.log(doc.id);
            firestore.collection('messages').doc(`${doc.id}`).update({
                text: 'Modified!1235'
            })
        })
    })
}
  
function Delete(id) {
    firestore.collection('messages').where('id', '==', id).get().then(querySnapshot => {
        querySnapshot.forEach(doc => {
            console.log(doc.id);
            firestore.collection('messages').doc(`${doc.id}`).delete()
        })
    })
}