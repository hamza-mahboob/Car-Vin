import { Button, Carousel, Input } from "@material-tailwind/react";

export function CarouselTransition() {

  return (
    <>
      <div className="absolute top-1/3 left-1/8 px-10 w-full md:left-1/4 md:w-1/2 flex items-center justify-center z-40">
        <div className="w-full h-auto bg-black opacity-[0.92] rounded-2xl p-4 flex flex-col justify-center">
          <h1 className="text-3xl text-white text-center my-5">Enter VIN number</h1>
          <div className="h-10 w-3/4 mx-auto placeholder:text-xl placeholder:p-3 rounded my-4">
            <Input color="white" size="lg" label="VIN Number..." variant="standard" />
          </div>
          <h1 className="my-4 text-center text-gray-500 font-medium">Example: 1VXBR12EXCP901213</h1>
          <Button variant="solid" className="mt-10 w-40 mx-auto text-white bg-[#caa430]">Decode</Button>
        </div>
      </div>
      <Carousel transition={{ duration: 1 }} className="rounded-xl h-screen" autoplay={true} loop={true} prevArrow={false} nextArrow={false} >
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
      </Carousel>
    </>
  );
}