import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

function CheckIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 48 48">
            <linearGradient id="IMoH7gpu5un5Dx2vID39Ra_pIPl8tqh3igN_gr1" x1="9.858" x2="38.142" y1="9.858" y2="38.142" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#9dffce"></stop><stop offset="1" stopColor="#50d18d"></stop></linearGradient><path fill="url(#IMoH7gpu5un5Dx2vID39Ra_pIPl8tqh3igN_gr1)" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"></path><linearGradient id="IMoH7gpu5un5Dx2vID39Rb_pIPl8tqh3igN_gr2" x1="13" x2="36" y1="24.793" y2="24.793" gradientUnits="userSpaceOnUse"><stop offset=".824" stopColor="#135d36"></stop><stop offset=".931" stopColor="#125933"></stop><stop offset="1" stopColor="#11522f"></stop></linearGradient><path fill="url(#IMoH7gpu5un5Dx2vID39Rb_pIPl8tqh3igN_gr2)" d="M21.293,32.707l-8-8c-0.391-0.391-0.391-1.024,0-1.414l1.414-1.414	c0.391-0.391,1.024-0.391,1.414,0L22,27.758l10.879-10.879c0.391-0.391,1.024-0.391,1.414,0l1.414,1.414	c0.391,0.391,0.391,1.024,0,1.414l-13,13C22.317,33.098,21.683,33.098,21.293,32.707z"></path>
        </svg>
    );
}
function CrossIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 48 48">
            <path fill="#f44336" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"></path><path fill="#fff" d="M29.656,15.516l2.828,2.828l-14.14,14.14l-2.828-2.828L29.656,15.516z"></path><path fill="#fff" d="M32.484,29.656l-2.828,2.828l-14.14-14.14l2.828-2.828L32.484,29.656z"></path>
        </svg>
    );
}

export function PricingCard({ price, title, features }) {
    const navigate = useNavigate()
    return (
        <div className="wrapper w-full mx-auto max-w-[25rem] rounded-xl transition-all duration-700 hover:scale-105">
            <div className="w-full">
                <div className="inner rounded-xl">
                    <Card variant="filled" className="w-full mx-auto p-8 bg-gradient-to-r from-[#8983ff] to-[#5d55f0] shadow-2xl">
                        <CardHeader
                            floated={false}
                            shadow={false}
                            color="transparent"
                            className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center"
                        >
                            <Typography
                                variant="small"
                                color="white"
                                className="font-normal uppercase"
                            >
                                {title} {/* Displaying the title */}
                            </Typography>
                            <Typography
                                variant="h1"
                                color="white"
                                className="mt-6 flex justify-center gap-1 text-7xl font-normal"
                            >
                                <span className="mt-2 text-4xl font-medium lg:text-6xl text-gray-50" style={{fontFamily:"Montserrat"}}>${price}/</span>
                            </Typography>
                        </CardHeader>
                        <CardBody className="p-0">
                            <ul className="flex flex-col gap-4 text-white">
                                {features.map((feature, index) => (
                                    <li key={index} className="flex items-center gap-4">
                                        {feature.included ? <CheckIcon /> : <CrossIcon />}
                                        {/* <CrossIcon/> */}
                                        <Typography className="font-normal">{feature.name}</Typography>
                                    </li>
                                ))}
                            </ul>
                        </CardBody>
                        <CardFooter className="mt-12 p-0">
                            <Button
                                size="lg"
                                color='white'
                                className="hover:scale-[1.02] focus:scale-[1.02] active:scale-100 hover:bg-[#e8e7ff]"
                                ripple={false}
                                fullWidth={true}
                                onClick={() => {
                                    navigate('/buy', { state: { title } })
                                }}
                            >
                                Buy Now
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </div>

    );
}
