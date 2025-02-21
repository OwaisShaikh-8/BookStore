import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'

function Signup() {
  return (
    <>
    <div className='flex justify-center items-center h-screen' >
    <div className='w-[80%] md:w-[50%] flex justify-center items-center'>
                <div className="modal-box">
                <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
                    </form>

                    <h3 className="font-bold text-lg">Signup</h3>

                    {/* {name input} */}
                    <div className='mt-4 space-y-3'>
                        <label htmlFor="name">Name</label>
                        <br />
                        <input type="text" name="name" id="name" placeholder='Enter your name' className='w-80 px-3 py-1 border rounded-md outline-none'/>
                    </div>
                    {/* {email input} */}
                    <div className='mt-4 space-y-3'>
                        <label htmlFor="email">Email</label>
                        <br />
                        <input type="text" name="email" id="email" placeholder='Enter your email' className='w-80 px-3 py-1 border rounded-md outline-none'/>
                    </div>

                    {/* {password input} */}
                    <div className='mt-4 space-y-3'>
                        <label htmlFor="password">Password</label>
                        <br />
                        <input type="password" name="password" id="password" placeholder='Enter your password' className='w-80 px-3 py-1 border rounded-md outline-none'/>
                    </div>
                    <div className='flex justify-around items-center mt-4'>
                    <button className="bg-pink-500 rounded-md px-2 py-1 text-white">Signup</button>
                    <p>Have account ? <button onClick={()=>document.getElementById("my_modal_3").showModal()}  className='underline cursor-pointer text-blue-500'>Login</button></p>
                    <Login/>
                    </div>

                </div>
            </div>
    </div>
    </>
  )
}

export default Signup