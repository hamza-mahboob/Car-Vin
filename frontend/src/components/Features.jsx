import React from 'react';
import { HorizontalCard } from './HorizontalCard';

const cardData = [
    {
        image: `https://picsum.photos/200/300?random=${Math.floor((Math.random() * 10))}`,
        title: "Comprehensive Data",
        subtitle: "01",
        description: "Our reports compile data from various trusted sources, providing you with a comprehensive overview of your vehicle's history, including maintenance records, ownership history, and more...",
        link: "#"
    },
    {
        image: `https://picsum.photos/200/300?random=${Math.floor((Math.random() * 10))}`,
        title: "User Friendly",
        subtitle: "02",
        description: "Our user-friendly platform allows you to easily access and interpret your VIN report. No technical expertise required – just enter your VIN and let us handle the rest.",
        link: "#"
    },
    {
        image: `https://picsum.photos/200/300?random=${Math.floor((Math.random() * 10))}`,
        title: "Why Choose Our VIN Report",
        subtitle: "03",
        description: "Reveal your vehicle's past. Utilize VIN for informed choices. Access transparency and confidence with our reports.",
        link: "#"
    },
    {
        image: `https://picsum.photos/200/300?random=${Math.floor((Math.random() * 10))}`,
        title: "Easy Procedure",
        subtitle: "04",
        description: "Uncover hidden vehicle history through detailed VIN reports, aiding informed decisions for buyers, sellers, and enthusiasts.",
        link: "#"
    }
];

const Features = () => {
    return (
        <div className="bg-gray-100 py-10 ">
            <h2 className="text-4xl font-bold text-center mb-10 text-[#766fff]">Our Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 justify-center">
                {cardData.map((card, index) => (
                    <div key={index} className="mx-auto px-2">
                        <HorizontalCard
                            image={card.image}
                            title={card.title}
                            subtitle={card.subtitle}
                            description={card.description}
                            link={card.link}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Features;
