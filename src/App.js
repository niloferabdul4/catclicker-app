import Bottom from "./Components/Bottom/Bottom";
import './App.css'
import TopSection from "./Components/TopSection/TopSection";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="app_body">
      <Navbar />
      <TopSection/>
      <Bottom />      
    </div>
  );
}

export default App;
