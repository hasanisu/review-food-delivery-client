// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsVTyCPp3_Nb4JQp75xAxRqeYlTga5REA",
  authDomain: "review-food-delivery.firebaseapp.com",
  projectId: "review-food-delivery",
  storageBucket: "review-food-delivery.appspot.com",
  messagingSenderId: "346002964091",
  appId: "1:346002964091:web:f8f15118f5c48baaf62cde"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;