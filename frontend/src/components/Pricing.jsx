import React from 'react';
import { PricingCard } from './PricingCard';

const Pricing = () => {
    // Array of pricing plans with different values
    const pricingData = [
        {
            price: '19',
            title: 'Basic Plan',
            features: [
                'Ownership Costs',
                'Accident Information',
                'Market Value Range',
                "Owner's History",
                'Vehicle Specifications',
                'Safety Recall Status',
                'Online Listing History',
                'Warranties',
                'Salvage Information',
                'Installed Equipment'
            ]
        },
        {
            price: '29',
            title: 'Standard Plan',
            features: [
                'Ownership Costs',
                'Accident Information',
                'Market Value Range',
                "Owner's History",
                'Vehicle Specifications',
                'Safety Recall Status',
                'Online Listing History',
                'Warranties',
                'Salvage Information',
                'Installed Equipment'
            ]
        },
        {
            price: '49',
            title: 'Premium Plan',
            features: [
                'Ownership Costs',
                'Accident Information',
                'Market Value Range',
                "Owner's History",
                'Vehicle Specifications',
                'Safety Recall Status',
                'Online Listing History',
                'Warranties',
                'Salvage Information',
                'Installed Equipment'
            ]
        },
        {
            price: '99',
            title: 'Enterprise Plan',
            features: [
                'Ownership Costs',
                'Accident Information',
                'Market Value Range',
                "Owner's History",
                'Vehicle Specifications',
                'Safety Recall Status',
                'Online Listing History',
                'Warranties',
                'Salvage Information',
                'Installed Equipment'
            ]
        },
    ];

    return (
        <div className='bg-blue-gray-50 pt-32 min-h-screen'>
            <h1 className='text-5xl text-center font-semibold tracking-wider text-gray-900'>OUR PRICING</h1>
            <div className="flex flex-wrap gap-10 p-5 w-full mt-8">
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
