import {BsCheckLg} from 'react-icons/bs'

export const Plans = () => {
  return (
    <>
      <div className="flex m-20">
        <img className=" mr-6 w-5/12" src="src\assets\people-business-meeting-high-angle.jpg" alt="meeting" />
        <div className=" w-5/12 ">
          <div className=" mx-10">
          <h1 className="font-semibold  text-4xl">Get the best package for your business</h1>
          <div className=" m-8 ml-0 mr-0 h-1 bg-blue-800 w-20"></div>
            <p className="text-gray-600">We work systematically to integrate corporate resposibility in our core business and make our expertise avaiable for the benefit of the societies where we operate.</p>
            <ul className="text-gray-600 mt-8">
              <li className=" flex my-2"><BsCheckLg className='mr-3 text-blue-800'/>Application that is easy to use and easy for users to understand</li>
              <li className=" flex my-2"><BsCheckLg className='mr-3 text-blue-800'/>We have supported libraries that libraries need</li>
              <li className=" flex my-2"><BsCheckLg className='mr-3 text-blue-800'/>Perfect for large sities or agencies that manage many clients</li>
            </ul>
            <button className=" bg-blue-800 shadow-blue-900 mt-3 shadow-md rounded-md text-white px-12 py-4"> Button </button>
          </div>
        </div>
      </div>
    </>
  )
}
