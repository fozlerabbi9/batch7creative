import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './AllComponants/HeaderFile/Header';
import AboutUs from './AllComponants/AboutUsFile/AboutUs';
import Expertises from './AllComponants/ExpertisesFile/Expertises';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <AboutUs></AboutUs>
      <Expertises></Expertises>
      
    </div>
  );
}

export default App;
