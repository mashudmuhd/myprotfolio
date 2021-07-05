import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import content from '../content';



function Projects() {
    return (
        <div>
          <div className="">
         {content.stack.tech.map((tech, index) => {
          return (
            <span
              className={`${
                index % 2 === 0 ? ' animate-float' : ' animate-refloat'
              } w-40 h-40 bg-white shadow-2xl m-2 rounded-full flex items-center p-5 `}
            >
              <LazyLoadImage src={tech.img} alt={tech.alt} />
            </span>
          );
        })}
      </div>
        </div>
    )
}

export default Projects
