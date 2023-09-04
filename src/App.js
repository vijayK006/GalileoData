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
        
        
        
        
      </Routes>
      <ScrollToTop smooth color='#246BFD' />
    </BrowserRouter>
  );
}

export default App;
