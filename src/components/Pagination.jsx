import React from 'react'

function Pagination({pageNext , pagePrev , pageno}) {
  return (
    <div className="flex  p-4  w-full justify-center font-bold text-xl mt-6">
       <div className="px-8 " onClick={pagePrev}><i class="fa-solid fa-arrow-left"></i></div>
      <div className="font-bold">{pageno}</div>
      <div className="px-8 " onClick={pageNext}><i class="fa-solid fa-arrow-right"></i></div>
    </div>
  )
}

export default Pagination