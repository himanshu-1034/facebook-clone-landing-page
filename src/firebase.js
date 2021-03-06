import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyCefEwkPLtgHcR9oKhCbi38qHnLQYW6x1M",
    authDomain: "facebook-clone-reactjs-814c3.firebaseapp.com",
    projectId: "facebook-clone-reactjs-814c3",
    storageBucket: "facebook-clone-reactjs-814c3.appspot.com",
    messagingSenderId: "824317054487",
    appId: "1:824317054487:web:634b7957d6cdb7b979d652"
  };

 const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();
  const auth = firebaseApp.auth();
  const storage = firebaseApp.storage();
  const provider = new firebase.auth.GoogleAuthProvider();


  export {database, auth, storage, provider};