import React from 'react'
import { Card, CardBody, Typography, Avatar } from "@material-tailwind/react";
import Pricing from '../components/Pricing';
import { useLocation } from 'react-router-dom';

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
    {
        name: "Plant State:",
        details: 'null',
    },
    {
        name: "Plant State:",
        details: 'null',
    },
    {
        name: "Plant State:",
        details: 'null',
    },
    {
        name: "Plant State:",
        details: 'null',
    },
    {
        name: "Plant State:",
        details: 'null',
    },
    {
        name: "Plant State:",
        details: 'null',
    },
    {
        name: "Plant State:",
        details: 'null',
    },
    {
        name: "Plant State:",
        details: 'null',
    },
    {
        name: "Plant State:",
        details: 'null',
    },
    {
        name: "Plant State:",
        details: 'null',
    },
    {
        name: "Plant State:",
        details: 'null',
    },
    {
        name: "Plant State:",
        details: 'null',
    },
    {
        name: "Plant State:",
        details: 'null',
    },
    {
        name: "Plant State:",
        details: 'null',
    },
    {
        name: "Plant State:",
        details: 'null',
    },
];

export const VinResultDisplay = () => {
    const { state } = useLocation();
    const { json } = state || {};

    return (
        <>
            {/* {console.log(json)} */}
            <div className="h-screen pt-20 pb-20 flex items-center justify-center p-5 rounded-2xl">
                {/* <Card className="w-full m-10 bg-indigo-200 p-2 h-5/6">
                    <CardBody>
                        <div className="mb-4 flex items-center justify-between">
                            <Typography variant="h2" color="blue-gray" className="">
                                VIN Details
                            </Typography>
                        </div>
                        <div className={`divide-y divide-gray-200 ${json && 'overflow-y-scroll'} max-h-96 md:max-h-[35rem] p-3`}>
                            {json && json.map(({ name, details }, index) => (
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
                            {!json && <div className='text-red-500 text-xl'>There was an error fetching data...</div>}
                        </div>
                    </CardBody>
                </Card> */}
                <Card className={`h-full w-full ${json && 'overflow-y-scroll'} overflow-x-hidden p-5 mt-20`}>
                    <table className="w-full table-fixed min-w-max text-left">
                        <tbody>
                            <h1 className="text-3xl w-full md:text-5xl font-semibold m-5 text-[#8983ff] tracking-wider" style={{ fontFamily: "Dancing Script" }}>
                                Vin Details
                            </h1>
                            {json && json.map(({ name, details }) => (
                                <tr key={name} className="even:bg-[#8983ff]/20 odd:bg-[#8983ff]/50">
                                    <td className="p-4 rounded-l-md">
                                        <Typography variant="h5" color="blue-gray" className="font-normal">
                                            {name}
                                        </Typography>
                                    </td>
                                    <td className="p-4 rounded-r-md">
                                        <Typography variant="h5" color="blue-gray" className="font-normal truncate">
                                            {details}
                                        </Typography>
                                    </td>
                                </tr>
                            ))}
                            {!json && (
                                <h1 className="text-red-500 mx-auto text-xl md:text-2xl text-center">
                                    There was an error fetching data...
                                </h1>
                            )}
                        </tbody>
                    </table>
                </Card>

            </div>
            <Pricing />
        </>
    )
}
