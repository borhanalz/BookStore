import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faTelegram } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return (
    <footer>
        <div className="container">
            <div className="row">
                <div className='contact_us col-xxl-3 col-xl-3 col-md-12 col-12'>
                    <ul>
                        <li className="nav fw-bold mt-2"><h2>درباره ما</h2></li>
                        <li className="nav fs-5 fw-bold mt-2"><FontAwesomeIcon icon={faHouse}/> : تهران خیابان ایکس کوچه مثبت</li>
                        <li className="nav fs-5 fw-bold mt-2"><FontAwesomeIcon icon={faPhone}/> : 02155555</li>
                        <li className="nav fs-5 fw-bold mt-2"><FontAwesomeIcon icon={faEnvelope}/>  : bacompany@gmail.com</li>
                    </ul>
                </div>
                <div className='support_us col-xxl-3 col-md-12 col-12'>
                    <ul>
                        <li className='nav fw-bold mt-2'><h2>حمایت از ما</h2></li>
                        <li className='nav fs-5 fw-bold mt-2'>حمایت مالی</li>
                        <li className='nav fs-5 fw-bold mt-2'>توصیه ها</li>
                        <li className='nav fs-5 fw-bold mt-2'>وضعیت</li>
                    </ul>
                </div>
                <div className='policies_us col-xxl-3 col-md-12 col-12'>
                <ul>
                        <li className='nav fw-bold mt-2'><h2>قوانین و مقررات</h2></li>
                        <li className='nav fs-5 fw-bold mt-2'>سوالات متداول</li>
                        <li className='nav fs-5 fw-bold mt-2'>شکایات</li>
                        <li className='nav fs-5 fw-bold mt-2'>امنیت</li>
                    </ul>
                </div>
                <div className='us_us mt-3 col-xxl-3 col-md-12 col-12'>
                    <ul>
                        <div className="logo text-center">BA BookStore</div>
                        <div className="icons_contact text-center">
                           <FontAwesomeIcon className='conatct_icon fs-4 mx-2 mt-5' icon={faTwitter}/>
                           <FontAwesomeIcon className='conatct_icon fs-4 mx-2 mt-5' icon={faInstagram}/>
                           <FontAwesomeIcon className='conatct_icon fs-4 mx-2 mt-5' icon={faTelegram}/>
                           <FontAwesomeIcon className='conatct_icon fs-4 mx-2 mt-5' icon={faLinkedin}/>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
  )
}
