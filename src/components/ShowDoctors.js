import React from 'react'
import styled from 'styled-components'
import Card from './Card'
import Navbar from './Navbar'

const ShowDoctors = ({docType}) => {
    return (
        <Main>
            <Navbar />
            <PreMain>
                <SearchBox>
                    <input type="text" placeholder="Find doctor by speciality" />
                    <button>Search</button>
                </SearchBox>
                <h1>{docType} with Bangla Language</h1>
                <span>+ Language</span>
            </PreMain>
            {/* Search box here */}
            <Container>
                <CardContainer>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </CardContainer>
                <InfoContainer>
                    <h5>Why Dochouse</h5>
                    <ul>
                        <li>Round-the-clock doctor availability</li>
                        <li>Broad range of Specialities</li>
                        <li>Detailed digital prescriptions</li>
                        <li>Order medicines & tests online</li>
                        <li>Digitised health records</li>
                    </ul>

                    <h5>How does Online Appointement Work</h5>
                    <div>
                        <img src="https://newassets.apollo247.com/images/video-calling.svg" alt="" />
                        <span>HOW TO CONSULT A DOCTOR ONLINE VIA TEXT/AUDIO/VIDEO?</span>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum id iste quas! Numquam nam quas ducimus veritatis reprehenderit reiciendis nobis ratione minima, animi at suscipit quos quisquam, repudiandae quibusdam itaque!</p>
                </InfoContainer>
            </Container>
        </Main>
    )
}

export default ShowDoctors


const Main = styled.div`
    background: #f0f1eb;
    h1{
        font-weight: 600;
        font-size: 1.5rem;
        margin-top: 4rem;
        display: inline-block;
    }
    `

const PreMain = styled.div`
    padding: 0 7vw;

    span{
        margin-left: 0.7rem;
        font-size: 0.65rem;
        cursor: pointer;
        color: violet;
    }
`

const Container = styled.div`
    padding: 1rem 7vw;
    min-height: 100vh;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    `

const CardContainer = styled.div`
    width: 780px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

const InfoContainer = styled.div`
    width: 370px;
    height: auto;
    background: white;
    border-radius: 10px;
    padding: 1rem;

    ul{
        padding: 0.3rem 1rem;
        margin-bottom: 2rem;
    }

    li{
        font-size: 0.85rem;
    }
    p{
        font-size: 0.85rem;
        margin-top: 0.3rem;
    }

    h5{
        font-size: 1rem;
        font-weight: 500;
    }

    div{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0.4rem 0;

        img{
            width: 20%;
        }
        span{
            width: 75%;
            font-size: 0.9rem;
            text-transform: lowercase;
        }
    }
`

const SearchBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 780px;
    height: auto;
    border-radius: 7px;
    overflow: hidden;
    border: 1px solid #efe1e1;
    margin-top: 2rem;
    
    
    input{
        width: 80%;
        outline: none;
        border: none;
        background: white;
        /* color: white; */
        
        padding: 0.8rem 1.5rem;
    }
    button{
        width: 20%;
        height: 46px;
        background: #4393f9;
        color: white;
        
        border: none;
        cursor: pointer;

        &:hover{
            background: #3073c9;
            transition-duration: 250ms;
        }
    }
`

const Filter = styled.div`
    padding: 0.6rem;
    max-width: 300px;
    background-color: white;
    margin-top: 0.4rem;
`