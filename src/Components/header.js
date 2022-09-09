import { Outlet } from 'react-router-dom';
import './header.css';

function Header(){
    return(
        <header>
            <div className="container">
                <div className="wrapper">
                    <div className="logo">
                        <h2>Swiggy</h2>
                    </div>
                    <div className="nav-bar">
                        <a href='' className='nav'>Search</a>
                        <a href='' className='nav'>Offer%</a>
                        <a href='' className='nav'>Help</a>
                        <a href='' className='nav'>Sign-in</a>
                        <a href='' className='nav'>cart</a>
                    </div>
                </div>
            </div>
            <Outlet></Outlet>
        </header>
    )
}

export default Header;