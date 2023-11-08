import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './Navbar';
import './App.css';
import {useEffect} from 'react';
import Sidebar from './Sidebar';
import Books from './Books';

const App = () => {
  // useEffect(() => {
  //   const uri = '/book';
  //   const getDocs = async () => {
  //     try {
  //       const doc = await fetch(uri, {
  //         method: 'GET'
  //       })
  //       const json = await doc.json()
  //       console.log(json)
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }
  //   getDocs() 
  // }, []);
  return (
    <Router>
      <div className="App">
        <Navbar />
          <Sidebar />
          <Routes>
            <Route path='/' element={<Books />}/>
            
          </Routes>
      </div>
    </Router>
  );
}

export default App;
