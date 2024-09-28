import React, { Component } from 'react';

import Carousel from "../carousel";


export default class Home extends Component {
    render() {
        return (
            <div className='homepage'>

                <div> 
                    <Carousel/>
                </div>

                <div>
                    <h3> Current languages available: </h3>

                    <ul style={{ listStyleType: 'none' }}>
                        <li>
                            English                            
                        </li>
                        <li>
                            Basque
                        </li>
                    </ul>

                    <h3> Coming soon: </h3>
                    <ul style={{ listStyleType: 'none' }}>
                        <li>
                            Spanish                            
                        </li>
        
                    </ul>
                </div>

            </div>

        );
    }
}