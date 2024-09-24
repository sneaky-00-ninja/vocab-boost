import React, { Component } from 'react';

export default class About extends Component {
    render() {
    
        return (
            <div className='general-page about'>
                <div>
                    <h1> About </h1>
                    <p>  
                        The inspiration for this react application comes from the 
                        lack of Basque Language learning resources freely available. 
                    </p>
                    <p>  
                        As a native English speaker living in the Spanish Basque Country 
                        who has been struggling to learn the basics of Euskera I have 
                        decided to create my own tool that I can use and continually update as 
                        my abilities require further material. 
                    </p>
                    <p>  
                        This project launched with just English and Basque but was originally supposed to also have Spanish vocabulary 
                        with the expectation of later adding other languages later, so that anyone can learn some basic 
                        greetings and common phrases ahead of a trip to a country of foreign language. 
                    </p>
                    <p>  
                        Post launch development plans include adding French and Japanese for the future destinations that I 
                        wish to return to, for which I have forgotten most of the basic level vocabulary that I once used. 
                        Other languages may also be included in the more distant future. 
                    </p>
                    <p>  
                        -D. McNabb-
                    </p>

                        


                    
                </div>
                <div className='spacer60 '/>
            </div>

        );
    }
}