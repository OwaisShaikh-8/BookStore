import React from 'react'
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom'

function Login() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box w-[40vw]">
                    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>

                        <h3 className="font-bold text-lg">Login</h3>
                        {/* {email input} */}
                        <div className='mt-4 space-y-3'>
                            <label htmlFor="email">Email</label>
                            <br />
                            <input type="email" name="email" id="email" placeholder='Enter your email' className='w-80 px-3 py-1 border rounded-md outline-none' {...register("email", { required: true })} />
                            <br />
                            {errors.email && <span className='ml-2 text-xs text-red-600'>Email is required</span>}
                        </div>

                        {/* {password input} */}
                        <div className='mt-4 space-y-3'>
                            <label htmlFor="password">Password</label>
                            <br />
                            <input type="password" name="password" id="password" placeholder='Enter your password' className='w-80 px-3 py-1 border rounded-md outline-none' {...register("password", { required: true })} />
                            <br />
                            {errors.password && <span className='ml-2 text-xs text-red-600'>Password is required</span>}
                        </div>
                        <div className='flex justify-around items-center mt-4'>
                            <button className="bg-pink-500 rounded-md px-2 py-1 text-white">Login</button>
                            <p>Not registered ? <Link to="/signup" className='underline cursor-pointer text-blue-500'>Signup</Link></p>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    )
}

export default Login