import { About , Skills , Work , Testimonials , Footer ,Header } from "./container";
import Navbar from "./components/Navbar/Navbar";
import "./App.css"
function App() {
  return (
    <div className="App">
    <Navbar/>
    <Header/>
    <About/>
    <Work/>
    <Skills/>
    <Testimonials/>
    <Footer/>
    </div>
  );
}

export default App;
