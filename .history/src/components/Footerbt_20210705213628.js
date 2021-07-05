import React from 'react'

function footer() {
    return (
        <div className="h-48 flex items-center justify-center"
        style={{
          background: '#070930',
        }} >

<div class="flex my-2">
				<i style="background-color: #3B5998;"
                class="flex items-center justify-center h-12 w-12 mx-1 fab fill-current text-white text-2xl fa-facebook-f"></i>
				<i style="background-color:#dd4b39"
                class="flex items-center justify-center h-12 w-12 mx-1 fas fill-current text-white text-2xl fa-envelope"></i>
				<i style="background-color:#125688;"
                class="flex items-center justify-center h-12 w-12 mx-1 fab fill-current text-white text-2xl fa-instagram"></i>
				<i style="background-color:#55ACEE;"
                class="flex items-center justify-center h-12 w-12 mx-1 fab fill-current text-white text-2xl fa-twitter"></i>
			</div>
            
        </div>
    )
}

export default footer
