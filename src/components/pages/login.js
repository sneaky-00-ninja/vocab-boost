import React, { Component } from 'react';

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            entryUsername: "", 
            entryPassword: "" , 
            userType: "" , 
            realUsername: "", 
            realPassword: "" 


        }
    }


    handleSubmit = (event) => {
        event.preventDefault();

        const { entryUsername } = this.state;
        const { entryPassword } = this.state;

        // if (!entryUsername) {
        //     this.setState({ error: "No lesson User Name entered." });
        //     return;
        //     }
        // if (!entryPassword) {
        //     this.setState({ error: "No lesson Password entered." });
        //     return;
        //     }
        // this.setState({ loading: true, error: null });

        // fetch(`http://127.0.0.1:5000/admin/1`)   

        // then(response => {
        //     if ( **** logic for NOT matching details) {             
        //         throw new Error('User not found');
        //     }
        //     if (**** logic for matching details) {
        //     *** this.setState for GRANTED
        //     }
        //     return response.json();
        // })
        // .catch(error => {
        //     this.setState({ error: error.message, loading: false });
        // });

        console.log("Entry attempt clicked", event);




    }






    handleChange = (event) => {
        this.setState({
            [event.target.name]:event.target.value
        })
    }



    render() {
        return (
            <div className='general-page'>
                <div>
                    <h1> Log in page. </h1>
                    <h3> Under construction </h3>




                </div>
                <div className='spacer60 '/>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type='text'                     
                        name='entryUsername'
                        placeholder='User Name'                     
                        value={this.state.entryUsername}
                        onChange={this.handleChange}
                    />
                    <input
                        type='password'                     
                        name='entryPassword'
                        placeholder='User Password'                     
                        value={this.state.entryPassword}
                        onChange={this.handleChange}
                    />
                    <div>
                        <button type='submit'> Login </button>
                    </div>


                </form>





            </div>
        );
    }
}