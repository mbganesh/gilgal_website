import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore';




const config = 
  {
      
    apiKey: "AIzaSyBD72Jyf649VDdZJbftznYmQuQJryLHl-c",
    authDomain: "gilgal-web-app.firebaseapp.com",
    projectId: "gilgal-web-app",
    storageBucket: "gilgal-web-app.appspot.com",
    messagingSenderId: "554660479371",
    appId: "1:554660479371:web:7267b42b1029255a8cef8e"
}
  

  firebase.initializeApp(config);

export default firebase 