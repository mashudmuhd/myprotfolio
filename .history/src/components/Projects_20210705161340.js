import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import content from '../content';


function Projects() {
    return (
        <div>
            <LazyLoadImage src={tech.img} alt={tech.alt} />
        </div>
    )
}

export default Projects
