import SectionHeading from "../../Components/SectionHeading/SectionHeading"
import { FaLinkedinIn, FaTwitter, FaInstagram, FaFacebookF } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';

const Teem = () => {

    const teamMembers = [
        {
            id: 1,
            icon: FaLinkedinIn,
            text: "Malesuada facilisi libero, nam eu. Quis pellentesque tortor a elementum ut blandit sed pellentesque arcu. Malesuada in faucibus risus velit diam. Non, massa ut a arcu, fermentum, vel interdum.",
            image: "/images/members/person1.png",
            name: "John Doe",
            role: "CEO",
            linkedIn: "https://linkedin.com/in/johndoe",
            twitter: "https://twitter.com/johndoe",
            instagram: "https://instagram.com/johndoe",
            facebook: "https://facebook.com/johndoe",
        },
        {
            id: 2,
            icon: FaTwitter,
            text: "Malesuada facilisi libero, nam eu. Quis pellentesque tortor a elementum ut blandit sed pellentesque arcu. Malesuada in faucibus risus velit diam. Non, massa ut a arcu, fermentum, vel interdum.",
            image: "/images/members/person2.png",
            name: "Jane Smith",
            role: "CTO",
            linkedIn: "https://linkedin.com/in/janesmith",
            twitter: "https://twitter.com/janesmith",
            instagram: "https://instagram.com/janesmith",
            facebook: "https://facebook.com/janesmith",
        },
        {
            id: 3,
            icon: FaInstagram,
            text: "Malesuada facilisi libero, nam eu. Quis pellentesque tortor a elementum ut blandit sed pellentesque arcu. Malesuada in faucibus risus velit diam. Non, massa ut a arcu, fermentum, vel interdum.",
            image: "/images/members/person3.png",
            name: "Mark Johnson",
            role: "Designer",
            linkedIn: "https://linkedin.com/in/markjohnson",
            twitter: "https://twitter.com/markjohnson",
            instagram: "https://instagram.com/markjohnson",
            facebook: "https://facebook.com/markjohnson",
        },
        {
            id: 4,
            icon: FaFacebookF,
            text: "Malesuada facilisi libero, nam eu. Quis pellentesque tortor a elementum ut blandit sed pellentesque arcu. Malesuada in faucibus risus velit diam. Non, massa ut a arcu, fermentum, vel interdum.",
            image: "/images/members/person4.png",
            name: "Emily Carter",
            role: "Developer",
            linkedIn: "https://linkedin.com/in/emilycarter",
            twitter: "https://twitter.com/emilycarter",
            instagram: "https://instagram.com/emilycarter",
            facebook: "https://facebook.com/emilycarter",
        },
        {
            id: 1,
            icon: FaLinkedinIn,
            text: "Malesuada facilisi libero, nam eu. Quis pellentesque tortor a elementum ut blandit sed pellentesque arcu. Malesuada in faucibus risus velit diam. Non, massa ut a arcu, fermentum, vel interdum.",
            image: "/images/members/person1.png",
            name: "John Doe",
            role: "CEO",
            linkedIn: "https://linkedin.com/in/johndoe",
            twitter: "https://twitter.com/johndoe",
            instagram: "https://instagram.com/johndoe",
            facebook: "https://facebook.com/johndoe",
        },
        {
            id: 2,
            icon: FaTwitter,
            text: "Malesuada facilisi libero, nam eu. Quis pellentesque tortor a elementum ut blandit sed pellentesque arcu. Malesuada in faucibus risus velit diam. Non, massa ut a arcu, fermentum, vel interdum.",
            image: "/images/members/person2.png",
            name: "Jane Smith",
            role: "CTO",
            linkedIn: "https://linkedin.com/in/janesmith",
            twitter: "https://twitter.com/janesmith",
            instagram: "https://instagram.com/janesmith",
            facebook: "https://facebook.com/janesmith",
        },
        {
            id: 3,
            icon: FaInstagram,
            text: "Malesuada facilisi libero, nam eu. Quis pellentesque tortor a elementum ut blandit sed pellentesque arcu. Malesuada in faucibus risus velit diam. Non, massa ut a arcu, fermentum, vel interdum.",
            image: "/images/members/person3.png",
            name: "Mark Johnson",
            role: "Designer",
            linkedIn: "https://linkedin.com/in/markjohnson",
            twitter: "https://twitter.com/markjohnson",
            instagram: "https://instagram.com/markjohnson",
            facebook: "https://facebook.com/markjohnson",
        },
        {
            id: 4,
            icon: FaFacebookF,
            text: "Malesuada facilisi libero, nam eu. Quis pellentesque tortor a elementum ut blandit sed pellentesque arcu. Malesuada in faucibus risus velit diam. Non, massa ut a arcu, fermentum, vel interdum.",
            image: "/images/members/person4.png",
            name: "Emily Carter",
            role: "Developer",
            linkedIn: "https://linkedin.com/in/emilycarter",
            twitter: "https://twitter.com/emilycarter",
            instagram: "https://instagram.com/emilycarter",
            facebook: "https://facebook.com/emilycarter",
        },
    ];

    return (
        <div className="max-w-screen-2xl mx-auto container py-[40px] bg-[#F2F4F8]">
            <SectionHeading heading={"Teem"} subHeading={"Meet our Experts"} />
            {/* Teem Member card */}
            <div>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper"
                    breakpoints={{
                        320: { // Small phones
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        480: { // Large phones
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        768: { // Tablets
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        1024: { // Small laptops
                            slidesPerView: 4,
                            spaceBetween: 30,
                        }
                    }}
                >
                    <div className="flex items-center justify-center">
                        {
                            teamMembers.map((item, idx) => {
                                return (
                                    <SwiperSlide key={idx}>
                                        <div className="bg-white shadow-lg flex items-center justify-center flex-col">
                                            <img className="w-full h-[300px] object-cover" src={item.image} title={item.name} alt="" />
                                            {/* Content */}
                                            <div className="w-64 p-6 text-center">
                                                <h2 className="text-xl font-semibold text-gray-800">{item.name}</h2>
                                                <p className="text-sm text-gray-500 mt-1">{item.role}</p>

                                                {/* Social Icons */}
                                                <div className="flex justify-center space-x-4 mt-4 text-blue-500 text-[22px]">
                                                    <a className="text-blue-500 text-[22px]" href={item.linkedIn}><FaLinkedinIn /></a>
                                                    <a className="text-blue-500 text-[22px]" href={item.twitter}><FaTwitter /></a>
                                                    <a className="text-blue-500 text-[22px]" href={item.instagram}><FaInstagram /></a>
                                                    <a className="text-blue-500 text-[22px]" href={item.facebook}><FaFacebookF /></a>
                                                </div>

                                                {/* Contact Button */}
                                                <button className="mt-6 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600">
                                                    <a className="text-white" href={item.facebook}>Contact {item.name}</a>
                                                </button>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </div>
                </Swiper>
            </div>
        </div>
    )
}

export default Teem