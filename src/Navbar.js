import { useState } from "react";
import p from './img/p.jpg';
import Search from "./Search";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [value, setValue] = useState(null);
  const log = (e) => {
    e.preventDefault()
     console.log(value)
  }
  const searchPopUp = () => {
    return <Search />
  }
    return ( 
       <div className="navbar">
         <div className="nav"></div>
        <Link to='/'><h1>Skylyte Books</h1></Link>
          <div className="seacrh-bar">
            <form onSubmit={log}>
              <input type="text" placeholder="Search" value={value} onChange={(e) => setValue(e.target.value)}/>
              <button className="btn">Search</button>
            </form>
          </div>

       </div>
     );
}
 
export default Navbar;