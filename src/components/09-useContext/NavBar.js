import React from 'react';
import {Link, NavLink} from 'react-router-dom';

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark  bg-dark ">
            {/* <ul className="nav nav-pills navbar-dark"> */}
            <Link className="navbar-brand" to='/'>useContext</Link>
            <div  >
                <div className=" collapse navbar-collapse navbar-nav">
                    <NavLink exact activeClassName='active' className="nav-link nav-item" to='/'>Home</NavLink>
                    <NavLink exact activeClassName='active' className="nav-link nav-item" to="/about" >About</NavLink>
                    <NavLink exact activeClassName='active' className="nav-link nav-item" to='/login' >Login</NavLink>
                </div>
            </div>        
        </nav>
    )
}
