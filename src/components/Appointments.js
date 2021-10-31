import React from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import CallEndIcon from '@material-ui/icons/CallEnd';
import styled from 'styled-components';

const Appointments = () => {
    return (
        <>
            <section>
                <MenuIcon style={{ fontSize: '1.8rem' }} />
                <span>Appointments</span>
            </section>
            <HeadDesc>
                <h3>Hi Welcome Back !</h3>
                <span>Your patients are waiting for you, please join the meetings.</span>
            </HeadDesc>
            {/* <Appointment>
                <Photo>
                    <AppointmentHeading>
                        Photo
                    </AppointmentHeading>
                    <AppointmentDetails>
                        <img src="http://medic-app-html.type-code.pro/assets/content/user-40-1.jpg" alt="" />
                    </AppointmentDetails>
                    <AppointmentDetails>
                        <img src="http://medic-app-html.type-code.pro/assets/content/user-40-1.jpg" alt="" />
                    </AppointmentDetails>
                    <AppointmentDetails>
                        <img src="http://medic-app-html.type-code.pro/assets/content/user-40-1.jpg" alt="" />
                    </AppointmentDetails>
                    <AppointmentDetails>
                        <img src="http://medic-app-html.type-code.pro/assets/content/user-40-1.jpg" alt="" />
                    </AppointmentDetails>
                    <AppointmentDetails>
                        <img src="http://medic-app-html.type-code.pro/assets/content/user-40-1.jpg" alt="" />
                    </AppointmentDetails>
                    <AppointmentDetails>
                        <img src="http://medic-app-html.type-code.pro/assets/content/user-40-1.jpg" alt="" />
                    </AppointmentDetails>
                    <AppointmentDetails>
                        <img src="http://medic-app-html.type-code.pro/assets/content/user-40-1.jpg" alt="" />
                    </AppointmentDetails>
                    <AppointmentDetails>
                        <img src="http://medic-app-html.type-code.pro/assets/content/user-40-1.jpg" alt="" />
                    </AppointmentDetails>



                </Photo>
                <Name>
                    <AppointmentHeading>
                        Name
                    </AppointmentHeading>
                    <AppointmentDetails>
                        Atanu Nayak
                    </AppointmentDetails>
                    <AppointmentDetails>
                        Atanu Nayak
                    </AppointmentDetails>
                    <AppointmentDetails>
                        Atanu Nayak
                    </AppointmentDetails>
                    <AppointmentDetails>
                        Atanu Nayak
                    </AppointmentDetails>
                    <AppointmentDetails>
                        Atanu Nayak
                    </AppointmentDetails>
                    <AppointmentDetails>
                        Atanu Nayak
                    </AppointmentDetails>
                    <AppointmentDetails>
                        Atanu Nayak
                    </AppointmentDetails>
                    <AppointmentDetails>
                        Atanu Nayak
                    </AppointmentDetails>


                </Name>
                <Email>
                    <AppointmentHeading>
                        Email
                    </AppointmentHeading>
                    <AppointmentDetails>
                        fake.nayaker@gmail.com
                    </AppointmentDetails>
                    <AppointmentDetails>
                        fake.nayaker@gmail.com
                    </AppointmentDetails>
                    <AppointmentDetails>
                        fake.nayaker@gmail.com
                    </AppointmentDetails>
                    <AppointmentDetails>
                        fake.nayaker@gmail.com
                    </AppointmentDetails>
                    <AppointmentDetails>
                        fake.nayaker@gmail.com
                    </AppointmentDetails>
                    <AppointmentDetails>
                        fake.nayaker@gmail.com
                    </AppointmentDetails>
                    <AppointmentDetails>
                        fake.nayaker@gmail.com
                    </AppointmentDetails>
                    <AppointmentDetails>
                        fake.nayaker@gmail.com
                    </AppointmentDetails>


                </Email>
                <Date>
                    <AppointmentHeading>
                        Date
                    </AppointmentHeading>
                    <AppointmentDetails>
                        31 Oct 2021
                    </AppointmentDetails>
                    <AppointmentDetails>
                        31 Oct 2021
                    </AppointmentDetails>
                    <AppointmentDetails>
                        31 Oct 2021
                    </AppointmentDetails>
                    <AppointmentDetails>
                        31 Oct 2021
                    </AppointmentDetails>
                    <AppointmentDetails>
                        31 Oct 2021
                    </AppointmentDetails>
                    <AppointmentDetails>
                        31 Oct 2021
                    </AppointmentDetails>
                    <AppointmentDetails>
                        31 Oct 2021
                    </AppointmentDetails>
                    <AppointmentDetails>
                        31 Oct 2021
                    </AppointmentDetails>


                </Date>
                <VisitTime>
                    <AppointmentHeading>
                        VisitTime
                    </AppointmentHeading>
                    <AppointmentDetails>
                        17:00 - 17:15 hrs
                    </AppointmentDetails>
                    <AppointmentDetails>
                        17:00 - 17:15 hrs
                    </AppointmentDetails>
                    <AppointmentDetails>
                        17:00 - 17:15 hrs
                    </AppointmentDetails>
                    <AppointmentDetails>
                        17:00 - 17:15 hrs
                    </AppointmentDetails>
                    <AppointmentDetails>
                        17:00 - 17:15 hrs
                    </AppointmentDetails>
                    <AppointmentDetails>
                        17:00 - 17:15 hrs
                    </AppointmentDetails>
                    <AppointmentDetails>
                        17:00 - 17:15 hrs
                    </AppointmentDetails>
                    <AppointmentDetails>
                        17:00 - 17:15 hrs
                    </AppointmentDetails>


                </VisitTime>
                <Number>
                    <AppointmentHeading>
                        Number
                    </AppointmentHeading>
                    <AppointmentDetails>
                        +91 9323189311
                    </AppointmentDetails>
                    <AppointmentDetails>
                        +91 9323189311
                    </AppointmentDetails>
                    <AppointmentDetails>
                        +91 9323189311
                    </AppointmentDetails>
                    <AppointmentDetails>
                        +91 9323189311
                    </AppointmentDetails>
                    <AppointmentDetails>
                        +91 9323189311
                    </AppointmentDetails>
                    <AppointmentDetails>
                        +91 9323189311
                    </AppointmentDetails>
                    <AppointmentDetails>
                        +91 9323189311
                    </AppointmentDetails>
                    <AppointmentDetails>
                        +91 9323189311
                    </AppointmentDetails>


                </Number>
                <Condition>
                    <AppointmentHeading>
                        Condition
                    </AppointmentHeading>
                    <AppointmentDetails>
                        <div>Critical/Urgent</div>
                    </AppointmentDetails>
                    <AppointmentDetails>
                        <div>Critical/Urgent</div>
                    </AppointmentDetails>
                    <AppointmentDetails>
                        <div>Critical/Urgent</div>
                    </AppointmentDetails>
                    <AppointmentDetails>
                        <div>Critical/Urgent</div>
                    </AppointmentDetails>
                    <AppointmentDetails>
                        Critical
                    </AppointmentDetails>
                    <AppointmentDetails>
                        Critical
                    </AppointmentDetails>
                    <AppointmentDetails>
                        Critical
                    </AppointmentDetails>
                    <AppointmentDetails>
                        Critical
                    </AppointmentDetails>


                </Condition>
                <Msg>
                    <AppointmentHeading>
                        Contact
                    </AppointmentHeading>
                    <AppointmentDetails>
                        <CallEndIcon style={{ marginLeft: '1.25rem', cursor: 'pointer'}} />
                    </AppointmentDetails>
                    <AppointmentDetails>
                        <CallEndIcon style={{ marginLeft: '1.25rem', cursor: 'pointer'}} />
                    </AppointmentDetails>
                    <AppointmentDetails>
                        <CallEndIcon style={{ marginLeft: '1.25rem', cursor: 'pointer'}} />
                    </AppointmentDetails>
                    <AppointmentDetails>
                        <CallEndIcon style={{ marginLeft: '1.25rem', cursor: 'pointer'}} />
                    </AppointmentDetails>
                    <AppointmentDetails>
                        <CallEndIcon style={{ marginLeft: '1.25rem', cursor: 'pointer'}} />
                    </AppointmentDetails>
                    <AppointmentDetails>
                        <CallEndIcon style={{ marginLeft: '1.25rem', cursor: 'pointer'}} />
                    </AppointmentDetails>
                    <AppointmentDetails>
                        <CallEndIcon style={{ marginLeft: '1.25rem', cursor: 'pointer'}} />
                    </AppointmentDetails>
                    <AppointmentDetails>
                        <CallEndIcon style={{ marginLeft: '1.25rem', cursor: 'pointer'}} />
                    </AppointmentDetails>
                </Msg>
            </Appointment> */}

            <CardHolder>
                <Card>
                    <CardBody>
                        <Patient>
                            <img src="https://mediqu.dexignzone.com/xhtml/images/avatar/2.jpg" alt="" />
                            <div>
                                <h4>Kat Kristan</h4>
                                <span>
                                    Female, 34
                                </span>
                            </div>
                        </Patient>
                        <ProblemDesc>
                            Since last few weeks I was upset about my life also a lot of
                            negativity was around me. I was so uncertain about my life
                            that couldn't figure our how do I survive. And then, my Boyfriend 
                            also decided to dump me, he just helped me go to depression 
                            a bit more. I was councelling and also few medicines that could 
                            keep me healthy and happy. 
                        </ProblemDesc>
                        <BasicCredentials>
                            <div>
                                <span>Sufferering : </span>
                                Depression
                            </div>
                            <div>
                                <span>Email : </span>
                                fake.nayak@gmail.com
                            </div>
                        </BasicCredentials>
                        <AppointmentTiming>
                            * Appointment is scheduled at 19:15 hrs.
                        </AppointmentTiming>
                    </CardBody>
                    <CardFooter>
                        Join Now
                    </CardFooter>
                </Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
            </CardHolder>
        </>
    )
}

