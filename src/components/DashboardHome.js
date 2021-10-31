import React from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import CallEndIcon from '@material-ui/icons/CallEnd';
import styled from 'styled-components';
import AssignmentIcon from '@material-ui/icons/Assignment';
import AirlineSeatFlatIcon from '@material-ui/icons/AirlineSeatFlat';
import DuoIcon from '@material-ui/icons/Duo';
import EuroSymbolIcon from '@material-ui/icons/EuroSymbol';

const DashboardHome = ({name}) => {

    // console.log(name);
    
    return (
        <>
            <section>
                <MenuIcon style={{ fontSize: '1.8rem' }} />
                <span>Dashboard</span>
            </section>
            <HeadDesc>
                <CoverImage>
                    {/* <img src="https://d3pc1xvrcw35tl.cloudfront.net/ln/images/1103x827/surgicalteam_202011134182.jpg" alt="" /> */}
                </CoverImage>
                <Doctor>
                    <img src="https://mediqu.dexignzone.com/react/demo/static/media/profile.a81b3bec.png" alt="" />
                    <div>
                        <h5>{name}</h5>
                        <p>MBBS, Serbia school of Medical Science</p>
                    </div>
                </Doctor>
            </HeadDesc>
            <DoctorMiniAnalytics>
                <MiniAnalyticsCard>
                    <AssignmentIcon style={{width: '30%', fontSize: '3rem', fill: '#9ab4fc'}} />
                    <div>
                        <h4>Appointments</h4>
                        <span style={{fontSize: '1.1rem', color: '#3c58a7'}} >
                            258
                        </span>
                    </div>
                </MiniAnalyticsCard>
                <MiniAnalyticsCard>
                    <AirlineSeatFlatIcon style={{width: '30%', fontSize: '3rem', fill: '#9ab4fc'}} />
                    <div>
                        <h4>New patients</h4>
                        <span style={{fontSize: '1.1rem', color: '#3c58a7'}} >
                            103
                        </span>
                    </div>
                </MiniAnalyticsCard>
                <MiniAnalyticsCard>
                    <DuoIcon style={{width: '30%', fontSize: '3rem', fill: '#9ab4fc'}} />
                    <div>
                        <h4>This week</h4>
                        <span style={{fontSize: '1.1rem', color: '#3c58a7'}} >
                            28
                        </span>
                    </div>
                </MiniAnalyticsCard>
                <MiniAnalyticsCard>
                    <EuroSymbolIcon style={{width: '30%', fontSize: '3rem', fill: '#9ab4fc'}} />
                    <div>
                        <h4>Earning</h4>
                        <span style={{fontSize: '1.1rem', color: '#3c58a7'}} >
                            $5238
                        </span>
                    </div>
                </MiniAnalyticsCard>
            </DoctorMiniAnalytics>
            
        </>
    )
}

export default DashboardHome

const HeadDesc = styled.div`
    padding: 0.6rem 1rem;
    border-radius: 10px;
    background-color: white;
    margin: 1rem;

    

    h3{
        font-weight: 600;
        font-size: 1.2rem;
    }
    span{
        font-size: 0.8rem;
    }
`

const CoverImage = styled.div`
        height: 250px;
        overflow: hidden;
        padding: 0;
        background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('https://d3pc1xvrcw35tl.cloudfront.net/ln/images/1103x827/surgicalteam_202011134182.jpg') center center/ cover no-repeat;
        

        img{
            width: 100%;
        }
`

const Doctor = styled.div`
    display: flex;
    align-items: flex-end;
    padding-bottom: 1rem;


    img{
        border-radius: 50%;
        height: 6rem;
        margin: -3rem 1rem 0 1rem;
    }


    div{
        display: flex;
        flex-direction: column;

        h5{
            font-size: 1rem;
        }

        p{
            font-size: 0.75rem;
        }
    }
`

const DoctorMiniAnalytics = styled.div`
    display: flex;
    display: flex;
    margin: 1rem;
    justify-content: space-between;
`

const MiniAnalyticsCard = styled.div`
    padding: 0.8rem;
    background: white;
    width: 23%;
    border-radius: 10px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    /* img{
        width: 30%;
    } */

    div{
        width: 60%;
        display: flex;
        flex-direction: column;
    }
`