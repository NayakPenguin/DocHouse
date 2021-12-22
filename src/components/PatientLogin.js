import React from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import { render } from '@testing-library/react';
import Dashboard from './Dashboard';

class PatientLogin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Name: '',
            Email: '',
            Password: '',
            route: 'login'
        }
    }
    componentDidMount() {}
    onNameChange = (event) => {
        this.setState({ Name: event.target.value })
    }
    onEmailChange = (event) => {
        this.setState({ Email: event.target.value })
    }
    onPasswordChange = (event) => {
        this.setState({ Password: event.target.value })
    }
    onSignin = () => {
        fetch('https://caring-hopes.herokuapp.com/signinpeople', {
            method: 'post',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({
                email: this.state.Email,
                password: this.state.Password,
                name: this.state.Name
            })
        }).then(response => response.json())
            .then(user => {
                alert(user) ;
            })
    }
    render() {
        return (
            <Container>
                {this.state.route == 'login' ?
                    <Component>
                        <h1>Sign In</h1>
                        <p>"Some catchy slogan"</p>
                        <RowTwo>
                            <TextField id="outlined-basic" variant="outlined" label="Full Name" onChange={this.onNameChange}/>
                        </RowTwo>

                        <RowTwo>
                            <TextField id="outlined-basic" variant="outlined" label="Email" onChange={this.onEmailChange} />
                        </RowTwo>
                        <RowTwo>
                            <TextField
                                 id="outlined-basic" variant="outlined"
                                label="Password"
                                type="password"
                                autoComplete="current-password"
                                onChange={this.onPasswordChange}
                            />
                        </RowTwo>
                        <LoginButton onClick={this.onSignin}>
                            Sign In
                        </LoginButton>

                    </Component>
                    : <Dashboard name={this.state.Name} email={this.state.Email} />
                }
                <Component>
                    <span>Don't have an account? <a href="/patient-register">Sign up</a></span>
                </Component>
            </Container>
        );
    }
}

export default PatientLogin

const Container = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10vh 14vw;
    align-items: center;
    background-color: #fafafa;
`

const Component = styled.div`
    width: 50%;
    padding-right: 2.5rem;
    background-color: #fff;
    border: 1px solid #dbdbdb;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 5px;
    padding: 1rem;
    margin-bottom: 1rem;

    h1{
        font-size: 3.5rem;
        line-height: 3.8rem;
    }
    
    p{
        margin: 2rem 0;
        color: grey;
        width: 400px;
        text-align: center;
        font-size: 0.95rem;
    }

    span {
        font-size: 0.85rem;

        a{
            text-decoration: none;
            color: cornflowerblue;
            font-weight: 600;
        }
    }
`

const RowTwo = styled.div`
    margin-bottom: 0.5rem;
    width: 400px;
    
    div{
        width: 100%;
    }
`

const SubmitButton = styled.button`
    border: none;
    color: #fff;
    background-color: #eb4d55;
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    line-height: 1.5;
    cursor: pointer;
    
    &:hover{
        background: #e3131d;
        transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    }
`

const LoginButton = styled.button`
    border: none;
    color: #fff;
    background-color: #0095f6;
    padding: 0.55rem 1.5rem;
    font-size: 1rem;
    line-height: 1.5;
    cursor: pointer;
    width: 400px;
    border-radius: 5px;
    
    &:hover{
        background: #1383cb;
        transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    }
`