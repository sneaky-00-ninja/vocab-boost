import React, { Component } from 'react';

export default class Edit extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
            lessonId: '', 
            title: '',
            description: '',
            newTitle: '', 
            newDescription: '', 
            get_success: false,
            put_success: false,
            delete_success: false, 
            create_success: false,
            
            vocabId: '', 
            englishVocab: '',
            basqueVocab: '',
            newEnglishVocab: '', 
            newBasqueVocab: '', 
            vocabLessonNumber: '',
            newVocabLessonNumber: '',
            lesson_id: '',
            
            get_vocab_success: false,
            put_vocab_success: false,
            delete_vocab_success: false, 
            create_vocab_success: false,

            loading: true,
            error: null,
        };
    }


    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value }); 

        let stateName = name;
        if (name === 'english') {
            stateName = 'englishVocab';
        } else if (name === 'basque') {
            stateName = 'basqueVocab';
        }
        this.setState({ [stateName]: value });
    }

// *****--  LESSON section ...  --*****
        //  Fetch submission to update the lesson (GET)     
    fetchLesson = () => {
        const { lessonId } = this.state;

        if (!lessonId) {
        this.setState({ error: "No lesson ID entered." });
        return;
        }

        this.setState({ loading: true, error: null });
                
        
        //    GET request  // *****-- LESSON --*****
        fetch(`https://dlm-vocab-boost-back-62aecfe988d1.herokuapp.com/lesson/${lessonId}`)   
          .then(response => {
            if (response.status === 404) {            // ## for error 404:; Not Found !
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
        fetch(`https://dlm-vocab-boost-back-62aecfe988d1.herokuapp.com/lesson/${lessonId}`, {
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

        //    (DELETE).....  LESSON 
    handleDeleteLesson = (lessonId) => {
        if (!lessonId) {
            this.setState({ error: 'No lesson ID specified' });
            return;
        }
        const confirmLessonDelete = window.confirm('ARE YOU SURE you want to delete that ???');     
            if (confirmLessonDelete ) {
                fetch(`https://dlm-vocab-boost-back-62aecfe988d1.herokuapp.com/lesson/${lessonId}`, {  
                method: 'DELETE',
                })
                .then((response) => {
                    if (!response.ok) {
                    throw new Error('Failed to delete lesson');
                    }
                    return response.text(); 
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

            // process to create new lesson        
        handleNewSubmit = (event) => {
            event.preventDefault();
    
            const { newTitle, newDescription } = this.state;
    
            // Create  payload for new title and description
            const newLesson = { title: newTitle, description: newDescription };

            this.setState({ loading: true, error: null });
                       
        // Send a POST request for new lesson        
            fetch(`https://dlm-vocab-boost-back-62aecfe988d1.herokuapp.com/lesson`, {
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


// *****--  VOCAB section ...  --*****
        handleNewVocabInputChange = (event) => {
            const { name, value } = event.target;
            // If the name is 'english' or 'basque', update the correct state variable
            const stateName = name === 'english' ? 'englishVocab' : name === 'basque' ? 'basqueVocab' : name;
            this.setState({ [stateName]: value });
    }

        //  Fetch submission for  vocab ---=(GET)
        fetchVocab = () => {
            const { vocabId } = this.state;
    
            if (!vocabId) {
            this.setState({ error: "No vocab ID entered." });
            return;
            }
    
            this.setState({ loading: true, error: null });
                    
            //    GET request 
            fetch(`https://dlm-vocab-boost-back-62aecfe988d1.herokuapp.com/vocab/${vocabId}`)   
              .then(response => {
                if (response.status === 404) {              // ## for error 404:; Not Found !
                    throw new Error('vocab not found');
                }
                if (!response.ok) {
                  throw new Error('Failed to fetch vocab data');
                }
                return response.json();
              })
              .then(data => {        
                console.log('vocab details retrieved:', data);   
                this.setState({
                  englishVocab: data.english,
                  basqueVocab: data.basque,
                  vocabLessonNumber: data.lesson_id, 
                  loading: false,
                  get_vocab_success: true,
                  put_vocab_success: false,
                  delete_vocab_success: false, 
                  create_vocab_success: false,
                });
              })
              .catch(error => {
                this.setState({ error: error.message, loading: false });
              });
        }
    
            // Handle form submission to update the vocab (PUT)
            handleVocabSubmit = (event) => {
            event.preventDefault();
    
            const { vocabId, englishVocab, basqueVocab, vocabLessonNumber } = this.state;
    
            // Create payload with updated englishVocab and basqueVocab... or creating NEW ones
            const updatedvocab = { english: englishVocab, basque: basqueVocab, lesson_id: vocabLessonNumber };

            this.setState({ loading: true, error: null });
    
                //    PUT request to update the vocab
            fetch(`https://dlm-vocab-boost-back-62aecfe988d1.herokuapp.com/vocab/${vocabId}`, {
                method: 'PUT',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedvocab),
            })
                .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to update vocab');
                }
                return response.json();
                })
                .then(data => {
                console.log('vocab updated:', data);
                this.setState({ 
                    loading: false,
                    get_vocab_success: false,
                    put_vocab_success: true,
                    delete_vocab_success: false, 
                    create_vocab_success: false,
                    error: null }); 
                })
                .catch(error => {
                this.setState({ error: error.message, loading: false  });
                });
        }
    
        // Handle form submission to DELETE the vocab (DELETE)
        handleDeleteVocab = (vocabId) => {
            if (!vocabId) {
                this.setState({ error: 'No vocab ID specified' });
                return;
            }
            const confirmvocabDelete = window.confirm('ARE YOU SURE you want to delete this vocab ???');   
                if (confirmvocabDelete ) {
                    fetch(`https://dlm-vocab-boost-back-62aecfe988d1.herokuapp.com/vocab/${vocabId}`, {  
                    method: 'DELETE',
                    })
                    .then((response) => {
                        if (!response.ok) {
                        throw new Error('Failed to delete vocab');
                        }
                        return response.text(); 
                    })
                    .then((data) => {
                        console.log('vocab deleted:', data);
                        this.setState({ 
                            get_vocab_success: false,
                            put_vocab_success: false,
                            delete_vocab_success: true, 
                            create_vocab_success: false,
                            error: null,                 
                            englishVocab: '',  
                            basqueVocab: '',
                            vocabId: ''
                        }); 
                    })
                    .catch(error => {
                        this.setState({ error: error.message });
                    });
                }
            };
    
                //  process to create new vocab
            handleNewVocabSubmit = (event) => {
                event.preventDefault();
        
                const { newEnglishVocab, newBasqueVocab, vocabLessonNumber } = this.state;
        
                // Create  payload for new englishVocab and basqueVocab
                const newvocab = { english: newEnglishVocab, basque: newBasqueVocab, lesson_id: vocabLessonNumber };
    
                this.setState({ loading: true, error: null });
                           
            // Send a POST request for new vocab
                fetch(`https://dlm-vocab-boost-back-62aecfe988d1.herokuapp.com/vocab`, {
                    method: 'POST',
                    headers: {
                    'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(newvocab),
                })
                    .then(response => {
                    if (!response.ok) {
                        throw new Error('Failed to create vocab');
                    }
                    return response.json();
                    })
                    .then(data => {
                    console.log('vocab updated:', data);
                    this.setState({ 
                        loading: false,
                        get_vocab_success: false,
                        put_vocab_success: false,
                        delete_vocab_success: false, 
                        create_vocab_success: true,
                        error: null }); 
                    })
                    .catch(error => {
                    this.setState({ error: error.message, loading: false });
                    });
            }


    render() {
        const { 
            lessonId, title, description, error, get_success, put_success, delete_success, create_success, 
            vocabId, get_vocab_success, put_vocab_success, delete_vocab_success, create_vocab_success
            } = this.state;

        return (
            <div className='dark-page '>
                <div>
                    <h2> Editor page (for Admins only)  </h2> Editing not recommended from a phone screen.
                </div>
                <div className='spacer60 '/>
                <div className='editor-parent'>
                    <div className='lesson-editor-main lesson-editor box'>        
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
                        <div className='lesson-editor box'>  
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
                            <span className='span10'/>
                        </div>

                        {/* Section for updateing a lesson.  */}
                        <div className='lesson-editor box'>  
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
                        <div className='lesson-editor box'>  
                            <button onClick={() => this.handleDeleteLesson(lessonId)}> Delete lesson with ID shown above? </button>
                        </div>
                        <div className='spacer60 '/>

                        {/* Section for creating a lesson.  */}
                        <div className='lesson-editor box'>  
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
                        <div className='lesson-editor box'>  
                            <button>Show all lessons</button> 
                            <br/>**Under construction** 
                        </div>
                    </div>     

                    <div className='vocab-editor-main vocab-editor box'>             
                        VOCAB EDITOR        
                        <div className='spacer10 '/>    
                        <div>
                            {get_vocab_success && <p>Vocab retrieved !</p>}  
                            {put_vocab_success && <p>Vocab updated successfully!</p>}  
                            {delete_vocab_success && <p>Vocab was deleted!</p>}  
                            {create_vocab_success && <p>New Vocab created successfully!</p>}  
                            {error && <p style={{ color: 'red' }}>{error}</p>}
                        </div>

                        {/* Section for retieving vocab.  */}
                        <div className='vocab-editor box'>  
                            <button onClick={this.fetchVocab}>Get Vocab</button>
                            <label htmlFor="get_vocab_id">Enter vocab ID#: </label>
                            <input 
                                type="number" 
                                id="get_vocab_id" 
                                name="vocabId" 
                                value={vocabId} 
                                onChange={this.handleInputChange} 
                                min="1" 
                                max="5000" 
                            />
                        </div>
                        
                        {/* Section for updating vocab.  */}
                        <div className='vocab-editor box'>  
                            <form onSubmit={this.handleVocabSubmit}>
                                <div>
                                    <label htmlFor="vocabId">vocab ID:</label>
                                    <input
                                    type="number"
                                    id="vocabId"
                                    name="vocabId" 
                                    min="1" max="5000"
                                    value={this.state.vocabId} // value={vocabId}
                                    onChange={this.handleInputChange}
                                    required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="lesson_id">Lesson Number:</label>
                                    <input
                                    type="number"
                                    id="vocabLessonNumber"
                                    name="vocabLessonNumber" 
                                    min="1" max="100"
                                    value={this.state.vocabLessonNumber} // value={vocabLessonNumber}
                                    onChange={this.handleInputChange}
                                    required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="english">Vocab English:</label>
                                    <input
                                    type="text"
                                    id="english"
                                    name="english"  
                                    minlength="3" maxlength="40" size="40"
                                    value={this.state.englishVocab} // value={english} 
                                    onChange={this.handleInputChange}
                                    required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="basque">Vocab Basque:</label>
                                    <input
                                    id="basque"
                                    name="basque"  
                                    minlength="3" maxlength="40" size="40"
                                    value={this.state.basqueVocab} // value={basque} 
                                    onChange={this.handleInputChange}
                                    required
                                    />
                                </div>
                                <button type="submit">Save Changes</button>
                            </form>

                        </div>

                        {/* Section for deleting vocab.  */}
                        <div className='vocab-editor box'>  
                            <button onClick={() => this.handleDeleteVocab(vocabId)}> 
                                Delete Vocab with ID shown above? 
                            </button>
                        </div>
                        <div className='spacer60 '/>

                        {/* Section for creating Vocab.  */}
                        <div className='vocab-editor box'>  
                            <form onSubmit={this.handleNewVocabSubmit}>
                                <div>
                                    <label htmlFor="newVocabLessonNumber">For Lesson Number:</label>
                                    <input
                                    type="number"
                                    id="newVocabLessonNumber"
                                    name="vocabLessonNumber" 
                                    min="1" max="100"
                                    value={this.state.vocabLessonNumber} // value={lesson_id} 
                                    onChange={this.handleInputChange} // onChange={this.handleNewVocabInputChange}  
                                    required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="newEnglishVocab">New English Vocab :</label>
                                    <input
                                    type="text"
                                    id="newEnglishVocab"
                                    name="newEnglishVocab"  
                                    minlength="3" maxlength="40" size="40"
                                    value={this.state.newEnglishVocab}
                                    onChange={this.handleInputChange} // onChange={this.handleNewVocabInputChange}
                                    required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="newBasqueVocab">New Basque Vocab :</label>
                                    <input
                                    id="newBasqueVocab"
                                    name="newBasqueVocab"  
                                    minlength="3" maxlength="40" size="40"
                                    value={this.state.newBasqueVocab}
                                    onChange={this.handleInputChange} // onChange={this.handleNewVocabInputChange} 
                                    required
                                    />
                                </div>
                                <button type="submit">Create New Vocab</button>
                            </form>
                            <div className='spacer60 '/>

                            {/* Section for showing all vocab.  */}
                            <div className='vocab-editor box'>  
                                <button>Show all vocab </button> 
                                <br/>for lesson #                             
                                <input type="number" id="lesson_number" name="lesson_number" min="1" max="100"  /> 
                                <br/>**Under construction** 
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        );
    }
}