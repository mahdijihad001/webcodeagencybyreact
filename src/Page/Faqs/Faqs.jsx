import SectionHeading from "../../Components/SectionHeading/SectionHeading"

const Faqs = () => {

    const faqs = [
        {
            id: 1,
            question: "Who should use the app?",
            answer: "Our app is designed for freelancers, professionals, and agencies looking to streamline their workflow, manage projects efficiently, and deliver quality results. It's ideal for anyone in need of project management and collaboration tools."
        },
        {
            id: 2,
            question: "What is included with my subscription?",
            answer: "Your subscription includes access to all the tools for project management, communication features, real-time collaboration, and unlimited access to templates, along with customer support based on your plan."
        },
        {
            id: 3,
            question: "How do I get paid?",
            answer: "Payments are processed through secure payment gateways such as PayPal, Stripe, or bank transfer. You can track your earnings directly through your account dashboard."
        },
        {
            id: 4,
            question: "Is my personal information safe?",
            answer: "Yes! We take your privacy seriously. We use encryption and secure payment methods to ensure your data and personal information are protected at all times."
        },
        {
            id: 5,
            question: "How can we get in touch?",
            answer: "You can contact us via email at support@ourapp.com, or through our live chat available on the website. Our support team is always ready to assist you with any queries you may have."
        }
    ];

    return (
        <div className="sectionContainer bg-[#F2F4F8]">
            <SectionHeading heading={"Frequently Asked questions"} subHeading={"Bibendum amet at molestie mattis."} />
            <div className="space-y-4 max-w-4xl mx-auto">
                {
                    faqs.map((item) => {
                        return (
                            <details key={item.id} className="group [&_summary::-webkit-details-marker]:hidden">
                                <summary
                                    className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
                                >
                                    <h2 className="font-bold text-gray-800 text-xl">{item.question}</h2>

                                    <svg
                                        className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </summary>

                                <p className="mt-4 px-4 leading-relaxed text-gray-400 text-[17px]">
                                    {item.answer}
                                </p>
                            </details>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Faqs