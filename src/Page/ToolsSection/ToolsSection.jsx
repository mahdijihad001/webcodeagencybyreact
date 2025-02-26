import SectionHeading from "../../Components/SectionHeading/SectionHeading"
import { FiSettings, FiCode, FiSmartphone, FiCloud } from "react-icons/fi";


const tools = [
    {
        icon: FiSettings,
        title: "Customizable Settings",
        description: "Easily configure tools to fit your project requirements.",
    },
    {
        icon: FiCode,
        title: "Developer-Friendly",
        description: "Optimized for developers with clean and efficient code.",
    },
    {
        icon: FiSmartphone,
        title: "Responsive Design",
        description: "Build tools that look great on any device and screen size look great on any device and screen size.",
    },
    {
        icon: FiCloud,
        title: "Cloud Integration",
        description: "Seamlessly connect with cloud services for better productivity.",
    },
];


const ToolsSection = () => {
    return (
        <div className="max-w-screen-2xl container py-20 mx-auto px-3">
            {/* Heading Section */}
            <SectionHeading heading={"The tools you need"} subHeading={"All-in-One Solution for Your Projects"} />
            {/* Tool Card */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 cursor-pointer">
                {tools.map((item, idx) => (
                    <div
                        className="text-center bg-white py-5 px-3 hover:shadow-xl transition duration-700 rounded"
                        key={idx}
                    >
                        <div className="flex items-center justify-center">
                            <item.icon className="text-blue-600 text-4xl mb-4 block" />
                        </div>
                        <h2 className="font-bold text-[25px] text-[#21272A] mb-2">{item.title}</h2>
                        <p className="font-extralight text-gray-500 text-[17px]">{item.description}</p>
                    </div>
                ))}
            </div>
            {/* Tool Explare Button */}
            <div className="mt-14 text-center">
                <button className="py-2 px-10 bg-[#0F62FE] rounded text-[#ffff] text-[17px] font-bold hover:bg-[#395892] hover:text-black transition-all duration-500">Explore More</button>
            </div>
        </div>
    )
}

export default ToolsSection