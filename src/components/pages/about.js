import React, { Component } from 'react';

export default class About extends Component {
    render() {
        // TODO .. remove this after testing... 
        
        const { entryUsername,entryPassword, realUsername, realPassword } = this.props; 





        return (
            <div className='general-page about'>
                <div>
                    <h1> About page </h1>
                    <h3> Under construction </h3>
                    
                    <h6> REAL Username: {realUsername} </h6>
                    <h6> REAL Password: {realPassword} </h6>

                    <h4> ENTRY Username: {entryUsername} </h4>
                    <h4> ENTRY Password: {entryPassword} </h4>
                </div>
                <div className='spacer60 '/>
            </div>

        );
    }
}