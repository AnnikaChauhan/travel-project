import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBk2Jruw-nRM5Klpl1D2I6QHYD6bKUmUIc",
    authDomain: "travel-project-d6827.firebaseapp.com",
    databaseURL: "https://travel-project-d6827.firebaseio.com",
    projectId: "travel-project-d6827",
    storageBucket: "travel-project-d6827.appspot.com",
    messagingSenderId: "146346918196",
    appId: "1:146346918196:web:8e969b08d7415613aca561",
    measurementId: "G-NMQRP04QTQ"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const providers = {
    google: new firebase.auth.GoogleAuthProvider()
}

export const firestore = firebase.firestore();

export default firebase;