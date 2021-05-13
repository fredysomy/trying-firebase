import firebase from 'firebase/app'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyDO0BhcorjMaeqaSKdXH44cZZA8828dmjo",
    authDomain: "reactjs-e78a1.firebaseapp.com",
    projectId: "reactjs-e78a1",
    storageBucket: "reactjs-e78a1.appspot.com",
    messagingSenderId: "51433809586",
    appId: "1:51433809586:web:52e7e53fdada8dc1960bab"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth=firebase.auth()
const googleprovider=new firebase.auth.GoogleAuthProvider()

export const siginwithgoogle=()=>{
    auth.signInWithPopup(googleprovider).then((res)=>{
        console.log(res)
    }).catch((rr)=>{
        console.log(rr)
    })
}