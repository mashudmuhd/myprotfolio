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
        <div className="flex flex-wrap justify-center mt-5 ">
          {content.cards.list.map((list, index) => {
            return (
              
                <div className='card mt-10 align-items-center animate-float: animate-refloat '>
                     <LazyLoadImage src={list.img} alt={list.alt} />
                     <a href="https://testnetflix-b042b.web.app/"><div className="flex align-items: center;">
                     <button  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full mt-1">
                         Click here </button>
                     </div></a>
                </div>
              
              
            );
            
          })}
           

           
        </div>
        <p className="w-11/12 md:max-w-xl text-xl text-center mt-10">
          {content.stack.desc}
        </p>
      </div>
    )
}

export default Cards
