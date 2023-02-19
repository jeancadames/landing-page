export const PricingPlans = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center my-12">
        <p className="text-blue-500">Best Pricing</p>
        <h3 className="text-3xl font-semibold">Our Pricing Plans</h3>

        <div className="flex">
          <div className="price-container mx-3 border-2 relative border-stone-300 rounded-lg text-center p-12 mt-12 hover:border-blue-600">
            <span className=" bg-stone-300 w-20 h-20 rounded-full text-lg font-bold border-white border-4 text-blue-800 flex justify-center items-center absolute top-0 left-2/4 translate-x-[-50%] translate-y-[-50%]">$438</span>
            <h4 className="font-semibold my-6 text-2xl">Standard</h4>
            <ul className="text-gray-600 font-semibold my-10">
              <li>Data source</li>
              <li>Responsive design</li>
              <li>Personal License</li>
              <li>3x Revisions</li>
              <li>Estimated time is 30 days</li>
              <li>Max 10 pages</li>
            </ul>

            <button className=" bg-white border-blue-800 border-2 font-bold mt-3 shadow-md rounded-md text-blue-800 px-12 py-4 hover:bg-blue-800 hover:border-none hover:text-white "> Buy Now </button>
          </div>

          <div className="price-container mx-3 border-2 relative border-stone-300 rounded-lg text-center p-12 mt-12 hover:border-blue-600">
          <span className=" bg-stone-300 w-20 h-20 rounded-full text-lg font-bold border-white border-4 text-blue-800 flex justify-center items-center absolute top-0 left-2/4 translate-x-[-50%] translate-y-[-50%]">$621</span>
          <h4 className="font-semibold my-6 text-2xl">Standard</h4>
          <ul className="text-gray-600 font-semibold my-10">
            <li>Data source</li>
            <li>Responsive design</li>
            <li>Personal License</li>
            <li>5x Revisions</li>
            <li>Estimated time is 23 days</li>
            <li>Max 20 pages</li>
          </ul>

          <button className=" bg-white border-blue-800 border-2 font-bold mt-3 shadow-md rounded-md text-blue-800 px-12 py-4 hover:bg-blue-800 hover:border-none hover:text-white "> Buy Now </button>
        </div>

        <div className="price-container mx-3 border-2 relative border-stone-300 rounded-lg text-center p-12 mt-12 hover:border-blue-600">
          <span className=" bg-stone-300 w-20 h-20 rounded-full text-lg font-bold border-white border-4 text-blue-800 flex justify-center items-center absolute top-0 left-2/4 translate-x-[-50%] translate-y-[-50%]">$914</span>
          <h4 className="font-semibold my-6 text-2xl">Standard</h4>
          <ul className="text-gray-600 font-semibold my-10">
            <li>Data source</li>
            <li>Responsive design</li>
            <li>Personal License</li>
            <li>10x Revisions</li>
            <li>Estimated time is 35 days</li>
            <li>Max 35 pages</li>
          </ul>

          <button className=" bg-white border-blue-800 border-2 font-bold mt-3 shadow-md rounded-md text-blue-800 px-12 py-4 hover:bg-blue-800 hover:border-none hover:text-white "> Buy Now </button>
        </div>
        </div>
      </div>
    </>
  )
}
