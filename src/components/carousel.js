import React, { Component } from 'react';

export default class Carousel  extends Component {
    render() {

        return (

            <div className='carousel-body'>
                <div className='carousel'> 
                    <div className='carousel-track'> 
                        
                        <div className='carousel-slide'> 
                            <img src={require('../images/eng-flags.png')} alt="Flags" />
                        </div>
                        <div className='carousel-slide'> 
                            <img src={require('../images/esp-flags.png')} alt="Flags" />
                        </div>
                        <div className='carousel-slide'> 
                            <img src={require('../images/eus-flag.png')} alt="Flags" />
                        </div>
                        <div className='carousel-slide'> 
                            <img src={require('../images/eng-flags.png')} alt="Flags" />
                        </div>
                        <div className='carousel-slide'> 
                            <img src={require('../images/esp-flags.png')} alt="Flags" />
                        </div>
                        <div className='carousel-slide'> 
                            <img src={require('../images/eus-flag.png')} alt="Flags" />
                        </div>
                        <div className='carousel-slide'> 
                            <img src={require('../images/eng-flags.png')} alt="Flags" />
                        </div>
                        <div className='carousel-slide'> 
                            <img src={require('../images/esp-flags.png')} alt="Flags" />
                        </div>
                        <div className='carousel-slide'> 
                            <img src={require('../images/eus-flag.png')} alt="Flags" />
                        </div>
                        <div className='carousel-slide'> 
                            <img src={require('../images/eng-flags.png')} alt="Flags" />
                        </div>
                        <div className='carousel-slide'> 
                            <img src={require('../images/esp-flags.png')} alt="Flags" />
                        </div>
                        <div className='carousel-slide'> 
                            <img src={require('../images/eus-flag.png')} alt="Flags" />
                        </div>

                    </div>
                </div>
            </div>


        );
    }
}