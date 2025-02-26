import Blog from "../Blog/Blog"
import Praicing from "../Praicing/Praicing"
import Services from "../Services/Services/Services"
import ServicesCompany from "../Services/ServicesCompany/ServicesCompany"
import Teem from "../Teem/Teem"
import Testmonial from "../Testmonial/Testmonial"
import ToolsSection from "../ToolsSection/ToolsSection"
import Hero from "./Hero"
import Faqs from './../Faqs/Faqs';
import NewsLetter from "../NewsLetter/NewsLetter"

const Home = () => {
  return (
    <div>
      <Hero />
      <ToolsSection />
      <ServicesCompany />
      <Services />
      <Testmonial />
      <Blog />
      <Teem />
      <Praicing />
      <Faqs />
      <NewsLetter/>
    </div>
  )
}

export default Home