import React, { useState } from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'
import ShowDoctors from './ShowDoctors';

const Home = () => {

    
    const [searchText, setSearchText] = useState("");
    const [showDoctors, setShowDoctors] = useState(false)
    const [firstQuestion, setFirstQuestion] = useState(false);
    const [secondQuestion, setSecondQuestion] = useState(false);
    const [thirdQuestion, setThirdQuestion] = useState(false);
    const [fourthQuestion, setFourthQuestion] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if(searchText){
            setShowDoctors(true);
        }


    }


    return (
        <> 
        {   
            !showDoctors ?
            (
            <>
            <PageOne>
                <Navbar />
                <Container>
                    <h1>Reach a doctor with just a click.</h1>
                    <p>DocHouse is an initiative by Skyhigh Clinic to bring world-class health care service to the location & time that suits you best. You could be travelling or tied up with your schedule - wherever and whenever - simply log-in and have access to world-class medical care.</p>
                    <SearchBox onSubmit={handleSubmit}>
                        <input type="text" placeholder="Find doctor by speciality" value={searchText} onChange={(e) => setSearchText(e.target.value)}/>
                        <button type="submit">Search</button>
                    </SearchBox>
                    <AdvertisementMenu>
                        <div>
                            <img src="https://www.housy.de/images/icons-8-manager-96.png" alt="" />
                            <span>Independent service</span>
                        </div>
                        <Middle>
                            <img src="https://www.housy.de/images/icons-8-online-support-96.png" alt="" />
                            <span>Doctors 24h Available</span>
                        </Middle>
                        <div>
                            <img src="https://www.housy.de/images/icons-8-christmas-gift-96.png" alt="" />
                            <span>Give your life a gift</span>
                        </div>

                    </AdvertisementMenu>
                </Container>
            </PageOne>

            <PageTwo>
                <HeaderOne>
                    <h1>Not sure which doctor to consult?</h1>
                    Know more details on specialities
                </HeaderOne>
                <ContentOne>
                    <ContainerCard>
                        <img src="https://assets.mfine.co/api/contentservice/attachments/download/web/common/landing_pages/physician.svg" alt="" />
                        <div>
                            <h3>Physician</h3>
                            <p>Physicians offer non-surgical health care to patients, diagnose medical problems and monitor patient's health.</p>
                        </div>
                    </ContainerCard>
                    <ContainerCard>
                        <img src="https://assets.mfine.co/api/contentservice/attachments/download/web/common/landing_pages/gynaecologist.svg" alt="" />
                        <div>
                            <h3>Gynecologist</h3>
                            <p>A gynecologist is a doctor who specializes in female reproductive health.</p>
                        </div>
                    </ContainerCard>
                    <ContainerCard>
                        <img src="https://assets.mfine.co/api/contentservice/attachments/download/web/common/landing_pages/pediatrician.svg" alt="" />
                        <div>
                            <h3>Paediatricians</h3>
                            <p>Paediatricians diagnose and treat health conditions that affect babies, children and young people.</p>
                        </div>
                    </ContainerCard>
                    <ContainerCard>
                        <img src="https://assets.mfine.co/api/contentservice/attachments/download/web/common/landing_pages/orthopedician.svg" alt="" />
                        <div>
                            <h3>Orthopedician</h3>
                            <p>Orthopedic surgeons are doctors who specialize in the musculoskeletal system  that are so essential to movement.</p>
                        </div>
                    </ContainerCard>
                    <ContainerCard>
                        <img src="https://assets.mfine.co/api/contentservice/attachments/download/web/common/landing_pages/eye-specialist.svg" alt="" />
                        <div>
                            <h3>Ophthalmologist</h3>
                            <p>An ophthalmologist is a physician who specializes in the diagnosis and treatment of diseases of the eye.</p>
                        </div>
                    </ContainerCard>
                    <ContainerCard>
                        <img src="https://assets.mfine.co/api/contentservice/attachments/download/web/common/landing_pages/physiotherapist.svg" alt="" />
                        <div>
                            <h3>Psychotherapist</h3>
                            <p>Psychotherapy, or talk therapy, is a way to help people with a broad variety of mental illnesses and emotional difficulties.</p>
                        </div>
                    </ContainerCard>
                    <ContainerCard>
                        <img src="https://assets.mfine.co/api/contentservice/attachments/download/web/common/landing_pages/dentist.svg" alt="" />
                        <div>
                            <h3>Dentist</h3>
                            <p>Dentists diagnose and treat problems with patients' teeth, gums, and related parts of the mouth.</p>
                        </div>
                    </ContainerCard>
                    <HiddenContainerCard>

                    </HiddenContainerCard>
                    {/* <ContainerCard>
                    <img src="" alt="" />
                    <div>
                        <h3>Physician</h3>
                        <p>Physicians offer non-surgical health care to patients, diagnose medical problems and monitor patient's health.</p>
                    </div>
                </ContainerCard>
                <ContainerCard>
                    <img src="" alt="" />
                    <div>
                        <h3>Physician</h3>
                        <p>Physicians offer non-surgical health care to patients, diagnose medical problems and monitor patient's health.</p>
                    </div>
                </ContainerCard> */}
                </ContentOne>
            </PageTwo>

            <PageThree>
                <h1>Frequently Asked Questions</h1>
                <PageThreeContent>
                    <PageThreeContentItem className="question" onClick={e => setFirstQuestion(!firstQuestion)}>
                        <div>
                            What is an online doctor consultation or online medical consultation?
                            <ion-icon name="add-circle-outline" id="add-circle-outline"></ion-icon>
                        </div>
                        {
                            firstQuestion ? (
                                <p className="answer">
                                    When you speak to a doctor about your health concerns through an audio/video/
                                    chat, it is known as an online doctor consultation or online medical consultation.
                                    This is a good alternative for times when you cannot visit a doctor physically at the clinic or hospital. An online doctor consultation works the same way as a physical
                                    consultation where you get a prescription after the consultation is complete. Some
                                    of the benefits of an online medical consultation at Apollo 24/7 are that you can consult
                                    a doctor at the convenience of your home and can order the prescribed medicines by using
                                    the ‘Order Medicines’ option.
                                </p>
                            ) : (
                                <></>
                            )
                        }
                    </PageThreeContentItem>
                    <PageThreeContentItem className="question" onClick={e => setSecondQuestion(!secondQuestion)}>
                        <div>
                            How do I consult a doctor online now?
                            <ion-icon name="add-circle-outline" id="add-circle-outline"></ion-icon>
                        </div>
                        {
                            secondQuestion ? (
                                <p className="answer">
                                    You can book an online consultation either on the website
                                    or mobile app of Apollo 24/7 in two ways.
                                    Click on the ‘Find a Doctor’ button on the homepage of the website/app,
                                    select a specialty or type the name of the doctor directly. Once you select a
                                    doctor, you can click on the “Consult Now’ button to start the online consultation.
                                    If you're looking for a doctor based on your symptoms, you may start by going to
                                    the homepage of the website/app. Then click on the ‘Track Symptoms’ tab,
                                    search for your symptoms or select a few of them based on your health condition.
                                    Click ‘Show Doctors’, select a doctor and click on the
                                    ‘Consult Now’ button to start the online consultation.
                                </p>
                            ) : (
                                <></>
                            )
                        }
                    </PageThreeContentItem>
                    <PageThreeContentItem className="question" onClick={e => setThirdQuestion(!thirdQuestion)}>
                        <div>
                            Where is my prescription for the online doctor consultation?
                            <ion-icon name="add-circle-outline" id="add-circle-outline"></ion-icon>
                        </div>
                        {
                            thirdQuestion ? (
                                <p className="answer">
                                    You can find your prescription for your online consult on the ‘Health Records’ tab. Once you click on this tab,
                                    you will be able to view/download your prescription by clicking on the ‘Consults Rx’ tab.
                                </p>
                            ) : (
                                <></>
                            )
                        }
                    </PageThreeContentItem>
                    <PageThreeContentItem className="question" onClick={e => setFourthQuestion(!fourthQuestion)}>
                        <div>
                            How do I pay for the online/offline doctor consultations?
                            <ion-icon name="add-circle-outline" id="add-circle-outline"></ion-icon>
                        </div>
                        {
                            fourthQuestion ? (
                                <p className="answer">Online consultations are prepaid and the payment can be 
                                made by either of the given ways – Paytm, Debit/Credit Card, and Netbanking. 
                                For offline consultations, you will need to make a partial payment online and 
                                the rest can be paid to the doctor at the hospital/clinic.</p>
                            ) : (
                                <></>
                            )
                        }
                    </PageThreeContentItem>
                </PageThreeContent>
            </PageThree>
            <PageFour>
                <h1>Your Health Feed</h1>

                <PageFourMenu>
                    <PageFourMenuItem>
                        <img src="https://dg0qqklufr26k.cloudfront.net/wp-content/uploads/2021/10/shutterstock_1767203567.jpg" alt="" />
                        <h3>12 Simple Ways To Cope With Anxiety Symptoms</h3>
                    </PageFourMenuItem>
                    <PageFourMenuItem>
                        <img src="https://dg0qqklufr26k.cloudfront.net/wp-content/uploads/2021/10/tech-neck-1-300x188.jpg" alt="" />
                        <h3>5 Reasons Why WFH Employees Suffer From Tech Neck</h3>
                    </PageFourMenuItem>
                    <PageFourMenuItem>
                        <img src="https://dg0qqklufr26k.cloudfront.net/wp-content/uploads/2021/10/Does-Ayurvedic-Kadha-Really-Work-300x188.jpg" alt="" />
                        <h3>Does Ayurvedic Kadha Really Work?</h3>
                    </PageFourMenuItem>
                    <PageFourMenuItem>
                        <img src="https://dg0qqklufr26k.cloudfront.net/wp-content/uploads/2021/10/shutterstock_115369372-300x188.jpg" alt="" />
                        <h3>Constipation In Children: How To Help Your Baby?</h3>
                    </PageFourMenuItem>
                    <ReadMore>
                        Read More
                    </ReadMore>
                </PageFourMenu>
            </PageFour>
            <Footer>
                © 2021 Zuckerburg Tech Health Services
            </Footer>
            </>)
        : (
            <>
                <ShowDoctors docType={searchText}/>
            </>
        )    
        
        }
        </>
    )
}

