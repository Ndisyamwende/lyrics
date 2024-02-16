import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth'

const firebaseConfig = {

    apiKey: "AIzaSyCUy5qKn9rzp3ofbi6m71Sfe6SmdE7j2-4",
  
    authDomain: "searchlyrics-c7728.firebaseapp.com",
  
    projectId: "searchlyrics-c7728",
  
    storageBucket: "searchlyrics-c7728.appspot.com",
  
    messagingSenderId: "10999444727",
  
    appId: "1:10999444727:web:3c3882bcbd8e6cf1240ff2",
  
    measurementId: "G-01KCSB1Z0W"
  
  };
const  app = initializeApp(firebaseConfig)

export const auth = getAuth(app)