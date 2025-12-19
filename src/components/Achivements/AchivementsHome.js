import React from 'react'
import Parama from '../../Assets/paramakalyani-college.jpg'
import Stc from '../../Assets/Stc-college.jpg'
import Fx from '../../Assets/fx-college.jpg'
import StXavier from '../../Assets/st.xavier-college.jpg'
import { Container, Row, Col, Button } from "react-bootstrap";
const AchivementsHome = () => {
  return (
    <div>
          <div className='achivements-section'>
                    <h1>Achivements</h1>
                    <div className='achivements-container'>
                        
                        <div className='achivements-card'>
                            <img src={Stc} alt="Trophy Icon" />
                            <h3>OverAll Champion – Technical Symposium</h3>
                            <p>
                                Sara Tucker College, Tirunelveli<br />
                                Awarded Overall Champion for achieving top performance in various technical events, showcasing excellence in innovation, coding, and technical knowledge.</p>
                        </div>
                        <div className='achivements-card'>
                             <img src={Parama} alt="Trophy Icon" />
                            <h3>Web Design 2nd Prize  – Technical Symposium</h3>
                            <p>paramakalyani College, Alwarkurichi.<br />Awarded 2nd Prize for outstanding web design skills and creativity in a college-level competition.</p>
                        </div>
                        <div className='achivements-card'>
                             <img src={Fx} alt="Trophy Icon" />
                            <h3>Web Design 1st Prize  – Technical Symposium</h3>
                            <p>Fx Engineering College, Cheranmahadevi<br />Awarded 1st Prize for exceptional web design skills and creativity in a college-level competition.</p>
                        </div>
                            </div>
                            <Button variant="primary" href="/achivements" style={{marginTop:"20px"}}>See More</Button>
                            </div>
    </div>
  )
}

export default AchivementsHome