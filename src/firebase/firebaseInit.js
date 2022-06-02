  import firebase from "firebase/app"
  import "firebase/firestore"
  
  
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCL1SpU8jgOSiL_8FALAJn0T7UE2vobZTk",
    authDomain: "vue-blog-efd41.firebaseapp.com",
    projectId: "vue-blog-efd41",
    storageBucket: "vue-blog-efd41.appspot.com",
    messagingSenderId: "652178677086",
    appId: "1:652178677086:web:a925e48e368018ce0b03cf",
    measurementId: "G-74713GY50K"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export {timestamp};
  export default firebaseApp.firestore();