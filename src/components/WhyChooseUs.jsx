import {IoNewspaperOutline} from 'react-icons/io5';
import {AiFillDatabase} from 'react-icons/ai'
import {MdAnalytics} from 'react-icons/md';
import {IoRocketSharp} from 'react-icons/io5';

export const WhyChooseUs = () => {
  return (
    <>
      <div className="m-20">
        <p className=" text-blue-500">Best software</p>
        <h3 className=" text-3xl font-semibold ">Why Choose Us</h3>

        <div className="cards-container flex flex-wrap mt-6">

          <div className=" p-8 flex flex-col flex-[45%] m-6 hover:bg-stone-100/50 hover:cursor-pointer">
            <div className="card-content flex justify-center items-center">
              <IoNewspaperOutline className=' text-blue-600 text-7xl m-4'/>
              <div className="flex flex-col">
                <span className=" font-semibold">Elegant and Modern Design</span>
                <p className="text-gray-600">
                  The designs we make are designs that are trending. Our team make sures your website always looks good.
                </p> 
              </div>
            </div>
          </div>

          <div className=" p-8 flex flex-col flex-[45%] m-6 hover:bg-stone-100/50 hover:cursor-pointer">
            <div className="card-content flex justify-center items-center">
              <AiFillDatabase className=' text-blue-600 text-7xl m-4'/>
              <div className="flex flex-col">
                <span className=" font-semibold">Elegant and Modern Design</span>
                <p className="text-gray-600">
                  The designs we make are designs that are trending. Our team make sures your website always looks good.
                </p> 
              </div>
            </div>
          </div>

          <div className=" p-8 flex flex-col flex-[45%] m-6 hover:bg-stone-100/50 hover:cursor-pointer">
            <div className="card-content flex justify-center items-center">
              <MdAnalytics className=' text-blue-600 text-7xl m-4'/>
              <div className="flex flex-col">
                <span className=" font-semibold">Elegant and Modern Design</span>
                <p className="text-gray-600">
                  The designs we make are designs that are trending. Our team make sures your website always looks good.
                </p> 
              </div>
            </div>
          </div>

          <div className=" p-8 flex flex-col flex-[45%] m-6 hover:bg-stone-100/50 hover:cursor-pointer">
            <div className="card-content flex justify-center items-center">
              <IoRocketSharp className=' text-blue-600 text-7xl m-4'/>
              <div className="flex flex-col">
                <span className=" font-semibold">Elegant and Modern Design</span>
                <p className="text-gray-600">
                  The designs we make are designs that are trending. Our team make sures your website always looks good.
                </p> 
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
