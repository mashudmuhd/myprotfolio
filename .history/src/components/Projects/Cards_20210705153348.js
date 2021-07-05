import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import content from '../content';
 

function Cards() {
    return (
        <div className='projectscard'>
            <div className='overflow'>

            <LazyLoadImage
            src={content.header.img}
            effect="blur"
            placeholderSrc={process.env.PUBLIC_URL + '/logo512.png'}
          />

            

            </div>
            
        </div>
    )
}

export default Cards
