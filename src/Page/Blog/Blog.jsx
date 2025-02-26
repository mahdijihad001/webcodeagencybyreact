import SectionHeading from "../../Components/SectionHeading/SectionHeading"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';

const Blog = () => {

    const blogs = [
        {
            id: 1,
            image: "/images/blogs/blog1.png",
            category: "Technology",
            title: "How AI is Shaping the Future of Web Development",
            description:
                "Discover how artificial intelligence is transforming the way we build and design websites.",
            authorImage: "/images/authors/author1.png",
            authorName: "John Doe",
            authorRole: "Tech Blogger",
        },
        {
            id: 2,
            image: "/images/blogs/blog2.png",
            category: "Design",
            title: "10 Tips for Creating Stunning UI/UX Designs",
            description:
                "Learn the secrets to designing user interfaces that captivate and convert users.",
            authorImage: "/images/authors/author2.png",
            authorName: "Jane Smith",
            authorRole: "UX Designer",
        },
        {
            id: 3,
            image: "/images/blogs/blog3.png",
            category: "Development",
            title: "Understanding JavaScript Closures in Depth",
            description:
                "A comprehensive guide to one of the most powerful concepts in JavaScript.",
            authorImage: "/images/authors/author3.png",
            authorName: "Mark Johnson",
            authorRole: "Frontend Developer",
        },
        {
            id: 4,
            image: "/images/blogs/blog4.png",
            category: "Business",
            title: "Why Digital Transformation is Essential for Success",
            description:
                "Explore how businesses can thrive by adopting digital transformation strategies.",
            authorImage: "/images/authors/author4.png",
            authorName: "Emily Carter",
            authorRole: "Business Analyst",
        },
        {
            id: 1,
            image: "/images/blogs/blog1.png",
            category: "Technology",
            title: "How AI is Shaping the Future of Web Development",
            description:
                "Discover how artificial intelligence is transforming the way we build and design websites.",
            authorImage: "/images/authors/author1.png",
            authorName: "John Doe",
            authorRole: "Tech Blogger",
        },
        {
            id: 2,
            image: "/images/blogs/blog2.png",
            category: "Design",
            title: "10 Tips for Creating Stunning UI/UX Designs",
            description:
                "Learn the secrets to designing user interfaces that captivate and convert users.",
            authorImage: "/images/authors/author2.png",
            authorName: "Jane Smith",
            authorRole: "UX Designer",
        },
        {
            id: 3,
            image: "/images/blogs/blog3.png",
            category: "Development",
            title: "Understanding JavaScript Closures in Depth",
            description:
                "A comprehensive guide to one of the most powerful concepts in JavaScript.",
            authorImage: "/images/authors/author3.png",
            authorName: "Mark Johnson",
            authorRole: "Frontend Developer",
        },
        {
            id: 4,
            image: "/images/blogs/blog4.png",
            category: "Business",
            title: "Why Digital Transformation is Essential for Success",
            description:
                "Explore how businesses can thrive by adopting digital transformation strategies.",
            authorImage: "/images/authors/author4.png",
            authorName: "Emily Carter",
            authorRole: "Business Analyst",
        },
    ];

    return (
        <div className="sectionContainer bg-white max-sm:px-5">
            <SectionHeading heading={"From Our Blog"} subHeading={"Latest Articles and Insights"} />
            {/* Blog Card */}
            <div className="">
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        480: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 30,
                        }
                    }}
                >
                    <div>
                        {
                            blogs.map((item, idx) => (
                                <SwiperSlide key={idx}>
                                    <div className="mb-[60px] bg-white shadow-lg overflow-hidden pb-5">
                                        <img src={item.image} title={item.title} className="w-full h-48 object-cover hover:scale-110 transition transform duration-500" alt="" />
                                        <div className="p-4">
                                            <p className="text-sm text-gray-500">{item.category}</p>
                                            <h2 className="text-lg font-semibold mt-2">{item.title}</h2>
                                            <p className="text-sm text-gray-700 mt-2">{item.description}</p>
                                            <div className="flex items-center mt-4">
                                                <img
                                                    src={item.authorImage}
                                                    alt={item.authorName}
                                                    className="w-10 h-10 rounded-full mr-3 hover:scale-110 transition transform duration-300"
                                                />
                                                <div>
                                                    <p className="text-sm font-medium">{item.authorName}</p>
                                                    <p className="text-xs text-gray-500">{item.authorRole}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                        {/* Blog  */}
                        <div>

                        </div>
                    </div>
                </Swiper>
            </div>
        </div>
    )
}

export default Blog