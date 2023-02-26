import React,{Component} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import WindowBar from './WindowBar'
import $ from 'jquery'

export default class TinyNav extends Component {
    
    HndleToggle=(x)=>{
        switch (x) {
            case "open":
                $(".window_bar").slideDown(500);
                break;
            case "close":
                $(".window_bar").slideUp(500);
                break;
            default:
                break;
        }
    }

  render() {
    return (
        <>
        <nav className='tiny_nav'>
            <div className="float-end"><FontAwesomeIcon className='togglebar' icon={faBars} onClick={()=>this.HndleToggle("open")}/></div>
            <div className="logo text-center float-start mt-3 mx-5 fs-4">BA BookStore</div>
        </nav>
         <WindowBar Hndletoggle={()=>this.HndleToggle("close")}/>
        </>
    )
  }
}


