import React from 'react'

const Welcome = () => {
    return (
        <div className='pt-20 min-h-screen flex flex-col mx-auto'>
            <h1 className="text-5xl text-center font-semibold text-gray-900 my-5 md:my-10 uppercase tracking-tight">Welcome To <span className='text-[#8983ff]'>Car VINs Check</span></h1>
            <img src="https://carvinscheck.com/wp-content/themes/carvinscheck/assets/img/about.png" className='my-10 md:my-20 w-[45rem] mx-auto' alt="" />
            <h3 className='text-center text-gray-700 w-full px-2 md:w-2/4 mx-auto tracking-wide'>We are more than just VIN reports, we’re your trusted partners in unveiling the hidden stories behind every vehicle. Discover the untold narratives with us.</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-20 gap-y-10 mx-auto mt-10 md:mt-20'>
                <div className='flex bg-[#393f4d] py-6 items-center justify-center'>
                    <i className="fa fa-2x fa-headset text-secondary text-blue-gray-800 bg-[#8983ff] p-12"></i>
                    <h1 className='text-[#8983ff] text-2xl font-semibold mx-auto px-5'>24/7 Car <br /> Rental <br />Support</h1>
                </div>
                <div className='flex bg-[#393f4d] py-6 items-center justify-center'>
                <i className="fa fa-2x fa-taxi text-secondary text-blue-gray-800 bg-[#8983ff] p-12"></i>
                    <h1 className='text-[#8983ff] text-2xl font-semibold mx-auto px-5'>Car <br /> Reservation <br /> Anytime</h1>
                </div>
                <div className='flex bg-[#393f4d] py-6 items-center justify-center'>
                <i className="fa fa-2x fa-map-marker-alt text-secondary text-blue-gray-800 bg-[#8983ff] p-12"></i>
                    <h1 className='text-[#8983ff] text-2xl font-semibold mx-auto px-5'>Lots Of <br /> Pickup <br /> Locations</h1>
                </div>

            </div>
        </div>
    )
}

export default Welcome