export default Home


const PageOne = styled.div`
    min-height: 100vh;
    /* background: linear-gradient(  rgb(0 0 0 / 75%),rgb(0 0 0 / 75%) ), url('https://wallpapercave.com/wp/wp2789220.jpg') center center / cover fixed no-repeat; */
    /* background: #f7f7f859; */
    background: #f0f1eb;
`

const Container = styled.div`
    margin-top: 20vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1{
        /* color: white; */
        letter-spacing: 0.05rem;
    }
    p{
        margin-top: 1rem;
        text-align: center;
        width: 45%;
        color: #686565;
        font-size: 0.9rem;
        line-height: 1.35rem;
        letter-spacing: 0.05rem;
    }
`

const SearchBox = styled.form`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 40%;
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

const AdvertisementMenu = styled.div`
    height: 90px; 
    width: 740px;
    background: white;
    /* margin-top: 100px; */
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
    position: absolute;
    bottom: 3vh;

    div{
        width: 33%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        padding: 10px 0;

        span{
            font-size: 0.8rem;
            color: #2d2d2d9c;
        }
    }
`

const Middle = styled.div`
    border-left: 1px solid rgba(151,151,151, 0.26);
    border-right: 1px solid rgba(151,151,151, 0.26);
`

const PageTwo = styled.div`
    background: white;
    min-height: 100vh;
    padding: 3rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const HeaderOne = styled.div`
    text-align: center;
`

