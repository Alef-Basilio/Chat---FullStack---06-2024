import React from 'react';
import './App.css';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import { useAuthState } from 'react-firebase-hooks/auth';

import initializeApp from './components/InitializeApp';
import ChatRoom from './components/ChatRoom';
import SignIn from './components/SignIn';
import SignOut from './components/SignOut';

initializeApp();

export default function App() {
  const [user] = useAuthState(firebase.auth());

  return (
    <div className="App">
      <section>
        { user ? <> <SignOut/> <ChatRoom/> </> : <SignIn/> }
      </section>
    </div>
  );
}