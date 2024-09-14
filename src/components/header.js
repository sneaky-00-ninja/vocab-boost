import React, { Component } from 'react';
import { NavLink } from "react-router-dom";


export default class Header extends Component {
    render() {
        return (
            <div className='header'>

                <div className='header-top'>

                    <div className='top-left'>
                        {/* <div>_-= .HOME =-_</div>
                        <div>_-= About  =-_</div>
                        <div>_-= Contact  =-_</div> */}

                        <div className="nav-link-wrapper">
                            <NavLink to="/" activeClassName="nav-link-active">
                            _-= .HOME =-_
                            </NavLink>
                        </div>

                        <div className="nav-link-wrapper">
                            <NavLink to="/about" activeClassName="nav-link-active">
                            _-= About  =-_
                            </NavLink>
                        </div>

                        <div className="nav-link-wrapper">
                            <NavLink to="/contact" activeClassName="nav-link-active">
                            _-= Contact  =-_
                            </NavLink>
                        </div>






                    </div>



                    <div className='top-right'>
                        <div>Log In (link) </div>
                        <div>Log out (link) </div>
                    </div>

                </div>

                <div className='header-bottom'>

                    <div className='bottom-left'>
                        <div>Lessons LINK ...</div>
                    </div>

                    <div className='logo'>
                        Vocab booster LOGO to go here.???

                    </div>

                    <div className='bottom-right'>
                        <div>Sign up for full access</div>
                    </div>

                </div>


            </div>
        );
    }
}