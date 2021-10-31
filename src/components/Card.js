import React from 'react'
import styled from 'styled-components'

const Card = () => {
    return (
        <>
  
        <Container>
            <Content>
                <Image>
                    <img src="https://newassets.apollo247.com/doctors/8374574007.jpg" alt="" />

                    <Options>
                        <div>
                            <img src="https://newassets.apollo247.com/images/ic-video.svg" alt="" />
                            Online
                        </div>
                        <div>
                            <img src="https://newassets.apollo247.com/images/fa-solid-hospital.svg" alt="" />
                            Clinic
                        </div>
                    </Options>
                </Image>
                <Text>
                    <h5>Dr. Yakkala Suresh Babu</h5>
                    {/* <Avalibility>
                        Avalible in 18 mins
                    </Avalibility> */}
                    <Qualifications>
                        <div>General Physician/ Internal Medicine Specialist</div>
                        <span> | 1 Year Exp.</span>
                    </Qualifications>
                    <Pricing>
                        You Pay 
                        <div>
                            ₹ 1000 
                            <span> | prescription included</span>
                        </div>
                    </Pricing>
                    <QualificationDesc>
                        <span>MBBS, MRCGP</span>
                        Apollo heart centre, Thousand lights, Chennai
                    </QualificationDesc>
                </Text>
            </Content>
            <Footer>
                Book Appointment
            </Footer>
            
        </Container>
        </>
    )
}

export default Card

const Container = styled.div`
    position: relative;
    height: 320px;
    width: 380px;
    background: white;
    margin-bottom: 1rem;
    box-shadow: 11px 11px 36px 19px #f3eaedcf;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
`

const Content = styled.div`
    height: 85%;
    display: flex;
    justify-content: space-between;
`

const Footer = styled.div`
    height: 15%;
    background-color: #a6a0c7; 
    color: white;
    text-transform: uppercase;
    display: grid;
    place-items: center;
    font-size: 0.9rem;
    cursor: pointer;

    &:hover{
        background-color: #817aa7;
        transition-duration: 250ms;
    }
`

const Image = styled.div`
    width: 30%;
    overflow: hidden;
    background: linear-gradient(
    30deg,#ffffff 50%,transparent 50%),linear-gradient(
    -30deg,#fff 50%,#a6a0c7 50%);
    padding: 0.45rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    img{
        width: 100%;
        border-radius: 50%;
    }
`


const Options = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 0 10%;
    
    div{
        width: 48%;
        display: flex;
        flex-direction: column;
        align-items: center;
        cursor: pointer;
        
        font-size: 0.6rem;
        
        img{
            width: 60%;
        }
    }
`


const Text = styled.div`
    width: 70%;
    padding: 0.45rem;
    position: relative;

    h5{
        font-weight: 500;
        font-size: 1.1rem;
    }

`

const Qualifications = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0.5rem 0 5rem 0;

    div{
        width: 70%;
        font-size: 0.75rem;
        padding-right: 0.3rem;
    }
    span{
        width: 30%;
        font-size: 0.75rem;
    }
`

const Pricing = styled.div`
    font-size: 0.6rem;
    color: #0087ba;

    div{
        font-size: 1rem;
        color: #0087ba;

        span{
            font-size: 0.7rem;
        }
    }
`
const QualificationDesc = styled.div`
    font-size: 0.7rem;
    position: absolute;
    bottom: 1rem;
    width: 90%;

    span{
        display: block;
        font-size: 0.75rem;
        font-weight: 500;
    }
`

const Avalibility = styled.div`
    font-size: 0.8rem;
`