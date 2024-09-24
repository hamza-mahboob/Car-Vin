import React, { useEffect, useRef } from 'react'
import { CarouselTransition } from '../components/CarouselTransition'
import Pricing from '../components/Pricing'
import Welcome from '../components/Welcome'
import Features from '../components/Features'
import { Button } from '@material-tailwind/react'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import Swal from 'sweetalert2'

const Home = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams(); // No need to use setSearchParams if not modifying
  const { state } = useLocation()
  let { msg } = state || ''

  useEffect(() => {
    const psParam = searchParams.get('ps');

    if (msg && msg.includes('success')) {
      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Cancel request submitted successfully",
      });
      msg = ''
    } else if (msg && msg.includes('error')) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "There was an error submitting the request",
      });
      msg = ''
    }

    if (psParam === 'true') {
      console.log("Parameter 'ps' is true");
      // logic for when ps is true
      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Payment successful!",
      });
    } else if (psParam === 'false') {
      console.log("Parameter 'ps' is false");
      // Add logic for when ps is false
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Payment was unsuccessful!",
      });
    }
  }, [searchParams]);

  const features = [
    { name: 'Free Photo', carvin: true, carfax: false, uvip: false, vehicleSnap: false },
    { name: 'Odometer Reading', carvin: true, carfax: false, uvip: false, vehicleSnap: false },
    { name: 'Accident Check', carvin: true, carfax: true, uvip: false, vehicleSnap: false },
    { name: 'Title Check', carvin: true, carfax: true, uvip: false, vehicleSnap: false },
    { name: 'Fraud & Crime Information', carvin: true, carfax: true, uvip: false, vehicleSnap: false },
    { name: 'Market Price Analysis', carvin: true, carfax: true, uvip: false, vehicleSnap: true },
    { name: 'Instant Report: Get your report instantly! No waiting around', carvin: true, carfax: false, uvip: false, vehicleSnap: false },
    { name: 'Accurate Data using third party databases', carvin: true, carfax: false, uvip: false, vehicleSnap: false },
    { name: 'Saving: The competition charges', carvin: true, carfax: false, uvip: false, vehicleSnap: false },
  ];

  const CheckIcon = () => <span className="text-green-500">✔</span>;
  const CrossIcon = () => <span className="text-red-500">✘</span>;


  return (
    <>
      {/* {console.log(import.meta.env.VITE_ROUTE, 'my key')} */}
      <CarouselTransition />
      <Pricing />
      <Welcome />
      <Features />
      {/* car vins check */}
      <div className="relative overflow-hidden h-screen">
        {/* Fixed Background Section */}
        <div className="absolute inset-0 bg-[url(https://picsum.photos/1920/1080)] bg-cover bg-center bg-fixed" />

        {/* Centered Content */}
        <div className="relative flex flex-col items-center justify-center h-full z-10 text-white">
          <h1 className="text-6xl text-center font-semibold mb-4 uppercase text-[#534aff]">CarFax Check</h1>
          <h2 className="text-4xl text-center font-semibold uppercase">Save Yourself Thousands With A Comprehensive <br /> Vehicle History Report!</h2>
        </div>
      </div>

      {/* Why choose us */}
      <div className='min-h-[45rem] pt-20 bg-gray-100'>
        <h1 className='text-center text-4xl md:text-6xl text-[#8983ff] font-semibold tracking-normal mb-10'>
          WHY CHOOSE US
        </h1>
        <div className='flex flex-col md:flex-row items-center justify-center mx-auto gap-x-10 gap-y-5'>
          <div className='w-full md:w-1/3 text-center md:text-start'>
            <h2 className='text-xl text-[#8983ff] font-normal my-2 px-2'>Why we stand out in the crowd!</h2>
            <h3 className='text-gray-600 tracking-wide my-2 font-medium px-2'>At VINFAX, we are more than just a VIN report provider – we are your trusted partner in unveiling the hidden stories behind every vehicle. With a passion for transparency and a commitment to empowering consumers, our company has been at the forefront of providing comprehensive vehicle history reports that go beyond the surface.</h3>
            <ul className='text-gray-600 tracking-wide font-medium md:ml-5 mt-5'>
              <li> &#8226; Accurate Data</li>
              <li> &#8226; Easy Procedure</li>
              <li> &#8226; Unrivaled Accuracy</li>
              <li> &#8226; Comprehensive Insights</li>
              <li> &#8226; Data Security</li>
              <li> &#8226; Multiple Report Option</li>
              <li> &#8226; Global Database</li>
              <li> &#8226; Visual Reports</li>
            </ul>
          </div>
          <div>
            <img src="https://carvinscheck.com/wp-content/themes/carvinscheck/assets/img/why-choose.webp" className='w-auto h-[445px] rounded-xl shadow-sm p-2' alt="" />
          </div>
        </div>
      </div>

      {/* Table check */}
      <div className='bg-gray-300 min-h-[45rem] py-20'>
        <h1 className='text-center text-5xl text-[#8983ff] tracking-tight font-semibold'><span className='underline'>CARFAXCHECKS</span> VS CarFax & Others</h1>
        <h3 className='text-center text-md font-normal px-2 tracking-wide text-[#8983ff] mt-12'>Do not overpay Choose Autoswift the service you can easily rely on</h3>
        <h3 className="text-gray-600 text-center my-3 px-2 w-full md:w-1/2 mx-auto">We have seen it and answering to it, Feel like you’re being ripped off by Carfax? It’s an open secret that their vehicle history reports are costly and contain only basic information</h3>

        <div className="overflow-x-auto max-w-screen-xl mx-auto mt-5">
          <table className="min-w-full max-w-4xl mx-auto border border-black divide-y divide-black shadow-md">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider border border-black">Report Contents</th>
                <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider border border-black">CARFAXCHECK</th>
                <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider border border-black">CarFax</th>
                <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider border border-black">UVIP</th>
                <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider border border-black">Vehicle Snap</th>
              </tr>
            </thead>
            <tbody className="bg-gray-200 divide-y divide-black">
              {features.map((feature, idx) => (
                <tr key={idx}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-600 border border-black">{feature.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border border-black">{feature.carvin ? <CheckIcon /> : <CrossIcon />}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border border-black">{feature.carfax ? <CheckIcon /> : <CrossIcon />}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border border-black">{feature.uvip ? <CheckIcon /> : <CrossIcon />}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border border-black">{feature.vehicleSnap ? <CheckIcon /> : <CrossIcon />}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* For your info */}
      <div className='min-h-[45rem] flex flex-col md:flex-row max-w-screen-xl mx-auto justify-center items-center mt-20 p-2'>
        <h1 className='text-4xl tracking-tighter w-full md:w-1/3 font-bold text-center md:text-start mb-10'>FOR YOUR INFO</h1>
        <div className='w-full md:w-2/3 p-2 grid grid-cols-2 gap-10 text-gray-700 tracking-wider'>
          <div>
            <h1 className='mb-5 text-xl text-[#8983ff] font-semibold'>01 Total Recall</h1>
            A recall is issued when a manufacturer or NHTSA determines that a vehicle, equipment, car seat, or tire creates an unreasonable safety risk or fails to meet minimum safety standards
          </div>
          <div>
            <h1 className='mb-5 text-xl text-[#8983ff] font-semibold'>02 Market Value Range</h1>
            The market value of a car is almost always lower than the retail value and takes into account a number of variables, including mileage, vehicle condition, service history and accident reports
          </div>
          <div>
            <h1 className='mb-5 text-xl text-[#8983ff] font-semibold'>03 Liens Status</h1>
            The car you purchase has a lien on the title until you completely pay off the car. Not only does a lien act as insurance for a lender, but a lien also allows a creditor to repossess your car if you default on your loan.
          </div>
          <div>
            <h1 className='mb-5 text-xl text-[#8983ff] font-semibold'>04 Buy Now</h1>
            <Button className='w-full h-14 bg-[#8983ff]' onClick={() => navigate('/pricing')}>Buy Now</Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
