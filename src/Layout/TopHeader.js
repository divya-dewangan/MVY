import React from 'react'
import { FaAngleDown, FaRegEnvelope } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa"

function TopHeader() {
    return (
        <>
            <div className='container-fluid'>
                <div className='row ' style={{ backgroundColor: '#FFDADA' }}>
                    <div className='col-md-6 d-flex text-center'>
                        <p className='text-danger me-2'><FaRegEnvelope className='m-2' />dirwcd.cg@gov.in</p>
                        |
                        <div className='text-danger ms-2'>हेल्प डेस्क नं :</div>
                        <p className='mx-2 text-danger'><FaPhoneAlt /> +91-771-2220006</p>
                    </div>
                    <div className='col-md-6 text-end'>
                        <div className='me-5'>
                            <p className='text-danger me-5'><FaAngleDown /> मुख्य कंटेंट की ओर</p>
                        </div>
                    </div>
                </div>
                <div className='row ms-5'>
                    <div className='col-md-6 d-flex'>
                        <div className=''>
                            <img src='https://mahtarivandan.cgstate.gov.in/userassets/img/logo.webp' alt='my icon' className='m-2' style={{ height: '80px' }} />
                        </div>
                        <div className='text-danger m-3'>
                            <h2 className='text-bold'>महतारी वंदन योजना</h2>
                            <p>सशक्त महिला मजबूत प्रदेश</p>
                        </div>
                    </div>
                </div>
               
            </div>


        </>
    )
}

export default TopHeader