export default Appointments

const HeadDesc = styled.div`
    padding: 0.6rem 1rem;
    border-radius: 10px;
    background-color: white;
    margin: 1rem;
    margin-bottom: 2rem;

    h3{
        font-weight: 600;
        font-size: 1.2rem;
    }
    span{
        font-size: 0.8rem;
    }
`

// const Appointment = styled.div`
//     margin: 0 1rem;
//     border-radius: 10px;
//     background-color: white;
//     display: flex;
//     justify-content: space-between;
//     overflow: hidden;
// `

// const Photo = styled.div`
//     width: 7%;
//     height: 100%;
// `

// const Name = styled.div`
//     width: 15%;
//     height: 100%;
    
// `
// const Email = styled.div`
//     width: 20%;
//     height: 100%;
    
// `
// const Date = styled.div`
//     width: 12%;
//     height: 100%;
    
// `
// const VisitTime = styled.div`
//     width: 12%;
//     height: 100%;
// `

// const Number = styled.div`
//     width: 12%;
//     height: 100%;
// `

// const Condition = styled.div`
//     width: 12%;
//     height: 100%;
// `

// const AppointmentHeading = styled.div`
//         padding: 0.8rem 0.7rem;
//         font-size: 0.9rem;
//         font-weight: 600;
//         background-color: #414d87;
//         color: white;
// `


