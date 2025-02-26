import { IoBriefcaseOutline } from "react-icons/io5";
import SectionHeading from "../../../Components/SectionHeading/SectionHeading"
import { FiCalendar } from "react-icons/fi";
import { TbActivityHeartbeat } from "react-icons/tb";
import { FaCarAlt } from "react-icons/fa";

const Services = () => {

    const servicesData = [
        {icon : FiCalendar , description : "Nibh nullam vitae semper pharetra sit enim id. Ut eu non massa nec. Proin eget semper orci suspendisse in ornare adipiscing phasellus mauris. Velit faucibus at habitasse tempor sit odio ac commodo dui. "},
        {icon : IoBriefcaseOutline , description : "Sed et pulvinar donec sed et, nisl dolor amet. Mollis aliquet volutpat ullamcorper ac sed lectus iaculis. Fringilla sed placerat commodo bibendum integer. Diam ut magna eleifend consectetur. "},
        {icon : TbActivityHeartbeat , description : "Nunc amet, tempor morbi ligula ut faucibus gravida. Accumsan, suspendisse mus quisque pellentesque id vulputate hendrerit. Donec ipsum nibh elementum platea proin egestas gravida consectetur sit."},
        {icon : FaCarAlt , description : "Pellentesque auctor adipiscing lacus viverra. Neque, nulla in amet eget. Arcu, nibh purus urna amet sagittis quis tellus etiam eget. Ultrices egestas a tristique aliquet odio varius. "}
    ]

  return (
    <div className="max-w-screen-2xl container mx-auto bg-white py-20">
        <SectionHeading heading={"Services"} subHeading={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum amet at molestie mattis"} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {
                servicesData.map((item , idx) =>(
                    <div className="flex items-center justify-center flex-col hover:shadow-xl py-7 px-3 rounded duration-500 transition" key={idx}>
                        <item.icon className="text-6xl mb-4 text-[#C1C7CD] font-bold"/>
                        <p className="text-center text-gray-600 text-[18px] font-roboto">{item.description}</p>
                    </div>
                ))
            }
        </div>
        <div className="text-center mt-16">
            <button className="py-2 px-10 bg-[#0F62FE] rounded text-[#ffff] text-[17px] font-bold hover:bg-[#395892] hover:text-black transition-all duration-500">Primary Action</button>
        </div>
    </div>
  )
}

export default Services