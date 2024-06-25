import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

export default function initializeApp() {
    return firebase.initializeApp({
        apiKey: "AIzaSyDgIydt8CrC_etYbqK8Phiy-nbxA7ZMLWs",
        authDomain: "testbd-57121.firebaseapp.com",
        projectId: "testbd-57121",
        storageBucket: "testbd-57121.appspot.com",
        messagingSenderId: "745182108116",
        appId: "1:745182108116:web:7a0e4ea7e1b49f67acde41",
        measurementId: "G-K64DJ50CK1"
    });
}