import {tours} from './data'
import Loading from './Loading'
import React, { useEffect } from 'react'
import { useState } from 'react'

const Card = () => {
    const [oldtour, setOldTour] = useState(tours)
    const [read, setRead] = useState(false)
    const [loading, setLoading] = useState(true)

    const fetchTours = () => {
      setLoading(true);

      try {
        setLoading(false);
        setOldTour(tours);
      } catch (error) {
        setLoading(false)
        console.log(error)
      }
    }

    useEffect(()=>{
     fetchTours();
    },[])
    const removeItem = (id) => {
    let flexTour = oldtour.filter((newtour) => newtour.id !== id)
      setOldTour(flexTour)
    }

    if(oldtour.length === 0){
      return  <div className='text-center mt-20 text-3xl'>
        <h2>No tours Left</h2>
        <button onClick={fetchTours} className=' justify-center bg-white text-green-500 px-4 py-2 mt-4 rounded-md border-2 border-sm border-green-500 hover:bg-green-500 hover:text-white font-semibold mb-2 shadow-md'>Refresh</button>
      </div>
    }

    if(loading) {
      return (
        <main>
          <Loading />
        </main>
      )
    }
     
  return (
    <>
    <div className='flex flex-wrap gap-2'>
        {oldtour.map((newtour)=> {
            const {img, title, info, price,id } = newtour
           return <div key={id} className='flex flex-wrap relative max-w-sm mx-auto justify-center items-center shadow-md mb-5 rounded-md overflow-hidden sm:w-1/2 lg:w-1/3 xl:w-1/3'>
                        <h4 className='absolute top-0 right-0 z-10 border-green-500 bg-green-500 px-2 py-1  text-white font-semibold'>$ {price}</h4>
                        <img src={img} alt="" className='object-cover w-full h-48'/>
                    
                        <h2 className='text-xl font-semibold p-4'>{title}</h2>
                        <p className='text-gray-600 mt-2 p-2'> {read ? info: `${info.substring(0, 200)}...`}
                        <button onClick={(id) => setRead(!read)}>{read ? 'Show Less' : 'Read more'}</button>
                        </p>
                    <button className='bg-white text-green-500 px-4 py-2 mt-4 rounded-md border-2 border-sm border-green-500 hover:bg-green-500 hover:text-white font-semibold mb-2 shadow-md' onClick={() => removeItem(id)}>Not Interested </button>
                  </div> 
        })}
        </div>
    </>
      
  )
}

export default Card