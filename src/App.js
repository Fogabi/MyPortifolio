import About from './components/about/About'
import "./App.css";
import Contact from "./components/contact/Contact";
import Experiences from "./components/experiences/Experiences";
import Home from "./components/home/Home";
import Projects from "./components/projects/Projects";
import Service from "./components/services/Service";

function App() {
  return (
    <div>
      <Home />
      <About />
      <Service />
      <Projects />
      <Experiences />
      <Contact />
      <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"></link>
    </div>
  );
}

export default App;
