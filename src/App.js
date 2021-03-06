import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import Header from './AllComponants/HeaderFile/Header';
import AboutUs from './AllComponants/AboutUsFile/AboutUs';
import Expertises from './AllComponants/ExpertisesFile/Expertises';
import PortFolio from './AllComponants/PortfolioFile/PortFolio';
import AboutMe from './AllComponants/TestomolialsFile/AboutMe';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import ContactUs from './AllComponants/ContactUsFile/ContactUs';
import Footer from './AllComponants/FooterFile/Footer';


function App() {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])
  return (
    <div className="App">
      <Header></Header>
      <AboutUs></AboutUs>
      <Expertises></Expertises>
      <PortFolio></PortFolio>
      <AboutMe></AboutMe>
      <ContactUs></ContactUs>
      <Footer></Footer>
    </div>
  );
}

export default App;
