import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import logoImg from "../images/logo.png";


export default class Header extends Component {
    render() {
        return (
            <div className='header'>

                <div className='header-top-row'>

                    <div className='header-links top-left'>

                        <div className="header-nav-link">
                            <NavLink to="/" activeClassName="nav-link-active">
                            ._-= HOME =-_.
                            </NavLink>
                        </div>

                        <div className="header-nav-link">
                            <NavLink to="/about" activeClassName="nav-link-active">
                            ._-= About  =-_.
                            </NavLink>
                        </div>

                        <div className="header-nav-link">
                            <NavLink to="/contact" activeClassName="nav-link-active">
                            ._-= Contact  =-_.
                            </NavLink>
                        </div>

                    </div>
                    


                    <div className='header-links top-right'>



                        <div className="header-nav-link">
                            <NavLink to="/login" activeClassName="nav-link-active">
                                ._-= Log In =-_.
                            </NavLink>
                        </div>

                        <div> (Log out button) </div>

                    </div>
                </div>

                <div className='header-bottom-row'>

                    <div className='header-links bottom-left'>
                    
                        <div className="header-nav-link">
                            <NavLink to="/lesson" activeClassName="nav-link-active">
                            ._-= Lessons =-_.
                            </NavLink>
                        </div>
                        <div className="header-nav-link">
                            <NavLink to="/edit" activeClassName="nav-link-active">
                            ._-= Edit (Admins only) =-_.
                            </NavLink>
                        </div>

                    </div>

                    <div className='logo'
                        style={{
                            backgroundImage: `url(${logoImg})`,
                            height:   '100px',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'auto 100%', // Width is auto, height is 100% to stretch vertically
                            backgroundPosition: 'center'
                        }}                    
                    
                    />



                    <div className='header-links bottom-right'>
                        <div className="header-nav-link">
                            <NavLink to="/signup" activeClassName="nav-link-active">
                            ._-= Sign Up =-_.
                            </NavLink>
                            for full access
                        </div>
                    </div>

                </div>


            </div>
        );
    }
}