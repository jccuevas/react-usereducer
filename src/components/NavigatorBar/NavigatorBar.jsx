import {useReducer} from 'react';
import './NavigatorBar.css';

function NavigatorBar(props){
    return (
        <div className={"navigator"}>
            <ul>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Login</a></li>
            </ul>
        </div>

    );
}

export default NavigatorBar;