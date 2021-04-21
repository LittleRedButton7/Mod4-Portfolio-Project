import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Portfolio from "./PortfolioPages/Portfolio";
import Artwork from "./PortfolioPages/Artwork";
import Blogs from "./PortfolioPages/Blogs";
import About from "./PortfolioPages/About";
import Resume from "./PortfolioPages/Resume";
import Contact from "./PortfolioPages/Contact";



function App() {
  return (
    <div className="App">
      <Navbar />

      <Route exact path="/" component={Home} />
      <Route path='/portfolio' render={(routerProps) => <Portfolio {...routerProps} /> } />
      <Route path='/artwork' render={(routerProps) => <Artwork {...routerProps} /> } />
      <Route path='/blogs' render={(routerProps) => <Blogs {...routerProps} /> } />
      <Route path='/about' render={(routerProps) => <About {...routerProps} /> } />
      <Route path='/resume' render={(routerProps) => <Resume {...routerProps} /> } />
      <Route path='/contact' render={(routerProps) => <Contact {...routerProps} /> } />
    </div>
      
  );
}

export default App;
