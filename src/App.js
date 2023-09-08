import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import CaseStudyDetails from "./pages/CaseStudyDetails";
import Contact from "./pages/Contact";
import HomeFour from "./pages/HomeFour";
import HomeOne from "./pages/HomeOne";
import HomeThree from "./pages/HomeThree";
import HomeTwo from "./pages/HomeTwo";
import Service from "./pages/Service";
import ServiceDetails from "./pages/ServiceDetails";
import Team from "./pages/Team";
import TeamDetails from "./pages/TeamDetails";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ScrollToTop from "react-scroll-to-top";
import HomeFive from "./pages/HomeFive";
import Automotive from "./pages/Automotive";
import Banking_And_Financial from "./pages/Banking_And_Financial";
import Biotech_And_Pharmaceutical from "./pages/Biotech_And_Pharmaceutical";
import Construction_Industry from "./pages/Construction_Industry";
import Education from "./pages/Education";
import Hospitality from "./pages/Hospitality";
import Information_Technology from "./pages/Information_Technology";
import Logistic_and_Distribution from "./pages/Logistic_and_Distribution";
import Manufacturing from "./pages/Manufacturing";
import Retail from "./pages/Retail";
import Real_Estate from "./pages/Real_Estate";
import Telecommunication_Company from "./pages/Telecommunication_Company";
import Travel_and_Tourism from "./pages/Travel_and_Tourism";
import Utility_And_Energy from "./pages/Utility_And_Energy";
import Data_Cleaning from "./pages/Data_Cleaning";
import Data_Appending from "./pages/Data_Appending";
import Data_Segmentation from "./pages/Data_Segmentation";
import Data_Verification from "./pages/Data_Verification";
import Reverse_Appending from "./pages/Reverse_Appending";
import Social_Media_Marketing from "./pages/Social_Media_Marketing";
import Web_Design from "./pages/Web_Design";
import RDPSC from "./pages/RDPSC";
import GDRP_Complaint from "./pages/GDRP_Complaint";
import Footer_GDRP from "./components/Footer_GDRP";
import Email_Appending from "./pages/Email_Appending";

function App() {
  useEffect(() => {
    AOS.init({
      offset: 0,
      easing: "ease",
      once: true,
    });
    AOS.refresh();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<HomeFive />} />
        <Route exact path='/index-2' element={<HomeTwo />} />
        <Route exact path='/index-3' element={<HomeThree />} />
        <Route exact path='/index-4' element={<HomeFour />} />
        <Route exact path='/index-5' element={<HomeFive />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/blog' element={<Blog />} />
        <Route exact path='/blog-details' element={<BlogDetails />} />
        <Route exact path='/case-study-details' element={<CaseStudyDetails />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='/service' element={<Service />} />
        <Route exact path='/service-details' element={<ServiceDetails />} />
        <Route exact path='/team' element={<Team />} />
        <Route exact path='/team-details' element={<TeamDetails />} />
        <Route exact path='/team-details' element={<TeamDetails />} />
        <Route exact path='/Automotive' element={<Automotive />} />
        <Route exact path='/Banking_And_Financial' element={<Banking_And_Financial />} />
        <Route exact path='/Biotech_And_Pharmaceutical' element={<Biotech_And_Pharmaceutical />} />
        <Route exact path='/Construction_Industry' element={<Construction_Industry />} />
        <Route exact path='/Education' element={<Education />} />
        <Route exact path='/Hospitality' element={<Hospitality />} />
        <Route exact path='/Information_Technology' element={<Information_Technology />} />
        <Route exact path='/Logistic_and_Distribution' element={<Logistic_and_Distribution />} />
        <Route exact path='/Manufacturing' element={<Manufacturing />} />
        <Route exact path='/Retail' element={<Retail />} />
        <Route exact path='/Real_Estate' element={<Real_Estate />} />
        <Route exact path='/Telecommunication_Company' element={<Telecommunication_Company />} />
        <Route exact path='/Travel_and_Tourism' element={<Travel_and_Tourism />} />
        <Route exact path='/Utility_And_Energy' element={<Utility_And_Energy />} />
        <Route exact path='/Data_Cleaning' element={<Data_Cleaning />} />
        <Route exact path='/Data_Appending' element={<Data_Appending />} />
        <Route exact path='/Data_Segmentation' element={<Data_Segmentation />} />
        <Route exact path='/Data_Verification' element={<Data_Verification />} />
        <Route exact path='/Reverse_Appending' element={<Reverse_Appending />} />
        <Route exact path='/Social_Media_Marketing' element={<Social_Media_Marketing />} />
        <Route exact path='/Web_Design' element={<Web_Design />} />
        <Route exact path='/RDPSC' element={<RDPSC />} />
        <Route exact path='/GDRP_Complaint' element={<GDRP_Complaint />} />
        <Route exact path='/Footer_GDRP' element={<Footer_GDRP />} />
        <Route exact path='/Email_Appending' element={<Email_Appending />} />
        
        
        
      </Routes>
      <ScrollToTop  smooth color='#246BFD' />
    </BrowserRouter>
  );
}

export default App;
