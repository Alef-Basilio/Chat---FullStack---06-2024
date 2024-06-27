import { useCollectionData } from 'react-firebase-hooks/firestore';
import React, { useRef } from 'react';

import ChatMessage from './ChatMessage';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import InitializeApp from './InitializeApp';
//import LoadReceivedTheme from './LoadReceivedTheme';
//import MessageMeasures from './MessageMeasures';

import '../styles/ChatRoom.css';

InitializeApp();

const auth = firebase.auth();
const firestore = firebase.firestore();

export default function ChatRoom() {
    const messageRef = firestore.collection('messages');
    const query = messageRef.orderBy('createdAt').limit(25);
    const lastMessage = messageRef.orderBy('id', 'desc').limit(1);
    const [messages] = useCollectionData(query, {idField: 'id'});

    const [formValue, setFormValue] = React.useState('');
    const [formId, setformId] = React.useState(1);

    const scrollDown = useRef();
    
    const sendMessage = async (e) => {
        e.preventDefault();
    
        const { uid, photoURL } = auth.currentUser;
    
        await messageRef.add({
            text: formValue,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            uid,
            photoURL,
            id: firebase.firestore.FieldValue.increment(formId)
        });

        setFormValue('');

        //LoadReceivedTheme();
        //MessageMeasures();

        scrollDown.current.scrollIntoView({ behavior: 'smooth' });
    }

    lastMessage.get().then((querySnapshot) => {
        querySnapshot.forEach(doc => setformId(doc.data().id + 1));
    });
  
    return (
      <>
        <div className='received message'>
            <div className='actions'>
                <img src={'../google.png'} alt='google_logo'></img>
            </div>
            <div className='content'>
                <textarea id='receivedTextarea' type='text' readOnly 
                    defaultValue={'exampleaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'}>
                </textarea>
            </div>
        </div>
        <main>
            {messages ? messages.map(msg => <ChatMessage key={msg.id} message={msg}/>) : <></>}
            <div ref={scrollDown}></div>
        </main>
  
        <form onSubmit={sendMessage}>
            <div>
                <input value={formValue} onChange={(e) => setFormValue(e.target.value)} 
                    placeholder="say something nice"/>
                <button type='submit'>Send</button>
            </div>
        </form>
      </>
    )
}