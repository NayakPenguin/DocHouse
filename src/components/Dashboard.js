import React from 'react';
import styled from 'styled-components';
import DocNav from './DocNav';
import Navbar from './Navbar';
import MenuIcon from '@material-ui-icons/Menu';
import CallEndIcon from '@material-ui-icons/CallEnd';
import DashboardIcon from '@material-ui-icons/Dashboard';
import ExpandMoreIcon from '@material-ui-icons/ExpandMore';
import Appointments from './Appointments';
import DashboardHome from './DashboardHome';
import { useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

  const Dashboard = ({ name, email }) => {
    
      
      console.log(name);
      return (
            // 1. This is the default page for dashboard
            // 2. When we get the argument for name parameter we drill the prop to DashboardHome.js
            <Router>
                <Container>
                    <DocNav />
                    <Content>
                        <LeftContent>
                            <MainButton>
                                <div>
                                    <DashboardIcon style={{ fontSize: '1.8rem', fill: 'white' }} />
                                    <p>Dashboard</p>
                                </div>
                                <ExpandMoreIcon style={{ fontSize: '1.8rem', fill: 'white' }} />
                            </MainButton>
                            <Options>
                                <Link to="/dashboard">Home</Link>
                                <Link to="/dashboard/doc-appointments">Upcoming Consultations</Link>
                                <Link to="/">History</Link>
                                <Link to="/">Update Profile</Link>
                            </Options>
                        </LeftContent>
                        <RightContent>
                            <Switch>
                                <Route exact path="/dashboard">
                                    {/* 3. Prop drilling of name parameter */}
                                    {/* <DashboardHome name={name}/> */}
                                    {/* When name has some value then remove the bottom and uncomment the above */}
                                    <DashboardHome name="Dr. Random Doctor"/>
                                </Route>
                                <Route exact path="/dashboard/doc-appointments">
                                    <Appointments/>
                                </Route>
                            </Switch>
                        </RightContent>
                    </Content>
                </Container>
            </Router>
        )

    }
    
    
export default Dashboard;

const Container = styled.div`
    min-height: 100vh;
    background-color: #efefef;
`

const Content = styled.div`
    display: flex;
    justify-content: space-between;
`


const RightContent = styled.div`
    width: 75%;
    padding: 0.6rem;
    height: calc(100vh - 81px);
    overflow-x: hidden;
    overflow-y: scroll;

    section{
        display: flex;
        align-items: center;
        margin: 0 1rem;

        span{
            margin-left: 1rem;
            font-size: 1.2rem;
            font-weight: 600;
        }
    }
`



const LeftContent = styled.div`
    width: 25%;
    height: calc(100vh - 81px);
    background-color: white;
    padding: 1rem;
`

const MainButton = styled.div`
    padding: 1rem;
    border-radius: 12px;
    background-color: #711584;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 12px 15px 0 rgb(113 22 133 / 13%);
    cursor: pointer;

    div{
        display: flex;
        align-items: center;
    }

    p{
        color: white;
        margin-left: 1rem;
    }
`

const Options = styled.div`
    padding-left: 4rem;
    margin-top: 0.5rem;

    a{
        color: #7e7e7e;
        cursor: pointer;
        text-decoration: none;
        display: block;

        &:hover{
            color: #333;
            transition-duration: 250ms;
        }
    }
`




