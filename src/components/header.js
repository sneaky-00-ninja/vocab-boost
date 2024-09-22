import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import logoImg from "../images/logo.png";




export default class Header extends Component {
    render() {

        const { handleLoginClick } = this.props;  
        const { handleLogoutClick } = this.props;  


        return (
            <div className='header'>

                <div className='header-top-row'>

                    <div className='header-links top-left'>
                        <div className="header-nav-link">
                            <NavLink to="/" activeclassname="nav-link-active">
                            HOME 
                            </NavLink>
                        </div>
                        <span className='span10'/>
                        <div className="header-nav-link">
                            <NavLink to="/about" activeclassname="nav-link-active">
                             About
                            </NavLink>
                        </div>
                        <span className='span10'/>
                        <div className="header-nav-link">
                            <NavLink to="/contact" activeclassname="nav-link-active">
                            Contact  
                            </NavLink>
                        </div>
                        <span className='span30'/>
                        <div className='user-status'>
                            User status : {this.props.admin ? "Admin" : "Guest"}
                        </div>
                    </div>
                    
                    <div className='header-links top-right'>
                        {this.props.admin ? (
                                <div> 
                                    <button onClick={handleLogoutClick}>
                                        Log Out
                                    </button>
                                </div>
                            ) : (
                                <div className="header-nav-link">
                                <NavLink to="/login" activeclassname="nav-link-active">
                                    Administrator Log In. 
                                </NavLink>
                            </div>
                            )
                        }
                    </div>

                </div>

                <div className='header-bottom-row'>

                    <div className='header-links bottom-left'>
                    
                        <div className="header-nav-link">
                            <NavLink to="/lesson" activeclassname="nav-link-active">
                            Lessons
                            </NavLink>
                        </div>
                        <span className='span10'/>
                        <div className="header-nav-link">
                            {this.props.admin && 
                                <NavLink to="/edit" activeclassname="nav-link-active">
                                Edit (Admins only) 
                                </NavLink>
                            }
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

                            {this.props.admin ? (
                                <div> Admin view active </div> 
                                ) : (
                                <div>  
                                    <button onClick={handleLoginClick}> Admin TEST Log In </button>
                                    <span className='span10'/>
                                    <span className='span10'/>
                                    <NavLink to="/signup" activeclassname="nav-link-active">
                                        Sign Up 
                                    </NavLink>
                                    <span className='span10'/>


                                        for full access   
                                </div> 
                                )
                            }

                            
                        </div>
                    </div>

                </div>


            </div>
        );
    }
}