// const AppointmentDetails = styled.div`
//         height: 3.6rem;
//         background-color: burlywood;
//         border-top: 1px solid black;
//         width: 100%;
//         display: flex;
//         align-items: center;
//         padding: 0 0.7rem;
//         overflow: hidden;
//         font-size: 0.8rem;
//         display: flex;
//         align-items: center;

//         img{
//             height: 2.8rem;
//             border-radius: 50%;
//         }

//         div{
//             font-weight: 600;
//         }
// `

// const Msg = styled.div`
//     width: 10%;
//     height: 100%;
// `

const CardHolder = styled.div`
    margin: 0 1rem;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`

const Card = styled.div`
    width: 32%;
    height: 400px;
    background-color: white;
    border-radius: 10px;
    margin-bottom: 0.8rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
    `

const CardBody = styled.div`
    height: 88%;
    padding: 0.8rem;
    position: relative;
`

const CardFooter = styled.div`
    height: 12%;
    background: #4393f9;
    color: white;
    display: grid;
    place-items: center;
    cursor: pointer;
`

const Patient = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    img{
        width: 20%;
        border-radius: 50%;
    }

    div{
        width: 76%;
        display: flex;
        flex-direction: column;
        justify-content: center;

        h5{
            font-size: 1rem;
        }

        span{
            font-size: 0.8rem;
        }
    }
`

const ProblemDesc = styled.div`
    margin: 1.6rem 0 0.6rem 0;
    font-size: 0.82rem;
`

const BasicCredentials = styled.div`
    div{
        display: block;
        font-size: 0.82rem;

        span{
            font-weight: 600;
            font-size: 0.82rem;
        }
    }
`

const AppointmentTiming = styled.div`
    font-size: 0.75rem;
    position: absolute;
    bottom: 5px;
    font-weight: 600;
    color: red;
`