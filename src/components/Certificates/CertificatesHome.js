import React from 'react'
import { Container, Row, Col, Button } from "react-bootstrap";
const CertificatesHome = () => {
  return (
    <div> <div className='certificates-container'>
        <h1 className='certificates-heading'>Certificates</h1>
        <div className='certificates-card-container'>
            <div className='certificates-card'>
                <div className='certificates-card-image'>
                    <img src="https://res.cloudinary.com/dkbtx5r9v/image/upload/v1765783837/Suresh_C_fqsfyx.jpg" alt='certificate' />
                </div>
                <div className='certificates-card-content'>
                    <h3>Automation Testing Tools</h3>
                    <p>Attended a one-day workshop on Automation Testing Tools, learning core automation concepts, tool overview, and test case execution techniques</p>
                </div>
            </div>
            <div className='certificates-card'>
                <div className='certificates-card-image'>
                    <img  src="https://res.cloudinary.com/dkbtx5r9v/image/upload/v1765784774/Screenshot_2025-12-15_131547_rctei6.png" alt='certificate' />
                </div>
                <div className='certificates-card-content'>
                    <h3>CyperHeals-25</h3>
                    <p>Successfully participated in CyperHeals-25, a cybersecurity awareness program.
Learned essential concepts of cyber safety and security best practices.</p>
                </div>
            </div>
            <div className='certificates-card'>
                <div className='certificates-card-image'>
                    <img  src="https://res.cloudinary.com/dkbtx5r9v/image/upload/v1765789313/Screenshot_2025-12-15_143135_g3li1o.png" alt='certificate' />
                </div>
                <div className='certificates-card-content'>
                    <h3>Data Analytics in python (NPTEL)</h3>
                    <p>Successfully completed an NPTEL-certified course focused on data analysis using Python, covering data manipulation, visualization, and statistical analysis.</p>
                </div>
            </div>
           
            <Button variant="primary" href="/certificates" style={{marginTop:"20px"}}>View More Certificates</Button>
        </div>
        </div></div>
  )
}

export default CertificatesHome