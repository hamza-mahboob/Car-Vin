import React from 'react'
import { Card, CardBody, Typography, Avatar } from "@material-tailwind/react";
import Pricing from '../components/Pricing';

const customers = [
    {
        name: "Vin:",
        details: '1VXBR12EXCP901213',
    },
    {
        name: "Make:",
        details: 'null',
    },
    {
        name: "Manufacturer Name:",
        details: 'null',
    },
    {
        name: "Model:",
        details: 'null',
    },
    {
        name: "Model year:",
        details: 'null',
    },
    {
        name: "Plant City:",
        details: 'null',
    },
    {
        name: "Plant Country:",
        details: 'null',
    },
    {
        name: "Plant Company Name:",
        details: 'null',
    },
    {
        name: "Plant State:",
        details: 'null',
    },
];

export const VinResultDisplay = () => {
    return (
        <>
            <div className="h-screen mt-20 pb-20 flex items-center justify-center p-3">
                <Card className="w-[30rem] bg-gray-100">
                    <CardBody>
                        <div className="mb-4 flex items-center justify-between">
                            <Typography variant="h2" color="blue-gray" className="">
                                VIN Details
                            </Typography>
                        </div>
                        <div className="divide-y divide-gray-200">
                            {customers.map(({ name, details }, index) => (
                                <div
                                    key={index}
                                    className="flex items-center justify-between pb-3 pt-3 last:pb-0"
                                >
                                    <div className="flex items-center gap-x-3">

                                        <div>
                                            <Typography color="blue-gray" variant="h5">
                                                {name}
                                            </Typography>
                                        </div>
                                    </div>
                                    <Typography color="blue-gray" variant="h5">
                                        {details}
                                    </Typography>
                                </div>
                            ))}
                        </div>
                    </CardBody>
                </Card>
            </div>
            <Pricing />
        </>
    )
}
