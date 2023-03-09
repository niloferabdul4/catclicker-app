
import './App.css'
import TopSection from "./Components/TopSection/TopSection";
import CatGallery from './Components/CatGallery/Gallery';
import Navbar from "./Components/Navbar/Navbar";

function App() {
  
  return (
    
    <div className="app_body">
      <Navbar />
      <TopSection/>
      <CatGallery />      
    </div>
  );
}

export default App;
