import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import content from '../content';


 

function Cards() {
    return (
        <div
        className="min-h-screen flex flex-col items-center justify-center font-dosis p-5 "
        id="stack"
      >
        <h1 className="text-5xl font-bold">React Projects</h1>
        <h1 className="text-xl font-bold">Amazone-clone</h1>
        <div className="flex flex-wrap justify-center mt-5 ">
          {content.cards.list.map((list, index) => {
            return (
              
                <div className='card mt-10 align-items-center animate-float: animate-refloat '>
                     <LazyLoadImage src={list.img} alt={list.alt} />
                     <a href="https://amazone-clone-ftl4x04k3-mashudmuhd.vercel.app/"><div className="flex align-items: center;">
                     <button  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full mt-1">
                         Show</button>
                     </div></a>
                </div>
              
              
            );
            
          })}
           

           
        </div>
       
      </div>
    )
}

export default Cards
