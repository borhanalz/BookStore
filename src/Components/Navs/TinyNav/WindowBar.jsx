import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import TinySubSubject from '../../Header Subs/TinySubSubject'
import $ from 'jquery'

export default class WindowBar extends Component {

  HndleSub=()=>{
    $(".sub_subject_tiny").slideToggle();
  }

  render() {
    return (
      <div className="window_bar">
      <div><FontAwesomeIcon className='fs-2 xmark' icon={faCircleXmark} onClick={()=>this.props.Hndletoggle()}/></div>
        <ul>
         <li className='nav tiny_lies'>اخبار</li>
         <li className='nav tiny_lies' onClick={this.HndleSub}>موضوعات
            <TinySubSubject />
         </li>
         <li className='nav tiny_lies'>بلاگ</li>
         <li className='nav tiny_lies'>درباره ما</li>
         <li className='nav tiny_lies'>ورود</li>
       </ul>
      </div>
    )
  }
}

