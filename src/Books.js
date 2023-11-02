import { Link } from 'react-router-dom';
import img from './img/images.jpeg';
const Books = () => {
    return ( 
        <main className="books">
                <div>
                    <Link to='/codmw3'>
                        <h4>Call of Duty Modern Warfare 3</h4>
                        <img src={img} alt="button"/>
                        <p>Arthur: <br/><Link to="/@author_name">Brandon Sanderson</Link></p>
                    </Link>
                </div>
            <div>
                <Link to='/codmw3'>
                    <h4>Call of Duty Modern Warfare 3</h4>
                    <img src={img} alt="button" />
                    <p>Arthur: <br /><Link to="/@author_name">Brandon Sanderson</Link></p>
                </Link>
            </div>
            <div>
                <Link to='/codmw3'>
                    <h4>Call of Duty Modern Warfare 3</h4>
                    <img src={img} alt="button" />
                    <p>Arthur: <br /><Link to="/@author_name">Brandon Sanderson</Link></p>
                </Link>
            </div>
        </main>
     );
}
 
export default Books;