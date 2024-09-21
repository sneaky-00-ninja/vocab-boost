import React, { Component } from 'react';

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            entryUsername: "", 
            entryPassword: "" , 
        //    userType: "" , 
            error: null
        }
    }


    compareUserData = () => {
        fetch('http://localhost:5000/user/1')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch user data');
                }
                return response.json(); 
            })
            .then(data => {
                this.setState({
                    GETusername: data.user_name,
                    GETpassword: data.user_password
                }, () => {
                    const { entryUsername, entryPassword, GETusername, GETpassword } = this.state;

                    if (entryUsername === GETusername && entryPassword === GETpassword) {
                        this.props.handleLogin(entryUsername, entryPassword);  
                        console.log("Login successful");
                    } else {
                        console.log("Login failed");
                    }
                });
            })
            .catch(error => {
                this.setState({ error: error.message });
                console.log("Error fetching user data:", error);
            });
    };


    handleSubmit = (event) => {
        event.preventDefault();

        this.compareUserData();
        // this.props.handleLogin(entryUsername, entryPassword);  
        // ***NOTE***   above live was moved in to the "fetch" above
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]:event.target.value
        })
    }




    render() {
        const { entryUsername, entryPassword } = this.state;

        return (
            <div className='general-page'>
                <div>
                    {this.props.admin ? (
                        <>
                            <h1> You are logged in. </h1>
                            <h5> Select a link in the page header to get to another page </h5>
                        </>
                    ) : (
                        <div>
                            <h3> Enter your username and password. </h3>
                            <form onSubmit={this.handleSubmit}>
                            <input
                                type='text'                     
                                name='entryUsername'
                                placeholder='User Name'                     
                                value={entryUsername}
                                onChange={this.handleChange}
                            />
                            <input
                                type='password'                     
                                name='entryPassword'
                                placeholder='User Password'                     
                                value={entryPassword}
                                onChange={this.handleChange}
                            />
                            <div>
                                <button type='submit'> Login </button>
                            </div>
                            </form>
                        </div>
                    )
                }
                </div>
            </div>
        );
    }
}