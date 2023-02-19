export const Hero = () => {
  return (
   <>
   <div className="flex justify-center">
    <div className="m-20 flex flex-col justify-evenly">
      <div className="">
        <p className="text-gray-600 font-bold">Shoftware House</p>
        <h1 className="font-bold  text-5xl">Introduce your business by using software</h1>
      </div>
      <div className=" mt-6">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quasi, at amet labore perspiciatis vitae.</p>
        <button className=" bg-blue-800 shadow-blue-900 mt-3 shadow-md rounded-md text-white px-12 py-4"> Button </button>
      </div>
    </div>
      <div className=" w-3/5 bg-cover bg-no-repeat" style={{backgroundImage: `url("src/assets/typing keboard hero.jpg")`}}></div>
   </div>
   </>
  )
}
