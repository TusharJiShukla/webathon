import React from 'react'

const InstituteInfo = () => {
  return (
    <div>
      <div className="h-[120vh] w-[100vw] bg-yellow-300 flex flex-col justify-center items-center">
        <h1 className="text-5xl text-neutral-800 text-center">
          Indian Institute of Information Technology Vadodara - One of India's
          Best Ranked Institutes
        </h1>

        {/* Image with hover scale effect */}
        <img
          src="https://d23qowwaqkh3fj.cloudfront.net/wp-content/uploads/2024/07/IST-BANNER-3.jpg"
          alt="IIIT Vadodara"
          className="pt-10 transform transition duration-500 hover:scale-110"
        />
        <span className="block mt-[-30px] z-10">
          <p className="text-3xl text-neutral-200 text-center bg-blue-600 p-5 rounded-xl top-[-20] z-10 shadow-lg">
            Top Quality and Learning Experience
          </p>
        </span>
        <div>
          <div className='flex flex-col gap-y-10'>
            <div className="flex justify-evenly gap-x-[200px] ">
              <div className="text-3xl flex flex-col gap-y-5 items-stretch">
                <p>2013</p>
                <p>Established</p>
              </div>
              <div className="text-3xl flex flex-col gap-y-5 items-stretch">
                <p>300+</p>
                <p>Acres of Green Campus</p>
              </div>
              <div className="text-3xl flex flex-col gap-y-5 items-stretch">
                <p>1000+</p>
                <p>Students</p>
              </div>
            </div>
          </div>
          <div className="text-3xl mt-9">
            <button>Explore IIITV</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InstituteInfo
