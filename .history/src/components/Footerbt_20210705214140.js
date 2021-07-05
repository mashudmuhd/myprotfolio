import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import content from '../content';

function footer() {
    return (
        <div className="h-48 flex items-center justify-center"
        style={{
          background: '#070930',
        }} >

<span
                className={`${
                  index % 2 === 0 ? ' animate-float' : ' animate-refloat'
                } w-40 h-40 bg-white shadow-2xl m-2  flex items-center p-5 `}
              >
                <LazyLoadImage src={tech.img} alt={tech.alt} />
              </span>
            
        </div>
    )
}

export default footer
