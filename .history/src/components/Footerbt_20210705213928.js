import React from 'react'

function footer() {
    return (
        <div className="h-48 flex items-center justify-center"
        style={{
          background: '#070930',
        }} >

        <div class="flex my-2">
				<LazyLoadImage src={list.img} alt={list.alt} />
				
			</div>
            
        </div>
    )
}

export default footer
