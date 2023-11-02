import { Link } from 'react-router-dom';
import aliyu from './img/aliyu.jpg'
const Sidebar = () => {
    return ( 
        <div className="sidebar">
            <div className='user'><img src={aliyu} alt=""/> <p>abusayyed7@gmail.com</p></div>
            <Link to="rl">Read later</Link>
            <Link to="topbooks">Top books</Link>
            <Link to="mp">Marketplace</Link>
            <Link to="/settings">Settings</Link>
            <Link to="/about">About</Link>
        </div>
     );
}
 
export default Sidebar;