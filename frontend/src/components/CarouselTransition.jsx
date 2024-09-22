import { Button, Carousel, Input, Spinner } from "@material-tailwind/react";
import vid from '../assets/car vid.mp4'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'

export function CarouselTransition() {
  const [disabled, setDisabled] = useState(false)
  const [input, setInput] = useState('')
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  const handleClick = async () => {
    //send fetch request and navigate to vin result display page
    setDisabled(true)

    try {
      const response = await fetch('http://carfaxchecks.test/api/vin/info', {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(input)
      })

      const json = await response.json()

      if (response.ok) {
        // navigate to vin car details
        navigate('/vin', { state: { json } });
      }


    } catch (error) {
      //there was an error

      // console.log(error)

      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
      // console.log('fetch error')

    } finally {
      setDisabled(false)
    }
  }

  return (
    <>
      <div className="absolute top-1/3 left-1/8 px-10 w-full md:left-1/4 md:w-1/2 flex items-center justify-center z-40">
        <div className="w-full h-auto bg-black opacity-[0.92] rounded-2xl p-4 flex flex-col justify-center">
          <h1 className="text-3xl text-white text-center my-5">Enter VIN number</h1>
          <div className="h-10 w-3/4 mx-auto placeholder:text-xl placeholder:p-3 rounded my-4">
            <Input color="white" size="lg" label="VIN Number..." variant="standard" onChange={handleChange} value={input} />
          </div>
          <h1 className="my-4 text-center text-gray-500 font-medium">Example: 1VXBR12EXCP901213</h1>
          <Button variant="filled" className="mt-10 w-40  mx-auto text-white bg-[#8983ff] hover:bg-[#5b52fe]" onClick={handleClick} disabled={disabled}>Decode</Button>
          {disabled && <Spinner color="indigo" className="mx-auto my-5 h-10 w-10" />}
        </div>
      </div>
      {/* <Carousel transition={{ duration: 1 }} className="rounded-xl h-screen" autoplay={true} loop={true} prevArrow={false} nextArrow={false} >
        <img
          src="https://carvinscheck.com/wp-content/themes/carvinscheck/assets/img/carousel-1.jpg"
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <img
          src="https://carvinscheck.com/wp-content/themes/carvinscheck/assets/img/carousel-2.jpg"
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <img
          src="https://i0.wp.com/applecarrentals.com/assets/web/images/slider_w1366/BMWM3.webp?ssl=1"
          alt="image 3"
          className="h-full w-full object-cover"
        />
      </Carousel> */}
      <video width="100%" className="h-screen w-full rounded object-cover md:object-fill blur-sm" autoPlay loop muted={true}>
        <source src={vid} type="video/mp4" />
        Sorry, your browser doesn't support videos.
      </video>
    </>
  );
}