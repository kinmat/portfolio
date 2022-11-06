import logo from "./logo.svg";
import "./App.css";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnEC5t28RmQFQjp7O6qwXmPKnRQz9hx6U",
  authDomain: "portfolio-fb75a.firebaseapp.com",
  projectId: "portfolio-fb75a",
  storageBucket: "portfolio-fb75a.appspot.com",
  messagingSenderId: "1085725184440",
  appId: "1:1085725184440:web:f66ca0e7026437b0f2bf4d",
  measurementId: "G-MDCVRE9G0H",
};

// Initialize Firebase

const App = () => {
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
