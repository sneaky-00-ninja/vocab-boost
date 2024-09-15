import React, { Component } from 'react';

export default class Edit extends Component {
    render() {
        return (
            <div className='general-page edit'>



                <div>
                    <h1> Editor page (for Admins only)  </h1>
                    <h3> Under construction </h3>
                </div>
                <div className='spacer60 '/>

                <div className='editor-area'>


                    <div className='lesson-editor box'>
                        LESSON EDITOR
                        <div className='spacer10 '/>
                        <div className='manage box'>  
                            <button>Get lesson</button>  
                            <br/>
                            <label for="get_lesson_id">Enter lesson ID#: </label>
                            <input type="number" id="get_lesson_id" name="lesson_number" min="1" max="100"  /> 
                        </div>
                        <div className='manage box'>  
                            <button>Edit lesson</button>  
                            <br/>
                            Lesson ID 
                            <input type="number" id="lesson_id" name="lesson_number" min="1" max="100" />
                            <br/>
                            Lesson title
                            <input type="text" id="lesson_title" name="lesson_title" required minlength="3" maxlength="40" size="40" />
                            <br/>
                            Lesson description 
                            <input type="text" id="lesson_description" name="lesson_description" required minlength="3" maxlength="80" size="80" />

                        </div>
                        <div className='manage box'>  <button>Delete lesson</button> Delete lesson shown above? </div>
                        <div className='spacer60 '/>

                        <div className='manage box'>  
                            <button>Create lesson</button>  
                            <br/>                           
                            Lesson title
                            <input type="text" id="new_lesson_title" name="new_lesson_title" required minlength="3" maxlength="40" size="40" />
                            <br/>
                            Lesson description 
                            <input type="text" id="new_lesson_description" name="new_lesson_description" required minlength="3" maxlength="80" size="80" />
                        </div>

                        <div className='spacer60 '/>
                        <div className='manage box'>  <button>Show all lessons</button> **Under construction** </div>
                    </div>     


                    <div className='vocab-editor box'>
                        VOCAB EDITOR
                        <div className='spacer10 '/>
                        <div className='manage box'>  
                            <button>Get vocab</button>  
                            <br/>
                            <label for="get_vocab_id">Enter vocab ID#: </label>
                            <input type="number" id="get_vocab_id" name="vocab_number" min="1" max="100"  /> 
                        </div>
                        <div className='manage box'>  
                            <button>Edit vocab</button>  
                            <br/>
                            Vocab ID 
                            <input type="number" id="vocab_id" name="vocab_number" min="1" max="100" />
                            <br/>
                            Lesson number 
                            <input type="number" id="lesson_number" name="lesson_number" min="1" max="100" />
                            <br/>
                            Vocab English
                            <input type="text" id="vocab_english" name="vocab_english" required minlength="1" maxlength="40" size="40" />
                            <br/>
                            Vocab Basque 
                            <input type="text" id="vocab_basque" name="vocab_basque" required minlength="1" maxlength="40" size="40" />

                        </div>
                        <div className='manage box'>  <button>Delete vocab</button> Delete vocab shown above? </div>
                        <div className='spacer60 '/>

                        <div className='manage box'>  
                            <button>Create vocab</button>  
                            <br/>                           
                            Lesson number
                            <input type="number" id="new_lesson_number" name="new_lesson_number" min="1" max="100"  />
                            <br/>                           
                            Vocab English
                            <input type="text" id="new_vocab_title" name="new_vocab_title" required minlength="1" maxlength="40" size="40" />
                            <br/>
                            Vocab Basque 
                            <input type="text" id="new_vocab_description" name="new_vocab_description" required minlength="1"   maxlength="40" size="40" />

                            <div className='spacer60 '/>
                            <div className='manage box'>  
                                <button>Show all vocab </button> 
                                <br/>for lesson #                             
                                <input type="number" id="lesson_number" name="lesson_number" min="1" max="100"  /> 
                                <br/>**Under construction** </div>
                        </div>
                        
                    </div>

                </div>




            </div>
        );
    }
}