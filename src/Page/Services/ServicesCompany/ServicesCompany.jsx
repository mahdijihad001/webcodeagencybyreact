import SectionHeading from "../../../Components/SectionHeading/SectionHeading"
import { FaApple, FaGoogle, FaAmazon, FaMicrosoft, FaFacebook } from 'react-icons/fa';

const ServicesCompany = () => {

    const logos = [
        { icon: FaApple, name: "Apple" },
        { icon: FaGoogle, name: "Google" },
        { icon: FaAmazon, name: "Amazon" },
        { icon: FaMicrosoft, name: "Microsoft" },
        { icon: FaFacebook, name: "Facebook" },
    ];


    return (
        <div className="bg-[#F2F4F8] py-20 max-w-screen-2xl container mx-auto">
            <SectionHeading heading={"You Are in GooD Company"} subHeading={"Bibendum amet at molestie mattis."} description={"Rhoncus morbi et augue nec, in id ullamcorper at sit. Condimentum sit nunc in eros scelerisque sed. Commodo in viverra nunc, ullamcorper ut. Non, amet, aliquet scelerisque nullam sagittis, pulvinar. Fermentum scelerisque sit consectetur hac mi. Mollis leo eleifend ultricies purus iaculis."} />
            {/* Company Logo */}
            <div className="relative overflow-hidden">
                <div className="flex justify-around items-center md:space-x-14 space-x-8 max-sm:px-2 animateScroll">
                    {
                        logos.map((item, idx) => {
                            return (
                                <div className="flex items-center justify-center bg-white w-28 h-28 rounded-full hover:scale-110 transition transform duration-500" key={idx}>
                                    <item.icon title={item.name} className="text-blue-600 text-4xl mb-4" />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default ServicesCompany