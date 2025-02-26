import SectionHeading from "../../Components/SectionHeading/SectionHeading"
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper React components
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import { FaLinkedinIn, FaTwitter, FaInstagram, FaFacebookF } from "react-icons/fa";

const Testmonial = () => {

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
  ];

  return (
    <div className="sectionContainer bg-colorBg">
      <SectionHeading heading={"Testimonials"} subHeading={"What our clints say"} />
      {/* Testmonial Slider */}
      <>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
          breakpoints={{
            320: { // Small phones
              slidesPerView: 1,
              spaceBetween: 10,
            },
            480: { // Large phones
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: { // Tablets
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: { // Small laptops
              slidesPerView: 3,
              spaceBetween: 30,
            }
          }}
        >
          {
            teamMembers.map((item, idx) => (
              <SwiperSlide key={idx}>
                <div className="py-10 px-4 flex flex-col items-center justify-center">
                  <div className="flex items-center justify-center mb-[40px]">
                    <item.icon className="text-blue-600 text-6xl" />
                  </div>
                  <p className="text-[#697077] text-center text-[18px] mb-5">{item.text}</p>
                  <img className="w-[80px] h-[80px] rounded-full mb-3" src={item.image} alt="" />
                  <p className="font-bold text-[#21272A] text-xl mb-2">{item.name}</p>
                  <p className="font-light font-roboto text-[14px]">{item.role}</p>

                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </>
    </div>
  )
}

export default Testmonial