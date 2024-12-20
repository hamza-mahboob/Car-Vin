import { Option, Select, Spinner } from '@material-tailwind/react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

export const OrderCancel = () => {
    const navigate = useNavigate()
    const [formState, setFormState] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        vin: '',
        package: '',
    });
    const [loading, setLoading] = useState(false)

    // Handle input changes
    const handleChange = (e) => {
        const name = e.target ? e.target.name : 'package'; // If target exists, use the native event. Otherwise, it's for Select.
        const value = e.target ? e.target.value : e; // If target exists, use the native event value. Otherwise, e is the value from Select.

        setFormState((prevState) => ({
            ...prevState,
            [name]: value,
        }));
        // console.log(formState)
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        console.log(formState); // Handle form submission logic here
        //fetch request for cancellation of order
        try {
            const response = await fetch(`https://carfaxchecks.com/api/cancelrequest`, {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formState)
            })

            const json = await response.json()

            if (response.ok) {
                // navigate to vin car details
                console.log(json)
                navigate('/', { state: { msg: "success" } });
            }

        } catch (error) {
            //there was an error
            console.log(error)
            navigate('/', { state: { msg: "error" } });
            // Swal.fire({
            //     icon: "error",
            //     title: "Oops...",
            //     text: "Something went wrong!",
            // });
            // console.log('fetch error')
        }
        finally {
            setLoading(false)
        }
    };

    return (
        <div className="min-h-screen flex flex-col justify-center items-center py-20 xl:py-40 bg-gradient-to-r from-[#1d1e22] to-[#393f4d]">
            <h1 className="text-4xl xl:text-7xl my-10 text-white font-bold tracking-wider" style={{ fontFamily: "Roboto Condensed", fontOpticalSizing: "auto", fontWeight: 400, fontStyle: 'normal' }}>Order Cancellation</h1>
            <h2 className="text-4xl xl:text-5xl my-10 text-white font-normal" style={{ fontFamily: "Roboto Condensed", fontOpticalSizing: "auto", fontWeight: 400, fontStyle: 'normal' }}>Your Information:</h2>
            <form className="max-w-2xl w-3/4 md:w-full mx-auto flex flex-col gap-5 auto" onSubmit={handleSubmit} >
                <div className="grid md:grid-cols-2 md:gap-5">
                    <div className="relative z-0 w-full mb-5 group">
                        <input
                            type="text"
                            name="firstName"
                            id="floating_first_name"
                            className="block py-2.5 px-0 w-full text-sm text-gray-100 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#990011] peer"
                            placeholder=" "
                            autoComplete="off"
                            required
                            value={formState.firstName}
                            onChange={handleChange}


                        />
                        <label
                            htmlFor="floating_first_name"
                            className="peer-focus:font-medium absolute text-sm text-gray-300 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-gray-50 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            First name
                        </label>
                    </div>
                    <div className="relative z-0 w-full md:mb-5 group">
                        <input
                            type="text"
                            name="lastName"
                            id="floating_last_name"
                            className="block py-2.5 px-0 w-full text-sm text-gray-100 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#990011] peer"
                            placeholder=" "
                            autoComplete="off"
                            required
                            value={formState.lastName}
                            onChange={handleChange}

                        />
                        <label
                            htmlFor="floating_last_name"
                            className="peer-focus:font-medium absolute text-sm text-gray-300 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-gray-50 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Last name
                        </label>
                    </div>
                </div>
                <div className="relative z-0 w-full md:mb-5 group">
                    <input
                        type="email"
                        name="email"
                        id="floating_email"
                        className="block py-2.5 px-0 w-full text-sm text-gray-100 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#990011] peer"
                        placeholder=" "
                        autoComplete="nope"
                        required
                        value={formState.email}
                        onChange={handleChange}

                    />
                    <label
                        htmlFor="floating_email"
                        className="peer-focus:font-medium absolute text-sm text-gray-300 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-gray-50 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Email address
                    </label>
                </div>
                <div className="grid md:grid-cols-1 md:gap-5">
                    <div className="relative z-0 w-full mb-5 group">
                        <input
                            type="number"
                            name="phone"
                            id="floating_phone"

                            className="block py-2.5 px-0 w-full text-sm text-gray-100 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#990011] peer"
                            placeholder=" "
                            autoComplete="nope"
                            required
                            value={formState.phone}
                            onChange={handleChange}

                        />
                        <label
                            htmlFor="floating_phone"
                            className="peer-focus:font-medium absolute text-sm text-gray-300 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-gray-50 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Phone number
                        </label>
                    </div>
                    <div className="relative z-0 w-full md:mb-5 group">
                        <input
                            type="text"
                            name="vin"
                            id="floating_vin"
                            className="block py-2.5 px-0 w-full text-sm text-gray-100 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#990011] peer"
                            autoComplete="off"
                            placeholder=" "
                            value={formState.vin}
                            onChange={handleChange}
                        />
                        <label
                            htmlFor="floating_vin"
                            className="peer-focus:font-medium absolute text-sm text-gray-300 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-gray-50 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            VIN Number (optional)
                        </label>
                    </div>
                </div>
                <Select name='package' size="lg" label="Select Package" color='red' className='text-gray-100' onChange={handleChange} value={formState.package}>
                    {/* <Option value="Standard" className='text-gray-900'>Standard Plan</Option> */}
                    <Option value="Silver" className='text-gray-900'>Silver Plan</Option>
                    <Option value="Gold" className='text-gray-900'>Gold Plan</Option>
                    <Option value="Platinum" className='text-gray-900'>Platinum Plan</Option>
                    {/* <Option value="Diamond" className='text-gray-900'>Diamond Plan</Option> */}
                    {/* <Option value="Ruby" className='text-gray-900'>Ruby Plan</Option> */}
                    {/* <Option value="Saphire" className='text-gray-900'>Saphire Plan</Option>  */}
                </Select>
                <button
                    type="submit"
                    className="text-white disabled:bg-[#8983ff35] bg-[#990011] hover:bg-[#990011]/70 focus:outline-none font-medium rounded-lg text-sm w-full px-5 mt-10 md:mt-1 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700"
                    disabled={loading}
                >
                    Submit
                </button>
                {loading && <Spinner color="indigo" className="mx-auto h-10 w-10" />}
            </form>
        </div>
    );
};
