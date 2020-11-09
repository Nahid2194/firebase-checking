import "firebase/auth";
import './App.css';
import firebaseConfig from "./firebase.config";


firebase.initializeApp(firebaseConfig)
function App() {
  const provider = new firebase.auth.GooglrAuthProvider();
  return (
    <div className="App">

    </div>
  );
}

export default App;
