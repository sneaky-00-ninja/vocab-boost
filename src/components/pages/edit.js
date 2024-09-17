import React, { Component, useState, useEffect } from 'react';

export default class Edit extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
            lessonId: '', 
            title: '',
            description: '',
            newTitle: '', 
            newDescription: '', 
            loading: true,
            error: null,
            get_success: false,
            put_success: false,
            delete_success: false, 
            create_success: false,
        };
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value }); 
    }


        //  Fetch submission to update the lesson (GET)
    fetchLesson = () => {
        const { lessonId } = this.state;

        if (!lessonId) {
        this.setState({ error: "No lesson ID entered." });
        return;
        }

        this.setState({ loading: true, error: null });
                
        //    GET request 
        fetch(`http://127.0.0.1:5000/lesson/${lessonId}`)   
          .then(response => {
            if (response.status === 404) {              // ## for error 404:; Not Found !
                throw new Error('Lesson not found');
            }
            if (!response.ok) {
              throw new Error('Failed to fetch lesson data');
            }
            return response.json();
          })
          .then(data => {        
            console.log('Lesson details retrieved:', data);   
            this.setState({
              title: data.title,
              description: data.description,
              loading: false,
              get_success: true,
              put_success: false,
              delete_success: false, 
              create_success: false,
            });
          })
          .catch(error => {
            this.setState({ error: error.message, loading: false });
          });
    }


        // Handle form submission to update the lesson (PUT)
    handleSubmit = (event) => {
        event.preventDefault();

        const { lessonId, title, description, newTitle, newDescription } = this.state;

        // Create payload with updated title and description... or creating NEW ones
        const updatedLesson = { lessonId, title, description, newTitle, newDescription };

        this.setState({ loading: true, error: null });

            //    PUT request to update the lesson
        fetch(`http://127.0.0.1:5000/lesson/${lessonId}`, {
            method: 'PUT',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedLesson),
        })
            .then(response => {
            if (!response.ok) {
                throw new Error('Failed to update lesson');
            }
            return response.json();
            })
            .then(data => {
            console.log('Lesson updated:', data);
            this.setState({ 
                loading: false,
                get_success: false,
                put_success: true,
                delete_success: false, 
                create_success: false,
                error: null }); 
            })
            .catch(error => {
            this.setState({ error: error.message, loading: false  });
            });
    }





    handleDeleteLesson = (lessonId) => {
        if (!lessonId) {
            this.setState({ error: 'No lesson ID specified' });
            return;
        }
        const confirmLessonDelete = window.confirm('ARE YOU SURE you want to delete that ???');     // TODO ... ADD `${lessonId}`
            if (confirmLessonDelete ) {
                fetch(`http://127.0.0.1:5000/lesson/${lessonId}`, {  
                method: 'DELETE',
                })
                .then((response) => {
                    if (!response.ok) {
                    throw new Error('Failed to delete lesson');
                    }
                    return response.json();
                })
                .then((data) => {
                    console.log('Lesson deleted:', data);
                    this.setState({ 
                        get_success: false,
                        put_success: false,
                        delete_success: true, 
                        create_success: false,
                        error: null,                 
                        title: '',  
                        description: '',
                        lessonId: ''
                    }); 
                })
                .catch(error => {
                    this.setState({ error: error.message });
                });
            }
        };






        handleNewSubmit = (event) => {
            event.preventDefault();
    
            const { newTitle, newDescription } = this.state;
    
            // Create  payload for new title and description
            const newLesson = { title: newTitle, description: newDescription };

            this.setState({ loading: true, error: null });
                       
        // Send a POST request for new lesson
            fetch(`http://127.0.0.1:5000/lesson`, {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify(newLesson),
            })
                .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to create lesson');
                }
                return response.json();
                })
                .then(data => {
                console.log('Lesson updated:', data);
                this.setState({ 
                    loading: false,
                    get_success: false,
                    put_success: false,
                    delete_success: false, 
                    create_success: true,
                    error: null }); 
                })
                .catch(error => {
                this.setState({ error: error.message, loading: false });
                });
        }









    render() {
        const { lessonId, title, description, loading, error, get_success, put_success, delete_success, create_success  } = this.state;

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
                        <div>
                            {get_success && <p>Lesson retrieved !</p>}  
                            {put_success && <p>Lesson updated successfully!</p>}  
                            {delete_success && <p>Lesson was deleted!</p>}  
                            {create_success && <p>New lesson created successfully!</p>}  
                            {error && <p style={{ color: 'red' }}>{error}</p>}
                        </div>

                        {/* Section for retieving a lesson.  */}
                        <div className='manage box'>  
                            <button onClick={this.fetchLesson}>Get Lesson</button>

                            <label htmlFor="get_lesson_id">Enter lesson ID#: </label>
                            <input 
                                type="number" 
                                id="get_lesson_id" 
                                name="lessonId" 
                                value={lessonId} 
                                onChange={this.handleInputChange} 
                                min="1" 
                                max="100" 
                            />
                        </div>
                        
                        {/* Section for updateing a lesson.  */}
                        <div className='manage box'>  
                            <form onSubmit={this.handleSubmit}>
                                <div>
                                    <label htmlFor="lessonId">Lesson ID:</label>
                                    <input
                                    type="number"
                                    id="lessonId"
                                    name="lessonId" 
                                    min="1" max="100"
                                    value={lessonId}
                                    onChange={this.handleInputChange}
                                    required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="title">Lesson Title:</label>
                                    <input
                                    type="text"
                                    id="title"
                                    name="title"  
                                    minlength="3" maxlength="40" size="40"
                                    value={title}
                                    onChange={this.handleInputChange}
                                    required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="description">Description:</label>
                                    <input
                                    id="description"
                                    name="description"  
                                    minlength="3" maxlength="80" size="80"
                                    value={description}
                                    onChange={this.handleInputChange}
                                    required
                                    />
                                </div>
                                <button type="submit">Save Changes</button>
                            </form>
                        </div>


                        {/* Section for deleting a lesson.  */}
                        <div className='manage box'>  
                            <button onClick={() => this.handleDeleteLesson(lessonId)}> Delete lesson ID shown above? </button>
                        </div>
                        <div className='spacer60 '/>
                            

                        {/* Section for creating a lesson.  */}
                        <div className='manage box'>  
                            <form onSubmit={this.handleNewSubmit}>
                                <div>
                                    <label htmlFor="title">New Lesson Title:</label>
                                    <input
                                    type="text"
                                    id="newTitle"
                                    name="newTitle"  
                                    minlength="3" maxlength="40" size="40"
                                    value={this.state.newTitle}
                                    onChange={this.handleInputChange}
                                    required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="description">New Lesson Description:</label>
                                    <input
                                    id="newDescription"
                                    name="newDescription"  
                                    minlength="3" maxlength="80" size="80"
                                    value={this.state.newDescription}
                                    onChange={this.handleInputChange}
                                    required
                                    />
                                </div>
                                <button type="submit">Create New Lesson</button>
                    
                            </form>
                        </div>

                        <div className='spacer60 '/>



                        {/* Section for showing all lessons.  */}
                        <div className='manage box'>  
                            <button>Show all lessons</button> 
                            <br/>**Under construction** 
                        </div>
                    </div>     




                    {/* 
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
                        <div className='manage box'>  
                            <button>Delete vocab</button> Delete vocab shown above? 
                        </div>
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
                                <br/>**Under construction** 
                            </div>
                        </div>

                    </div> */}

                </div>



            </div>
        );
    }
}