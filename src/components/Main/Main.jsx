import { useReducer, useRef, useState } from 'react';
import './Main.css';
import reducerMain from '../../reducers/reducerMain'


function Main() {
  const [user,setUser] = useState("");
  const inputUser = useRef(null);

  const initialState = {logged: false}; 

  const handleChange = (text) =>{
    setUser(text);
  }

  const [state,dispatch] = useReducer(reducerMain,initialState)

  return (
    <div className="Main">

      <p>Con useRef se mantiene una referencia al elemento &lt;input&gt; para acceder a él, por ejemplo a su valor: inputUser.current.value</p>
      <label htmlFor="user">Usuario:</label>
      {state.logged?<p>Logeado</p>:<p>Log in</p>}
      <input ref={inputUser} type="text" onChange={()=>handleChange(inputUser.current.value)}/>
      <button onClick={()=>dispatch({type:'LOGGED'})}>
        Login
      </button>
      <p>Ha escrito:<i>{user}</i></p>
    </div>
  );
}

export default Main;
