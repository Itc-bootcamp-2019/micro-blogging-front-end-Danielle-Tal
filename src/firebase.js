import firebase from 'firebase'
  const firebaseConfig = {
    apiKey: "AIzaSyDl_ILK8XOaW_jIhAhgrj5BPJpGvaklMlU",
    authDomain: "micro-blogging-8375a.firebaseapp.com",
    databaseURL: "https://micro-blogging-8375a.firebaseio.com",
    projectId: "micro-blogging-8375a",
    storageBucket: "micro-blogging-8375a.appspot.com",
    messagingSenderId: "222516029196",
    appId: "1:222516029196:web:0af0a3643b3163789f4b29"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase;