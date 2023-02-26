import React,{useState,useReducer,useEffect,useRef} from 'react'
import SubSubject from '../../Header Subs/SubSubject'
import {NavLink} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { init, reducer } from './reducer/reducer'
import 'animate.css'

export default function BigNav() {
    
  const [{subShow,signupbox,signboxtext,signboxshow}, dispatch] = useReducer(reducer,init);

  return (
    <nav className="big_nav pt-3">
             <div className="container">
                <div className="logo d-inline-block text-center d-inline-block">BA BookStore</div>
                 <ul className='d-inline-block'>
                     <li className='nav d-inline-block nav_lies text-center mx-1'><NavLink to="/">صفحه اصلی</NavLink></li>
                     <li className='nav d-inline-block nav_lies text-center mx-1 position-relative' onMouseEnter={()=>dispatch({type:"subshow",subShow:true})} onMouseLeave={()=>dispatch({type:"subshow",subShow:false})}>موضوعات
                        {subShow && <SubSubject/>}
                     </li>
                     <li className='nav d-inline-block nav_lies text-center mx-1'>اخبار</li>
                     <li className='nav d-inline-block nav_lies text-center mx-1'>بلاگ</li>
                     <li className='nav d-inline-block nav_lies text-center mx-1'><NavLink to="/aboutus">درباره ما</NavLink></li>
                     <li className='nav d-inline-block nav_lies text-center mx-1'><NavLink to='/faq'>سوالات متداول</NavLink></li>
                 </ul>
                 <div className="regester_box float-start mt-1 ">
                         <ul className='d-inline-block p-0'>
                             <li className='mx-2 nav d-inline-block headerbox text-center position-relative'>{signboxtext ? <p>ثبت نام</p> :<p onClick={()=>dispatch({type:"signboxshow",signboxshow:true})}>ورود</p>}
                              {signboxshow? signupbox? <div className="signboxtwo position-absolute animate__animated animate__flipInY">
                                  <div><FontAwesomeIcon className='exit_ic fs-6 text-dark mt-3' 
                                  onClick={()=>dispatch({type:"signboxshow",signboxshow:false,signboxtext:false,signupbox:false})} icon={faCircleXmark}/></div>
                                  <input placeholder='نام کاربری' type="text" className="txt txt1" />
                                  <input placeholder='ایمیل' type="email" className="txt txt2 mt-4" />
                                  <input placeholder='رمز عبور' type="password" className="txt txt3 mt-4"/>
                                  <input type="submit" value="ثبت نام" className='btnsignin mt-5 mx-2 fw-bold pt-1'/>
                                  </div>:
                                  <div className="signbox position-absolute animate__animated animate__fadeInDown">
                                      <div><FontAwesomeIcon className='exit_ic fs-6 text-dark mt-3' 
                                       onClick={()=>dispatch({type:"signboxshow",signboxshow:false,signboxtext:false,signboxshow:false})} icon={faCircleXmark}/></div>
                                       <input placeholder='نام کاربری' type="text" className="txt txt4"/>
                                       <input placeholder='رمز عبور' type="password" className="txt txt5 mt-3"/>
                                       <a href="#" className='signuplink d-block mt-3' onClick={()=>dispatch({type:"signupbox",signupbox:true,signboxtext:true})}>ثبت نام نکرده ام</a>
                                       <div className='btnsignin fw-bold pt-1'>ورود</div>
                                   </div>:null}
                             </li>
                         </ul>
                         <ul className="float-start p-0">
                         <li className='nav mx-3 d-inline-block buybox text-center position-relative'><FontAwesomeIcon icon={faHeart}/>
                            {/* <div className="bought_box position-absolute">
                              
                            </div> */}
                         </li>
                         <li className='nav d-inline-block buybox text-center position-relative'><FontAwesomeIcon icon={faCartShopping}/>
                         </li>
                         </ul>
                 </div>
              </div>
    </nav>
  )
}
