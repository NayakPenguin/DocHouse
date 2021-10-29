import React from 'react' ;
import styled from 'styled-components' ;
import TextField from '@material-ui/core/TextField';
import { render } from '@testing-library/react';
import Dashboard from './Dashboard' ;

class Login extends React.Component{
    constructor(props){
        super(props) ;
        this.state = {
          Name:'',
          Email:'',
          Password:'',
          route:'login'
        }
      } 
    componentDidMount(){
        fetch('https://caring-hopes.herokuapp.com').then(response => response.json())
        .then(console.log) ;
     }
     onNameChange = (event)=>{
        this.setState({Name : event.target.value})
      } 
     onEmailChange = (event)=>{
        this.setState({Email : event.target.value})
      } 
      onPasswordChange = (event)=>{
        this.setState({Password : event.target.value})
      }
      onSignin = ()=>{
        fetch('https://caring-hopes.herokuapp.com/signin' , {
            method : 'post' ,
            headers : {'content-type' : 'application/json'} ,
            body : JSON.stringify({
              email : this.state.Email ,
              password : this.state.Password,
              name: this.state.Name
            })
          }).then(response=>response.json())
          .then(user =>{
            if(user.name)
            {
             this.setState({route:'Dashboard'}) ;
            }
            else{
              alert(user) ;
            }
          })
      }
    render(){
    return (
        <Container>
            {this.state.route == 'login'?
            <Component>
                <h1>Sign Up <br /> It's easy.</h1>
                <RowOne>
                    <TextField id="standard-basic" label="Full Name" onChange={this.onNameChange}/>
                </RowOne>
                <RowTwo>
                    <TextField id="standard-basic" label="Email" onChange={this.onEmailChange} />
                </RowTwo>
                <RowTwo>
                    <TextField
                        id="standard-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        onChange={this.onPasswordChange}
                    />
                </RowTwo>
                <SubmitButton  onClick={this.onSignin}>
                    Log In
                </SubmitButton>

            </Component>
            :<Dashboard name={this.state.Name} email={this.state.Email}/>
    }
        </Container>
    ) ;
    }
}

export default Login

const Container = styled.div`
    min-height: 100vh;
    display: flex;
    justify-content: center;
    padding: 10vh 14vw;
    align-items: center;
`

const Component = styled.div`
    width: 50%;
    padding-right: 2.5rem;
    h1{
        font-size: 3.5rem;
        line-height: 3.8rem;
        margin-bottom: 3rem;
    }
`

const RowOne = styled.div`
    margin-bottom: 1.5rem;
    width: 450px;
    display: flex;
    justify-content: space-between;


    div{
        /* margin-right: 0.75rem; */
        width: 90%;
    }
`

const RowTwo = styled.div`
    margin-bottom: 1.5rem;
    width: 425px;
    
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