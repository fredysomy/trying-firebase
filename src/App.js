import logo from './logo.svg';
import './App.css';
import {siginwithgoogle} from "./services/signin"
import {UserContext} from "./providers/provider"

function App() {

  return (
    <UserContext>
    <div className="App">
      <button onClick={siginwithgoogle}>Sign in with Google</button>
    </div>
    </UserContext>
  );
}

export default App;
