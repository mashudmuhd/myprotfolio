import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';

 

function Cards() {
    return (
        <div className='projectscard'>
            <div className='overflow'>

            <LazyLoadImage src={tech.img} alt={tech.alt} />

            

            

            </div>
            
        </div>
    )
}

export default Cards
