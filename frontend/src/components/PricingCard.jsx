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
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-3 w-3"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
            />
        </svg>
    );
}

export function PricingCard({ price, title, features }) {
    const navigate = useNavigate()
    return (
        <div className="wrapper w-full mx-auto max-w-[25rem] rounded-xl transition-all duration-500 hover:scale-105">
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
                                <span className="mt-2 text-4xl">$</span>{price}{" "}
                                <span className="self-end text-4xl">/mo</span>
                            </Typography>
                        </CardHeader>
                        <CardBody className="p-0">
                            <ul className="flex flex-col gap-4 text-white">
                                {features.map((feature, index) => (
                                    <li key={index} className="flex items-center gap-4">
                                        <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                            <CheckIcon />
                                        </span>
                                        <Typography className="font-normal">{feature}</Typography>
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
