import { FaLongArrowAltRight } from "react-icons/fa"
import HeroImage from "../../assets/banner.png"
import { MdOutlinePlayCircleOutline } from "react-icons/md"
import { useState } from "react"
import { IoClose } from "react-icons/io5"

const Hero = () => {

    const [modal, setModal] = useState(false);

    const openModal = () => {
        setModal(true);
    };

    const closeModal = () => {
        setModal(false);
    }

    const HeroContent = {
        title: "Creative Web Design For Businesses",
        description: "Unlock your design skills to create beautiful websites and apps with a poweful and easy-to-use tool.",
        heroThumbnelImage: HeroImage,
        heroVedioLink: "https://youtu.be/BSjvvnGydrw?si=0JeEUoWVn_3Z6cjP"
    }

    return (
        <div className="bg-colorBg">
            <div className="max-w-screen-2xl container mx-auto py-20 px-5 flex flex-col lg:flex-row items-center justify-between">
                {/* Hero LeftSide Content */}
                <div className="lg:w-1/2 text-center lg:text-left">
                    <h1 className="text-4xl font-bold text-gray-700 mb-4 lg:w-1/2">{HeroContent.title}</h1>
                    <h1 className="text-lg text-[#21272A] mb-6 lg:w-2/3">{HeroContent.description}</h1>
                    <div className="flex justify-center lg:justify-start gap-6">
                        <button className="flex gap-2 items-center justify-center bg-blue-800 text-textColor rounded-md px-6 py-2 hover:bg-blue-400 transition duration-500 text-[18px]">
                            <span>Get Started</span>
                            <span className="text-textColor"><FaLongArrowAltRight /></span>
                        </button>
                        <button className="border border-blue-800 px-6 py-2 rounded-md font-bold hover:bg-blue-600 hover:text-textColor transition duration-500">Contact Us</button>
                    </div>
                </div>
                {/* Hero RightSide Content */}
                <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-end">
                    <div className="relative group">
                        <img className="rounded-xl shadow-lg" src={HeroContent.heroThumbnelImage} alt="" />
                        <button onClick={openModal} className="text-[40px] text-[#ffff] hover:text-blue-700 transition duration-500 absolute inset-0 flex items-center justify-center "><MdOutlinePlayCircleOutline /></button>
                    </div>
                </div>
                {/* Mordal */}
                {
                    modal && (
                        <div className="fixed flex items-center justify-center inset-0 bg-black bg-opacity-65 z-40 transition-all duration-300">
                            <div className="bg-white p-5 shadow-lg rounded-lg max-w-xl relative w-full">
                                <button onClick={closeModal} className="text-3xl mb-3" ><IoClose /></button>
                                    <iframe className="w-full aspect-video" width="560" height="315" src="https://www.youtube.com/embed/fdKtjnU9zuA?si=lmIeIhXao2PeAtR5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            </div>
                        </div>
                    )
                }

            </div>
        </div>
    )
}

export default Hero


// onClick={() => document.getElementById('my_modal_1').showModal()}
// <dialog id="my_modal_1" className="modal">
// <div className="modal-box">
//     <h3 className="font-bold text-lg">Hello!</h3>
//     <p className="py-4">Press ESC key or click the button below to close</p>
//     <div className="modal-action">
//         <form method="dialog">
//             {/* if there is a button in form, it will close the modal */}
//             <button className="btn">Close</button>
//         </form>
//     </div>
// </div>
// </dialog>
