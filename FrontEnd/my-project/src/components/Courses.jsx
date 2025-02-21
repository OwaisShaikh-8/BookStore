import React from 'react'
import Cards from './Cards'
import list from '../../public/list.json'
import {Link} from 'react-router-dom'
function Courses() {
  return (
    <>
      <div className='max-w-screen-2xl mx-auto container md:px-20 px-4 py-28 dark:bg-gray-900 '>
        <div className=' justify-center text-center'>
          <h1 className='text-2xl md:text-4xl'>Thank you for being here - we truly <span className='text-pink-500 font-semibold'>appreciate it!:)</span></h1>
          <p className='m-8' >Welcome to our Courses page! We're thrilled to have you here as you embark on your learning journey. Explore a wide range of courses designed to help you grow, develop new skills, and achieve your goals. Let’s learn, grow, and succeed together! 🚀</p>
        <Link to="/">  <button className='bg-pink-500 px-3 py-1 text-white rounded-md  cursor-pointer hover:bg-red-600 dura'>Back</button></Link>
        </div>
        <div className='flex justify-center items-center'>
        <div className=" my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
          {list.map((item) => (
            <Cards item={item} key={item.id} />
          ))}
        </div>
          </div>

      </div>
    </>
  )
}

export default Courses;
