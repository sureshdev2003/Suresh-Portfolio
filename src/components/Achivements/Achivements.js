import React from 'react'
import Parama from '../../Assets/paramakalyani-college.jpg'
import Stc from '../../Assets/Stc-college.jpg'
import Fx from '../../Assets/fx-college.jpg'
import StXavier from '../../Assets/st.xavier-college.jpg'
import Sadaka from '../../Assets/sadakathullah-college.jpg'
import Nazareth from '../../Assets/nazareth-college.jpg'
import LiveWire from '../../Assets/livewire.jpg'
import Sadath from '../../Assets/sadakah.jpg'
const Achivements = () => {
    return (
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
                 <div className='achivements-card'>
                     <img src={StXavier} alt="Trophy Icon" />
                    <h3>Quiz competition 2st Prize  – Technical Symposium</h3>
                    <p>Xavier College in Tirunelveli<br />Awarded 2st Prize for exceptional Quiz competition skills and creativity in a college-level competition.</p>
                </div>
                 <div className='achivements-card'>
                    <img src={LiveWire} alt="Trophy Icon" />
                    <h3>Live Wire Hackthon top 10 finalist</h3>
                    <p>
                        Participated in the Live Wire Hackathon and secured a position among the top 10 finalists, demonstrating exceptional problem-solving skills and innovative thinking.</p>
                </div>
                 <div className='achivements-card'>
                    <img src={Sadaka} alt="Trophy Icon" />
                    <h3>WorkShop on Roadmap to web development</h3>
                    <p>
                        Sadakathullah College, Tirunelveli<br />
                        Conducted a workshop on the roadmap to web development, covering essential skills and technologies for aspiring web developers.</p>
                </div>
                <div className='achivements-card'>
                    <img src={Nazareth} alt="Trophy Icon" />
                    <h3>State Level Workshop on Web Development</h3>
                    <p>
                       Nazareth Margoschis College At Pillaiyanmanai in Nazareth<br />
                       One Day State Level Seminar on Web Application Development Organized by the Department of Computer Science & IQAC, Nazareth Margoschis College at Pillaiyanmanai,Thoothukkudi District  </p>
                </div>
                 <div className='achivements-card'>
                    <img src={Sadath} alt="Trophy Icon" />
                    <h3>One Day WorkShop on DataX-2025</h3>
                    <p>
                      Sadakathullah College, Tirunelveli<br />
                      Conducted a workshop on the DataX-2025,covering essential skills and technologies for aspiring Data anlystic </p>
                </div>
            </div>
        </div>
    )
}

export default Achivements