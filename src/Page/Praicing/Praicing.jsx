import { useState } from "react"
import SectionHeading from "../../Components/SectionHeading/SectionHeading"
import { FcCheckmark } from "react-icons/fc";

const Praicing = () => {


    const pricingPlans = [
        {
            name: "Freelancer",
            totalMonthlyPrice: 40,
            monthlyDiscountPrice: 25,
            totalYearlyPrice: 430, // 25 * 12
            totalYearlyDiscountPrice: 250, // 25 * 12
            saves: " USD per month, paid annually",
            features: [
                "1 Project",
                "Basic Support",
                "Access to all templates",
                "5GB Storage",
            ],
        },
        {
            name: "Professional",
            totalMonthlyPrice: 90,
            monthlyDiscountPrice: 75,
            totalYearlyPrice: 900, // 25 * 12
            totalYearlyDiscountPrice: 600, // 25 * 12
            saves: " USD per month, paid annually",
            features: [
                "5 Projects",
                "Priority Support",
                "Access to all templates",
                "25GB Storage",
                "Advanced Analytics",
            ],
        },
        {
            name: "Agency",
            totalMonthlyPrice: 200,
            monthlyDiscountPrice: 170,
            totalYearlyPrice: 2000, // 25 * 12
            totalYearlyDiscountPrice: 1690, // 25 * 12
            saves: " USD per month, paid annually",
            features: [
                "Unlimited Projects",
                "24/7 Support",
                "Access to all templates",
                "Unlimited Storage",
                "Custom Branding",
                "Team Collaboration",
            ],
        },
    ];

    const [isYearly, setIsYearly] = useState(false);

    return (
        <div className="sectionContainer sm:px-3 max-sm:px-3">
            <SectionHeading heading={"Pricing"} subHeading={"Choose Your Plan"} description={"Our pricing plans are flexible and designed to fit your needs. Choose a plan that works best for you."} />
            {/* Toggle Button */}
            <div className="form-control items-center justify-center">
                <label className="cursor-pointer flex items-center gap-5">
                    <span className="label-text text-[20px] font-medium font-roboto text-gray-700">{isYearly ? "Yearly Pricing" : "Monthly Pricing"}</span>
                    <input type="checkbox" className="toggle" checked={isYearly} onChange={() => setIsYearly(!isYearly)} />
                </label>
            </div>
            {/* PraicingCart */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-stretch md:grid-cols-3 md:gap-8 mt-20">
                {/* Card */}
                {
                    pricingPlans.map((item, idx) => (
                        <div key={idx} className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-center">

                            {/* Plan Header */}
                            <div className="p-6 sm:px-8 flex flex-col items-center">
                                <h2 className="text-[35px] font-bold text-gray-900">
                                    {item.name}
                                    <span className="sr-only">Plan</span>
                                </h2>

                                <p className="mt-2 text-gray-700 text-[20px]">{isYearly ? item.monthlyDiscountPrice : null} {isYearly ? item.saves : null}</p>
                                <p className="mt-2 sm:mt-4 text-center">
                                    <span className="line-through text-gray-500 text-lg font-medium">${isYearly ? item.totalYearlyPrice : item.totalMonthlyPrice}</span>{" "}
                                    <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">${isYearly ? item.totalYearlyDiscountPrice : item.monthlyDiscountPrice}</strong>
                                </p>

                                <a
                                    className="mt-4 block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500 sm:mt-6"
                                >
                                    Get Started
                                </a>
                            </div>
                            {/* Plan Details */}
                            <div className="p-6 sm:px-8 flex items-center flex-col">
                                <p className="text-[25px] font-bold text-gray-900 sm:text-xl">{"What's included:"}</p>

                                <ul className="mt-2 space-y-2 sm:mt-4">
                                    {
                                        item.features.map((item, idx) => (
                                            <li key={idx} className="flex items-center gap-1">
                                                <FcCheckmark />
                                                <span className="text-gray-600 text-[17px]">{item}</span>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>

                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Praicing