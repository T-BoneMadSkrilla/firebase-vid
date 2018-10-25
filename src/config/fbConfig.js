import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var config = {
  apiKey: "AIzaSyBFOzGr1QfwNsZ76hsGmS8Px4s2sUxzIn4",
  authDomain: "fir-vid.firebaseapp.com",
  databaseURL: "https://fir-vid.firebaseio.com",
  projectId: "fir-vid",
  storageBucket: "fir-vid.appspot.com",
  messagingSenderId: "472913474379"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
