import { Option, Select, Spinner, timeline } from '@material-tailwind/react';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Swal from 'sweetalert2'

export const Buy = () => {
    const [formState, setFormState] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        vin: '',
        package: '',
    });
    const [loading, setLoading] = useState(false)

    const { state } = useLocation()
    const { title } = state || ''

    useEffect(() => {
        formState.package = title
        // console.log(formState)
    }, [])

    // useEffect(() => {
    //     Swal.fire({
    //         title: 'Terms and Conditions',
    //         html: `
    //           <div class="terms-content">
    //             <h3>Non-Refundable Payment Policy</h3>
    //             <p><strong>Effective Date:</strong> ${new Date().toLocaleDateString()}</p>
    //             <p>At CarFaxChecks, we provide comprehensive car history reports to our valued customers. To ensure clarity and transparency, we outline our non-refundable payment policy below.</p>

    //             <h4>Policy Statement:</h4>
    //             <p>All payments made for car history reports on our website are non-refundable. Once a report is purchased, the customer acknowledges that they have read and agreed to this policy.</p>

    //             <h4>Reasons for Non-Refundability:</h4>
    //             <ul>
    //               <li>Instant Access: Our reports are generated instantly upon payment, providing immediate access to valuable information.</li>
    //               <li>Irreversible Data Retrieval: Our system incurs costs to retrieve and process data for each report.</li>
    //               <li>Customized Reports: Each report is tailored to the specific vehicle identification number (VIN) or license plate number provided.</li>
    //             </ul>

    //             <h4>Exceptions:</h4>
    //             <p>No exceptions will be made to this policy, including but not limited to:</p>
    //             <ul>
    //               <li>Reports containing inaccurate information (customers are encouraged to contact our support team for corrections)</li>
    //               <li>Duplicate reports or unintended purchases</li>
    //             </ul>

    //             <h4>Customer Acknowledgement:</h4>
    //             <p>By completing a purchase on our website, customers acknowledge that they:</p>
    //             <ul>
    //               <li>Understand the non-refundable nature of the payment</li>
    //               <li>Agree to the terms and conditions outlined in this policy</li>
    //               <li>Have reviewed and accepted our website's terms of service and privacy policy</li>
    //             </ul>

    //             <h4>Support and Dispute Resolution:</h4>
    //             <p>If you have concerns or issues with your report, please contact our support team at jamessmith2468@carfaxchecks.com. We will address your inquiry promptly.</p>

    //             <h4>Changes to This Policy:</h4>
    //             <p>We reserve the right to update or modify this policy at any time without prior notice.</p>

    //             <h4>Acceptance:</h4>
    //             <p>By using our website and purchasing a report, you confirm your acceptance of this non-refundable payment policy.</p>
    //           </div>
    //           <br>
    //           <input type="checkbox" id="agreeCheckbox"> I agree to terms and conditions
    //         `,
    //         confirmButtonText: 'OK',
    //         confirmButtonColor: '#4c51bf', // Indigo color for OK button
    //         preConfirm: () => {
    //           if (!document.getElementById('agreeCheckbox').checked) {
    //             Swal.showValidationMessage('You need to agree to the terms and conditions to proceed.');
    //             return false;
    //           }
    //         },
    //         allowOutsideClick: false,
    //         customClass: {
    //           popup: 'swal-modal',
    //           htmlContainer: 'swal-content',
    //         },
    //       });
    // }, [])


    // Handle input changes
    const handleChange = (e) => {
        const name = e.target ? e.target.name : 'package'; // If target exists, use the native event. Otherwise, it's for Select.
        const value = e.target ? e.target.value : e; // If target exists, use the native event value. Otherwise, e is the value from Select.

        setFormState((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        console.log(formState); // Handle form submission logic here
        //fetch request to buy package
        try {
            const response = await fetch(`https://carfaxchecks.com/api/package/purchase`, {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formState)
            })

            const json = await response.json()

            if (response.ok) {
                // navigate to vin car details
                console.log(json)
                // navigate('/');
                if (json.status.includes('CREATED')) {
                    console.log('in created')
                    window.location.href = json.url;
                } else {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Something went wrong, payment did NOT complete",
                    });
                }
            }


        } catch (error) {
            //there was an error

            console.log(error)

            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
            });
            // console.log('fetch error')

        }
        finally {
            setLoading(false)
        }
    };

    return (
        <div className="min-h-screen flex flex-col justify-center items-center py-20 xl:py-40 bg-gradient-to-r from-[#1d1e22] to-[#393f4d]">
            <h1 className="text-4xl xl:text-7xl my-10 text-white font-bold tracking-wider" style={{ fontFamily: "Roboto Condensed", fontOpticalSizing: "auto", fontWeight: 400, fontStyle: 'normal' }}>Buy Package</h1>
            <h2 className="text-4xl xl:text-5xl my-10 text-white font-normal" style={{ fontFamily: "Roboto Condensed", fontOpticalSizing: "auto", fontWeight: 400, fontStyle: 'normal' }}>Your Information</h2>
            <form className="max-w-2xl w-3/4 md:w-full mx-auto flex flex-col gap-5" onSubmit={handleSubmit}>
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
                            autoComplete="off"
                            placeholder=" "
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
                    <div className="relative z-0 w-full md:mb-5 group">
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
                </div>
                <div className="relative z-0 w-full md:mb-5 group">
                    <input
                        type="text"
                        name="vin"
                        id="floating_vin"
                        className="block py-2.5 px-0 w-full text-sm text-gray-100 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#990011] peer"
                        autoComplete="off"
                        placeholder=" "
                        required
                        value={formState.vin}
                        onChange={handleChange}
                    />
                    <label
                        htmlFor="floating_vin"
                        className="peer-focus:font-medium absolute text-sm text-gray-300 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-gray-50 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        VIN Number
                    </label>
                </div>
                <Select name='package' size="lg" label="Select Package" color='red' className='text-gray-100' onChange={handleChange} value={title}>
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
                    className="text-white disabled:bg-[#8983ff35] bg-[#990011] hover:bg-[#990011]/70 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 mt-10 md:mt-1 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    disabled={loading}
                >
                    Next
                </button>
                {loading && <Spinner color="indigo" className="mx-auto h-10 w-10" />}
            </form>
        </div>
    );
};
