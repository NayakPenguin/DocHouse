import React from 'react';
import styled from 'styled-components' ;

class Dashboard extends React.Component{
    render(){
        const { name , email } = this.props ;
        console.log(this.props.name) ;
        return(
            //Put your design here , however keep {'Hi Dr '+ name} to display
            <Container>
                <h1>
              {'Hi Dr '+ name}
              </h1>
            </Container>
        )
    }
}
export default Dashboard ;

const Container = styled.div`
    min-height: 100vh;
    display: flex;
    justify-content: center;
    padding: 10vh 14vw;
    align-items: center;
`