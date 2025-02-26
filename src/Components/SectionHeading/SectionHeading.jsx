const SectionHeading = ({heading , subHeading , description}) => {
    return (
        <div className="text-center mb-10">
            <h1 className="uppercase text-[#001D6C] text-[18px] font-bold">{heading}</h1>
            <h2 className="capitalize text-[30px] font-bold text-[#21272A] mb-[25px] w-2/3 mx-auto">{subHeading}</h2>
            {
                description && <p className="text-center px-20 text-[17px] text-[#21272A] ">{description}</p>
            }
        </div>
    )
}

export default SectionHeading