import React from 'react';
import { PricingCard } from './PricingCard';

const Pricing = () => {
    // Array of pricing plans with different values
    const pricingData = [
        {
            price: '31.99',
            title: 'Silver',
            features: [
                { name: 'Ownership Costs', included: true },
                { name: 'Accident Information', included: true },
                { name: 'Market Value Range', included: true },
                { name: "Owner's History", included: true },
                { name: 'Vehicle Specifications', included: false },
                { name: 'Safety Recall Status', included: false },
                { name: 'Online Listing History', included: false },
                { name: 'Warranties', included: false },
                { name: 'Salvage Information', included: false },
                { name: 'Installed Equipment', included: false }
            ]
        },
        {
            price: '54.99',
            title: 'Gold',
            features: [
                { name: 'Ownership Costs', included: true },
                { name: 'Accident Information', included: true },
                { name: 'Market Value Range', included: true },
                { name: "Owner's History", included: true },
                { name: 'Vehicle Specifications', included: true },
                { name: 'Safety Recall Status', included: true },
                { name: 'Online Listing History', included: false },
                { name: 'Warranties', included: false },
                { name: 'Salvage Information', included: false },
                { name: 'Installed Equipment', included: false }
            ]
        },
        {
            price: '84.99',
            title: 'Platinum',
            features: [
                { name: 'Ownership Costs', included: true },
                { name: 'Accident Information', included: true },
                { name: 'Market Value Range', included: true },
                { name: "Owner's History", included: true },
                { name: 'Vehicle Specifications', included: true },
                { name: 'Safety Recall Status', included: true },
                { name: 'Online Listing History', included: true },
                { name: 'Warranties', included: true },
                { name: 'Salvage Information', included: false },
                { name: 'Installed Equipment', included: false }
            ]
        },
        {
            price: '124.99',
            title: 'Diamond',
            features: [
                { name: 'Ownership Costs', included: true },
                { name: 'Accident Information', included: true },
                { name: 'Market Value Range', included: true },
                { name: "Owner's History", included: true },
                { name: 'Vehicle Specifications', included: true },
                { name: 'Safety Recall Status', included: true },
                { name: 'Online Listing History', included: true },
                { name: 'Warranties', included: true },
                { name: 'Salvage Information', included: true },
                { name: 'Installed Equipment', included: false }
            ]
        },
        {
            price: '234.99',
            title: 'Ruby',
            features: [
                { name: '5 Vehicles Reports', included: true },
                { name: 'Ownership Costs', included: true },
                { name: 'Accident Information', included: true },
                { name: 'Market Value Range', included: true },
                { name: "Owner's History", included: true },
                { name: 'Vehicle Specifications', included: true },
                { name: 'Safety Recall Status', included: true },
                { name: 'Online Listing History', included: true },
                { name: 'Warranties', included: true },
                { name: 'Salvage Information', included: true },
                { name: 'Installed Equipment', included: true }
            ]
        },
        {
            price: '494.99',
            title: 'Saphire',
            features: [
                { name: '10 Vehicle Reports', included: true },
                { name: 'Ownership Costs', included: true },
                { name: 'Accident Information', included: true },
                { name: 'Market Value Range', included: true },
                { name: "Owner's History", included: true },
                { name: 'Vehicle Specifications', included: true },
                { name: 'Safety Recall Status', included: true },
                { name: 'Online Listing History', included: true },
                { name: 'Warranties', included: true },
                { name: 'Salvage Information', included: true },
                { name: 'Installed Equipment', included: true }
            ]
        },
    ];

    return (
        <div className='bg-indigo-50 py-32 h-auto'>
            <h1 className='text-5xl text-center font-semibold tracking-wider text-gray-900' style={{ fontFamily: "Roboto Condensed", fontOpticalSizing: "auto", fontWeight: 500, fontStyle: 'normal' }}>OUR PRICING</h1>
            <div className="flex flex-wrap gap-5 gap-y-10 p-5 w-full lg:max-w-[100rem] mx-auto mt-8">
                {pricingData.map((plan, index) => (
                    <PricingCard
                        key={index}
                        price={plan.price}
                        title={plan.title}
                        features={plan.features}
                    />
                ))}
            </div>
        </div>
    );
}

export default Pricing;
