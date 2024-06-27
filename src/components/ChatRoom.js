import { useCollectionData } from 'react-firebase-hooks/firestore';
import React, { useRef } from 'react';

import ChatMessage from './ChatMessage';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import initializeApp from './InitializeApp';
import MessageWidth from './MessageWidth';
import StandardMessageWidth from './StandardMessageWidth';

import '../styles/ChatRoom.css';
//import { orderBy } from 'firebase/firestore';

initializeApp();

const auth = firebase.auth();
const firestore = firebase.firestore();

export default function ChatRoom() {
    const dummy = useRef();
    const messageRef = firestore.collection('messages');
    const query = messageRef.orderBy('createdAt').limit(25);
    const [messages] = useCollectionData(query, {idField: 'id'});
    const [formValue, setFormValue] = React.useState('');
    const [x, setX] = React.useState(1);
    const lastMessage = messageRef.orderBy('id', 'desc').limit(1);

    const sendMessage = async (e) => {
        e.preventDefault();
    
        const { uid, photoURL } = auth.currentUser;
    
        await messageRef.add({
            text: formValue,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            uid,
            photoURL,
            id: firebase.firestore.FieldValue.increment(x)
        });

        setFormValue('');

        MessageWidth();

        dummy.current.scrollIntoView({ behavior: 'smooth' });
    }

    lastMessage.get().then((querySnapshot) => {
        querySnapshot.forEach(doc => setX(doc.data().id+1));
    });
  
    return (
      <>
        <div id='standard'>
            <div className='actions2'>
                <img src={'../google.png'}></img>
            </div>
            <div className='content2'>
                <textarea id='example' type='text' readOnly defaultValue={'exampleaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'}></textarea>
            </div>
        </div>
        <main>
            {messages ? messages.map(msg => <ChatMessage key={msg.id} message={msg}/>) : <></>}
            <div ref={dummy}></div>
        </main>
  
        <form onSubmit={sendMessage}>
            <div>
                <input defaultValue={formValue} onChange={(e) => setFormValue(e.target.defaultValue)} placeholder="say something nice"/>
                <button type='submit'>Send</button>
            </div>
        </form>
      </>
    )
}

/*function adjustTextareaHeight() {
    const textarea = document.getElementById('example');
    
    textarea.style.height = `1px`;
    textarea.style.height = `${textarea.scrollHeight}px`;
}

setTimeout(adjustTextareaHeight, 1000);*/

window.setTimeout(StandardMessageWidth, 2000)