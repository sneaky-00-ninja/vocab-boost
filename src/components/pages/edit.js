import React, { Component, useState, useEffect } from 'react';

export default class Edit extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
            lessonId: '', 
            title: '',
            description: '',
            loading: true,
            error: null,
            success: false,
        };
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value }); 
    }


  fetchLesson = () => {
    const { lessonId } = this.state;

    if (!lessonId) {
      this.setState({ error: "No such lesson ID." });
      return;
    }



        this.setState({ loading: true, error: null });

        
        fetch(`http://127.0.0.1:5000/lesson/${lessonId}`)   // Fetch lesson data from the API
          .then(response => {
            if (!response.ok) {
              throw new Error('Failed to fetch lesson data');
            }
            return response.json();
          })
          .then(data => {            // Populate form with fetched lesson data
            this.setState({
              title: data.title,
              description: data.description,
              loading: false,
              success: true,
            });
          })
          .catch(error => {
            this.setState({ error: error.message, loading: false });
          });
      }



    // Handle form submission to update the lesson
    handleSubmit = (event) => {
        event.preventDefault();

        const { lessonId, title, description } = this.state;
     //   const {  } = this.props;

        // Create the payload with the updated title and description
        const updatedLesson = { lessonId, title, description };






    // Send a PUT request to update the lesson
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
          this.setState({ success: true, error: null }); 
        })
        .catch(error => {
          this.setState({ error: error.message });
        });
    }






    render() {
        const { lessonId, title, description, loading, error, success } = this.state;




        return (

            <div className='general-page edit'>


                <div>
                    <h1> Editor page (for Admins only)  </h1>
                    <h3> Under construction </h3>
                </div>
                <div className='spacer60 '/>

                <div className='editor-area'>
                    {success && <p>Lesson updated successfully!</p>}  
                    {error && <p style={{ color: 'red' }}>{error}</p>}


                    <div className='lesson-editor box'>
                        LESSON EDITOR
                        <div className='spacer10 '/>
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
                        <div className='manage box'>  
                            <form onSubmit={this.handleSubmit}>
                                <div>
                                    <label htmlFor="lessonId">Lesson ID:</label>
                                    <input
                                    type="number"
                                    id="lessonId"
                                    name="lessonId"  // Important for handleInputChange to work dynamically
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
                                    name="title"  // Important for handleInputChange to work dynamically
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
                                    name="description"  // Important for handleInputChange to work dynamically
                                    minlength="3" maxlength="80" size="80"
                                    value={description}
                                    onChange={this.handleInputChange}
                                    required
                                    />
                                </div>
                                <button type="submit">Save Changes</button>
                            </form>
                     

                        </div>
                        <div className='manage box'>  
                            <button>Delete lesson</button> Delete lesson shown above? 
                        </div>
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