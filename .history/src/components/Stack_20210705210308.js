import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import content from '../content';

export default function Stack() {
  return (
    <div>





<ul class="space-y-4">
  <li>
    <div class="w-64 h-3 bg-gradient-to-br from-fuchsia-500 to-purple-600"></div>
  </li>
  <li>
    <div class="w-56 h-3 bg-gradient-to-br from-fuchsia-500 to-purple-600"></div>
  </li>
  <li>
    <div class="w-48 h-3 bg-gradient-to-br from-fuchsia-500 to-purple-600"></div>
  </li>
  <li>
    <div class="w-40 h-3 bg-gradient-to-br from-fuchsia-500 to-purple-600"></div>
  </li>
  <li>
    <div class="w-32 h-3 bg-gradient-to-br from-fuchsia-500 to-purple-600"></div>
  </li>
  <li>
    <div class="w-24 h-3 bg-gradient-to-br from-fuchsia-500 to-purple-600"></div>
  </li>
  <li>
    <div class="w-20 h-3 bg-gradient-to-br from-fuchsia-500 to-purple-600"></div>
  </li>
  <li>
    <div class="w-16 h-3 bg-gradient-to-br from-fuchsia-500 to-purple-600"></div>
  </li>
  <li>
    <div class="w-12 h-3 bg-gradient-to-br from-fuchsia-500 to-purple-600"></div>
  </li>
  <li>
    <div class="w-10 h-3 bg-gradient-to-br from-fuchsia-500 to-purple-600"></div>
  </li>
</ul>

      

      <div className= "flex flex-wrap justify-center mt-10">
      
      <p className="  text-xl text-center mt-10">
      <h1 className="text-5xl font-bold">About Me</h1>
        {content.stack.desc}
      </p>
      </div>

    
    <div
      className="min-h-screen flex flex-col items-center justify-center font-dosis"
      id="stack"
    >
      <h1 className="text-5xl font-bold">Stack I use</h1>
      <div className="flex flex-wrap justify-center mt-10">
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
    </div>
  );
}
