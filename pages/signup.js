/* eslint-disable no-unused-vars */
import Link from 'next/link'
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const handleChange = (e) => {
    if (e.target.name == 'name') { setName(e.target.value) }
    if (e.target.name == 'email') { setEmail(e.target.value) }
    if (e.target.name == 'password') { setPassword(e.target.value) }
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { name, email, password };
    const res = await fetch('http://localhost:3000/api/signup', {
      method: "POST",
      // mode: "cors", 
      // cache: "no-cache", 
      // credentials: "same-origin", 
      headers: {
        "Content-Type": "application/json",
      },
      // redirect: "follow",
      // referrerPolicy: "no-referrer",
      body: JSON.stringify(data),
    });
    let response = await res.json();
    console.log(response);
    toast.success('Thank you for Signing up!', {
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }
  return (
    <div>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="mx-auto h-10 w-auto rounded-full" src="/logo.jpg" alt="Your Company" />
          <h2 className="mt-10 text-center text-2xl font-extrabold leading-9 tracking-tight text-gray-900">Sign-up for an account</h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit} className="space-y-6" method="POST">
            <div>
              <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">Name</label>
              <div className="mt-2">
                <input value={name} onChange={handleChange} id="name" name="name" type="name" autoComplete="name" required className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6" />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
              <div className="mt-2">
                <input value={email} onChange={handleChange} id="email" name="email" type="email" autoComplete="email" required className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6" />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>

              </div>
              <div className="mt-2">
                <input value={password} onChange={handleChange} id="password" name="password" type="password" autoComplete="current-password" required className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6" />
              </div>
            </div>


            <div>
              <button type="submit" className="flex w-full justify-center rounded-md bg-pink-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600">Sign-up</button>
            </div>
          </form>
          <p className="mt-10 text-center text-sm text-gray-500">
            Already a member?
            <Link href={'/login'} className="font-semibold leading-6 text-pink-600 hover:text-pink-500 mx-2">Log-in</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Signup