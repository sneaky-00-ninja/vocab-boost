import React, { Component } from 'react';

export default class Lesson extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedLesson: 1, 
            lessonVocabList: [],     
            currentIndex: 0,    
            error: null,
            isLessonLoaded: false 
        };
    }

    // componentDidMount() {
    //     this.fetchVocabList(this.props.lessonId);
    // }


    fetchVocabList = async (lessonId) => {
        try {
            const response = await fetch(`http://localhost:5000/vocab_list/${lessonId}`);
            if (!response.ok) {
                throw new Error('Failed to fetch list');
            }
            const data = await response.json();
            this.setState({ lessonVocabList: data, isLessonLoaded: true });
        } catch (error) {
            this.setState({ error: error.message });
        }
    }

    //  move to the next vocab line
    nextVocabItem = () => {
        this.setState((priorStep) => ({
            currentIndex: Math.min(priorStep.currentIndex + 1, priorStep.lessonVocabList.length - 1)
        }));
    }
    // TODO add a notification text on page when last item in lesson is reached. 
    // TODO priorStep   !!!!!

    //  move to the previous vocab line
    previousVocabItem = () => {
        this.setState((priorStep) => ({
            currentIndex: Math.max(priorStep.currentIndex - 1, 0)
        }));
    }


    handleChooseLesson = () => {
        this.fetchVocabList(this.state.selectedLesson);
    }












    render() {
        const { selectedLesson, lessonVocabList, currentIndex, isLessonLoaded, error } = this.state;

        //   show error, if any
        if (error) {
            return <div>Error: {error}</div>;
        }

        //  show message if loading

        // if (lessonVocabList.length === 0) {
        //     return <div>Loading...</div>;
        // }


        // Get the current vocab item
        const currentVocab = lessonVocabList[currentIndex];





        return (
            <div className='general-page lesson'>

           {/* Display the current vocab item */}
           {currentVocab ? (
                <div>
                    <h2> Lesson number   {this.state.selectedLesson}  </h2>

                    <div className='language-A'>
                        <span className='smaller-text'>  Language A word/sentence </span>
                        {currentVocab && (
                            <p>English: <strong>{currentVocab.english}</strong></p>
                        )}
                    </div>

                    <div className='spacer60'/>

                    <div className='language-B'>
                        <div className='show-language-B'>
                            <span className='smaller-text'> Language B word/sentence </span>
                            {currentVocab && (
                                <p>Basque: <strong>{currentVocab.basque}</strong></p>
                            )}
                        </div>
                    </div>

                    <div className='step-buttons'>
                        <button onClick={this.previousVocabItem} disabled={currentIndex === 0}>
                            Previous
                        </button>
                        <span className='span60'/>
                        <button onClick={this.nextVocabItem} disabled={currentIndex === lessonVocabList.length - 1}>
                            Next
                        </button>
                    </div>



                </div>
                ) : (
                    <>
                    <h1> Lesson </h1>

                        <p>No lesson selected</p>
                        <div>
                            <button onClick={this.handleChooseLesson}>GET Lesson 1</button>
                        </div>
                    </>
                )
            }
            


                            {/* *** PRIOR LAYOUT ***
                <div className='step-buttons'>
                    <div className='step-back'>
                        <button onClick={this.previousVocabItem} disabled={currentIndex === 0}>
                            Previous
                        </button>
                    </div>
                    <div className='spacer10'/>
                    <div className='step-forward'>
                        <button onClick={this.nextVocabItem} disabled={currentIndex === lessonVocabList.length - 1}>
                            Next
                        </button>
                    </div>
                </div> */}








                <div className='spacer60'/>

                <div className='jump-buttons'>
                    <div className='restart'>  
                        <button>Go to start</button>
                        <span className='smaller-text'>  (Under construction) </span>
                    </div>
                    <div className='spacer10'/>
                    <div className='end'> 
                        <button>Go to End</button>
                        <span className='smaller-text'>  (Under construction) </span>

                    </div>
                <div className='spacer60'/>
                    <div className='quit'> 
                        <button>Exit Lesson</button>
                        <span className='smaller-text'>  (Under construction) </span>
                    </div>
                </div>






            </div>
        );
    }
}