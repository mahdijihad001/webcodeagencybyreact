const NewsLetter = () => {
  return (
    <div className="sectionContainer bg-white text-center">
        <h1 className="text-[50px] font-bold mb-4">Stay Updated with Our Newsletter</h1>
        <p className="w-3/4 mx-auto text-[18px] text-gray-400">Subscribe to our newsletter to get the latest news, updates, and offers. Rhoncus morbi et augue nec, in id ullamcorper at sit. Condimentum sit nunc in eros scelerisque sed. Commodo in viverra nunc, ullamcorper ut. Non, amet, aliquet scelerisque nullam sagittis, pulvinar.</p>
        <div className="flex items-center justify-center gap-9 pt-10">
            <button className="bg-blue-700 hover:bg-blue-600 text-xl font-bold py-3 px-5 text-[#fff] rounded-md">Subscribe Now</button>
            <button className="outline-none border border-blue-700 text-xl font-bold py-3 px-5 text-blue-700 hover:bg-blue-700 hover:text-white rounded-md">Learn More</button>
        </div>
    </div>
  )
}

export default NewsLetter