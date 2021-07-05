
import { useRef, useState } from 'react';
import './App.css';

function App() {
  const [user,setUser] = useState("");
  const inputUser = useRef(null);

  const handleChange = (text) =>{
    setUser(text);
  }

  return (
    <div className="App">
      <header><h1>Ejemplo de useReducer y useRef</h1></header>
      <p>Con useRef se mantiene una referencia al elemento &lt;input&gt; para acceder a él, por ejemplo a su valor: inputUser.current.value</p>
      <label htmlFor="user">Usuario:</label>
      <input ref={inputUser} type="text" onChange={()=>handleChange(inputUser.current.value)}/>
      <button>
        Login
      </button>
      <p>Ha escrito:<i>{user}</i></p>
    </div>
  );
}

export default App;
