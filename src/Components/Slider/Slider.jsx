import React from 'react'
import { Slide,Zoom,Fade} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

export default function Slider() {

       const fadeImages = [
        {
          url: './assets/pexels-josh-hild-4256852.jpg',
          caption: ''
        },
        {
          url: './assets/pexels-maël-balland-3457273.jpg',
          caption: ''
        },
        {
          url: './assets/highest-quality-photo-books-travel-sometimes-home_0011.jpg',
          caption: ''
        },
      ];

        return (
        
              <div className="slide-container slideimage_cont">
            <Fade>
             {fadeImages.map((fadeImages, index)=> (
                <div className="each-fade" key={index}>
                  <div className='slide' style={{'backgroundImage': `url(${fadeImages.url})`}}>
                    <span>{fadeImages.caption}</span>
                  </div>
                </div>
              ))} 
            </Fade>
          </div>
        )
}
