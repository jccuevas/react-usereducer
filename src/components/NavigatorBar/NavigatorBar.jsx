import './NavigatorBar.css';

function NavigatorBar(props){
    return (
        <div className="navigator-div">
            <ul>
                <li className="navigator-li"><a className="navigator-a" href="#">Inicio</a></li>
                <li className="navigator-li"><a className="navigator-a" href="#">Login</a></li>
            </ul>
            <div className="reset"></div>
        </div>

    );
}

export default NavigatorBar;