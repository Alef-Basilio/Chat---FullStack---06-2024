import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

import initializeApp from './InitializeApp';

import styles from '../styles/SignIn.module.css';

initializeApp();

const auth = firebase.auth();

export default function SignIn() {
    const signInWithGoogle = () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider);
    }
  
    return (
      <div className={styles.logInSpace}>
        <div className={styles.logIn}>
          <h1>Chat</h1>
          <div>
            <button onClick={signInWithGoogle}>Sign in with Google</button>
            <img src='../google.png'/>
          </div>
          <span>So perhaps, you've generated some fancy text, and you're content that you can now copy and paste your fancy text in the comments section of funny cat videos, but perhaps you're wondering how it's even possible to change the font of your text? Is it some sort of hack? Are you copying and pasting an actual font?</span>
        </div>
      </div>
    )
}