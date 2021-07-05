import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import content from '../content';


 

function Cards() {
    return (
        <div
        className="min-h-screen flex flex-col items-center justify-center font-dosis"
        id="stack"
      >
        <h1 className="text-5xl font-bold">Projects</h1>
        <div className="flex flex-wrap justify-center mt-10 ">
          {content.cards.list.map((list, index) => {
            return (
              
                <div className='card mt-10'>
                     <LazyLoadImage src={list.img} alt={list.alt} />
                </div>
              
              
            );
            
          })}
           <button>bhbjbh</button>

           
        </div>
        <p className="w-11/12 md:max-w-xl text-xl text-center mt-10">
          {content.stack.desc}
        </p>
      </div>
    )
}

export default Cards