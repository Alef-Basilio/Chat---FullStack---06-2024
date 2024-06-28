import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

import InitializeApp from './InitializeApp';

import styles from '../styles/SignIn.module.css';

InitializeApp();

const auth = firebase.auth();

export default function SignIn() {
    const signInWithGoogle = () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider);
    }
  
    return (
      <div className={styles.space}>
        <div className={styles.content}>
          <h1>Chatie</h1>
          <div>
            <button onClick={signInWithGoogle}>Sign in with Google</button>
            <img src='../google.png' alt='google_logo'/>
          </div>
          <span>Hello everything is fine? This is how conversations can start on Chatie, a site for chatting with other people through a friendly and fun interface. This name was chosen to generate sympathy, as well as you will share it with others!
          </span>
        </div>
      </div>
    )
}