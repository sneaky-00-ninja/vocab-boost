import React, { Component } from 'react';

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            entryUsername: "", 
            entryPassword: "" , 
            userType: "" , 
            realUsername: "", 
            realPassword: "" , 
            GETusername: "" ,
            GETpassword: "" ,
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
        const {  realUsername, realPassword } = this.props; 
        const { entryUsername, entryPassword } = this.state;
         const { GETusername, GETpassword } = this.props;

        return (
            <div className='general-page'>
                <div>
                    <h1> Log in page. </h1>
                    <h3> Under construction </h3>

                    <h5> REAL Username: {realUsername} </h5>
                    <h6> REAL Password: {realPassword} </h6>

                    <h3> ENTRY Username: {entryUsername} </h3>
                    <h3> ENTRY Password: {entryPassword} </h3>

                    <h5> GET Username: {GETusername} </h5>
                    <h5> GET Password: {GETpassword} </h5>






                </div>
                <div className='spacer60 '/>
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
                
                {/* <button onClick={this.fetchUserData}>    // TESTING BUTTON
                    Fetch User Data
                </button> */}





            </div>
        );
    }
}