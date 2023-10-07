import React, { useState } from 'react'

const Authontication = () => {

  const [isPopupOpen, setPopupOpen] = useState(false);


  const togglePopup = () => {
    setPopupOpen(!isPopupOpen);
  };

  return (
    <div className="bg-green-800">
  <div className="px-6 py-6 lg:px-8 font-Montserrat">
    <h3 className="mb-4 text-xl font-medium text-white dark:text-white"  onClick={togglePopup}>Sign in to our platform</h3>
    <form className="space-y-6" action="#">
        <div>
            <label for="email" className="block mb-2 text-sm font-medium text-white dark:text-white">Your email</label>
            <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
        </div>
        <div>
            <label for="password" className="block mb-2 text-sm font-medium text-white dark:text-white">Your password</label>
            <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
        </div>
        <div className="flex justify-between">
            <div className="flex items-start">
                <div className="flex items-center h-5">
                    <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 " required />
                </div>
                <label for="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
            </div>
            <a href="#" className="text-sm text-[#15008c] hover:underline dark:text-blue-500 pl-2"> Lost Password?</a>
        </div>
        <button type="submit" className="w-full text-white bg-green-700 hover:bg-green-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
        <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
            Not registered? <a href="#" className="text-[#15008c] hover:underline dark:text-blue-500 pl-2">Create account</a>
        </div>
    </form>
</div>
    </div>
  
  )
}

export default Authontication;