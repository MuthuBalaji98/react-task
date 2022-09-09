import './App.css';
import{ useState} from 'react';
import Body from './Components/body';
import Header from './Components/header';
import Login from './Components/login';
import Footer from './Components/footer';
import * as React from 'react';
import {Routes,Route,Link} from 'react-router-dom';

function App() {

  // const images = [img1, img2, img3, img4, img5, img6]

  const [isLoggedin,setLoggedIn]=useState(false);

  const loginhandler=(islogin)=>{
    setLoggedIn(islogin);
  }
 

  

  
  return (
    <div className="App">

      <Routes>
        <Route index element={<Login isLoggedin={loginhandler}></Login>}></Route>
        <Route path='/header' element={<Header />}>
        <Route path='body' element={<Body logout={loginhandler}></Body>}></Route>
        </Route>
        <Route path='/footer' element={<Footer />}></Route>
      </Routes>
{/*      
      {isLoggedin?<Body logout={loginhandler}></Body>:<Login isLoggedin={loginhandler}></Login>
      } */}
     

    </div>
  );
}

export default App;