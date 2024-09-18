import React, { Component } from 'react';

export default class Lesson extends Component {
    render() {
        return (
            <div className='general-page'>



                <div>
                    <h6> Lesson page... (Under construction) </h6>
                    <h3> Lesson number   xx  </h3>
                </div>

                <div className='spacer10'/>

                <div className='step-buttons'>
                    <div className='step-back'>
                        <button>Previous step</button>
                    </div>
                    <div className='spacer10'/>
                    <div className='step-forward'>
                        <button>Next step</button>
                    </div>
                </div>

                <div className='spacer60'/>

                <div className='language-A' >
                    <div className='language-A'>
                    Language A word/sentence   
                    </div>
                </div>

                <div className='spacer60'/>

                <div className='language-B'>
                    <div className='show-language-B'>
                        Language B word/sentence   
                    </div>
                </div>

                <div className='spacer60'/>

                <div className='jump-buttons'>
                    <div className='restart'>  
                        <button>Go to start</button>
                    </div>
                    <div className='spacer10'/>
                    <div className='end'> 
                        <button>Go to End</button>
                    </div>
                <div className='spacer60'/>
                    <div className='quit'> 
                        <button>Exit Lesson</button>
                    </div>
                </div>






            </div>
        );
    }
}