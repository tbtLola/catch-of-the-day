import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDbulsxg20UI5X6EZI4i59WbcK-ifHDSc8",
    authDomain: "catch-of-the-day-tony-82dc7.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-tony-82dc7.firebaseio.com",
    // projectId: "catch-of-the-day-tony-82dc7",
    // storageBucket: "catch-of-the-day-tony-82dc7.appspot.com",
    // messagingSenderId: "677356048839",
    // appId: "1:677356048839:web:50d7ed6080b1adb68d09e2"
})

const base = Rebase.createClass(firebase.database());

// this is a named export
export { firebaseApp };

// this is a default export
export default base;