import React from 'react'

function Projects() {
    return (
        <div>
            
            <div
        className="min-h-screen flex flex-col items-center justify-center font-dosis p-5 "
        id="stack"
      >
        <h1 className="text-xl font-bold">Netflix-clone</h1>
        <div className="flex flex-wrap justify-center mt-5 ">
          {content.cards.list.map((list, index) => {
            return (
              
                <div className='card mt-10 align-items-center animate-float: animate-refloat '>
                     <LazyLoadImage src={list.img} alt={list.alt} />
                     <div className="flex align-items: center;">
                     <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full mt-1">
                         Click here </button>
                     </div>
                </div>
              
              
            );
            
          })}
           

           
        </div>
        <p className="w-11/12 md:max-w-xl text-xl text-center mt-10">
          {content.stack.desc}
        </p>
      </div>
        </div>
    )
}

export default Projects