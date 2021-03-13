import Button from './Button';
import {useLocation} from 'react-router-dom';
const Header = ({onAdd,showAdd}) => {
    const location=useLocation();
    return (  
        <div className='header'>
            <h1>Task Tracker</h1>
             {location.pathname==='/'&&(<Button  color={showAdd?'red':'green'} onClick={onAdd} showAdd={showAdd}/>)}
        </div>
    )
}
export default Header
