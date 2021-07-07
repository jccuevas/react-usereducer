
import { useRef, useState } from 'react';
import './App.css';
import NavigatorBar from './components/NavigatorBar/NavigatorBar';
import Main from './components/Main/Main';


function App() {
  const [user,setUser] = useState("");
  const inputUser = useRef(null);

  const handleChange = (text) =>{
    setUser(text);
  }

  return (
    <div className="App">
      <header><h1>Ejemplo de useReducer y useRef</h1></header>
      <NavigatorBar/>
      <Main />
    </div>
  );
}

export default App;
