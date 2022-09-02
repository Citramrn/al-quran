import firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUi_zdGc0KHbJIdXrRe3fc67QX1nbqG6c",
  authDomain: "my-alquran-6183e.firebaseapp.com",
  projectId: "my-alquran-6183e",
  storageBucket: "my-alquran-6183e.appspot.com",
  messagingSenderId: "932498431022",
  appId: "1:932498431022:web:cc3dabba89d9791b3893bf",
  measurementId: "G-3H8M086H10"
};
// Initialize Firebase
const init = firebase.initializeApp(firebaseConfig);
export const firebaseAuthentication = init.auth();