const ContentOne = styled.div`
    margin-top: 2rem;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 1000px;
`

const ContainerCard = styled.div`
    width: 49%;
    height: 100px;
    margin-top: 0.5rem;
    border-radius: 7px;
    display: flex;
    cursor: pointer;
    background: #ecf7fb;
    box-shadow: 0 12px 24px 0 #c7bbbb5e;
    
    &:hover{
        box-shadow: 0 12px 24px 0 rgb(106 97 97 / 37%);
        transition-duration: 250ms;
    }

    div{
        display: flex;
        flex-direction: column;
        justify-content: center;

        h3{
            font-weight: 600;
        }

        p{
            font-size: 0.8rem;
            padding: 0 0.2rem;
        }
    }

    img{
        height: 100%;
    }
`

const HiddenContainerCard = styled.div`
    width: 49%;
    height: 100px;
    background: transparent;
    margin-top: 0.5rem;
`

const PageThree = styled.div`
    min-height: 80vh;
    /* background: #f7f7f859; */
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4rem 0;

    h1{
        margin-bottom: 0.75rem;
    }
`

const PageThreeContent = styled.div`
    width: 950px;
    display: flex;
    flex-direction: column;

`

const PageThreeContentItem = styled.div`
    width: 100%;
    padding: 1.5rem 1rem;
    border-radius: 16px;
    margin-top: 1.5rem;
    cursor: pointer;
    font-size: 0.9rem;
    /* background: #ecf7fa; */
    /* box-shadow: 1px 2px 20px 0 #bbbaba5e; */
    /* background: #4393f99c; */
    /* box-shadow: 10px 10px 30px 0 rgb(203 185 185 / 37%); */
    background: #ecf7fb;
    box-shadow: 0 12px 24px 0 #c7bbbb5e;
    

    
    &:hover{
        box-shadow: 0 12px 24px 0 #a198985e;
        transition-duration: 450ms;
    }
    
    
    div{
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-weight: 500;
        font-weight: 600;
    }
    
    p{
        margin-top: 1rem;
    }
`

const ReadMore = styled.div`
    width: 100%;
    padding: 0.75rem 0;
    text-align: center;
    background: #b0d2db;
    border-radius: 10px;
    cursor: pointer;

    &:hover{
        background: #9eb9c1;
        transition-duration: 250ms;
    }
`



const PageFour = styled.div`
    display: flex;
    flex-direction: column;   
    align-items: center;
    margin-bottom: 4rem;


    h1{
        margin-bottom: 2rem;
    }
`

const PageFourMenu = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 960px;
`


const PageFourMenuItem = styled.div`
    width: 47%;
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    h3{
        font-size: 1rem;
        font-weight: 600;
        padding: 0.4rem 0.6rem;
        text-align: center;
    }

    

    img{
        width: 100%;
        border-radius: 10px;
        cursor: pointer;

        &:hover{
            box-shadow: 0 12px 24px 0 #897c7ca6;
            transition-duration: 250ms;
        }
    }
`

const Footer = styled.div`
    padding: 1.8rem;
    font-size: 0.8rem;
    background-color: #265252;
    color: white;
    text-align: center;
`