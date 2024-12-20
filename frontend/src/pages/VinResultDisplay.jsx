import React, { useState } from 'react'
import { Card, CardBody, Typography, Avatar, Button } from "@material-tailwind/react";
import Pricing from '../components/Pricing';
import { useLocation } from 'react-router-dom';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import PDFTable from '../components/PDFTable';

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
        details: '2014',
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
        <div className='bg-gradient-to-r from-[#1d1e22] to-[#393f4d]'>
            {/* {console.log(json)} */}
            <div className="h-screen pt-24 pb-10 md:pb-20 flex flex-col items-center justify-center p-5 rounded-2xl">

                <PDFDownloadLink
                    document={json && <PDFTable json={json} />}
                    fileName="Vin Details.pdf"
                    className='self-end my-0 lg:my-1 lg:mt-2'
                >
                    {({ loading }) => (
                        <Button color='indigo' className='hover:bg-[#990011]/90'>
                            {loading ? 'Loading...' : 'Download PDF'}
                        </Button>
                    )}
                </PDFDownloadLink>

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
                <Card className={`h-full w-full ${json && 'overflow-y-scroll'} overflow-x-hidden p-5 mt-5 lg:mt-2`}>
                    <table className="w-full table-fixed min-w-max text-left">
                        <tbody>
                            <h1 className="text-3xl w-full md:text-5xl font-semibold m-5 text-[#990011] tracking-wider" style={{ fontFamily: "Roboto Condensed", fontOpticalSizing: "auto", fontWeight: 400, fontStyle: 'normal' }}>
                                Vin Details
                            </h1>
                            {json && json.map(({ name, details }) => (
                                (details ?
                                    <tr key={name} className="even:bg-[#990011]/20 odd:bg-[#990011]/50">
                                        <td className="p-4 rounded-l-md">
                                            <Typography variant="h5" color="blue-gray" className="font-normal break-words">
                                                {name}
                                            </Typography>
                                        </td>
                                        <td className="p-4 rounded-r-md">
                                            <Typography variant="h5" color="blue-gray" className="font-normal break-words">
                                                {details}
                                            </Typography>
                                        </td>
                                    </tr> : <></>
                                )
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
        </div>
    )
}
