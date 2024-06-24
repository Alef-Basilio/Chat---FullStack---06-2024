import React, { useRef } from 'react';
import './App.css';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyDgIydt8CrC_etYbqK8Phiy-nbxA7ZMLWs",
  authDomain: "testbd-57121.firebaseapp.com",
  projectId: "testbd-57121",
  storageBucket: "testbd-57121.appspot.com",
  messagingSenderId: "745182108116",
  appId: "1:745182108116:web:7a0e4ea7e1b49f67acde41",
  measurementId: "G-K64DJ50CK1"
});

const firestore = firebase.firestore();
const auth = firebase.auth();

function App() {
  const [user] = useAuthState(firebase.auth());

  return (
    <div className="App">
      <header className="App-header">
        
      </header>

      <section>
        { user ? <ChatRoom/> : <SignIn/> }
      </section>
    </div>
  );
}

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return (
    <button onClick={signInWithGoogle}>Sign in with Google</button>
  )
}

function SignOut() {
  return auth.currentUser && (
    <button onClick={() => auth.signOut()}>Sign Out</button>
  )
}

function ChatRoom() {
  const dummy = useRef();

  const messageRef = firestore.collection('messages');
  const query = messageRef.orderBy('createdAt').limit(25);

  const [messages] = useCollectionData(query, {idField: 'id'});

  const [formValue, setFormValue] = React.useState('');

  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await messageRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL
    });

    setFormValue('');

    dummy.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <>
      <main>
        {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}

        <div ref={dummy}></div>
      </main>

      <form onSubmit={sendMessage}>
        <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice"/>
        <button type='submit'>BTN</button>
      </form>
    </>
  )
}

function ChatMessage(props) {
  const { text, uid, photoURL, id } = props.message;

  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

  return (
    <>
      <div className={`message ${messageClass}`}>
        <img src={photoURL}></img>
        <p>{text}</p>
        <button onClick={() => Modify(id)}>Modify</button>
        <button onClick={() => Delete(id)}>Delete</button>
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

export default App;
