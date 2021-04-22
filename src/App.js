import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route } from "react-router-dom";
import Navbar from "./PortfolioPages/Navbar";
import Home from "./PortfolioPages/Home";
import Portfolio from "./PortfolioPages/Portfolio";
import Artwork from "./PortfolioPages/Artwork";
import Blogs from "./PortfolioPages/Blogs";
import About from "./PortfolioPages/About";
import Resume from "./PortfolioPages/Resume";
import Contact from "./PortfolioPages/Contact";
import Footer from "./PortfolioPages/Footer";



function App() {
  return (
    <div className="App">
      <div className="content-wrap">
        <Navbar />
        <Route exact path='/' component={Home} />
        <Route path='/portfolio' render={(routerProps) => <Portfolio {...routerProps} /> } />
        <Route path='/artwork' render={(routerProps) => <Artwork {...routerProps} /> } />
        <Route path='/blogs' render={(routerProps) => <Blogs {...routerProps} /> } />
        <Route path='/about' render={(routerProps) => <About {...routerProps} /> } />
        <Route path='/resume' render={(routerProps) => <Resume {...routerProps} /> } />
        <Route path='/contact' render={(routerProps) => <Contact {...routerProps} /> } />
      </div>
      <Footer />
    </div>
      
  );
}

export default App;
