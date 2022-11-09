import './App.css';
import About from './components/about';
import Application from "./components/application";
import Certificates from "./components/certificates";
import Description from "./components/description";
import Contacts from "./components/contacts";
import Navbar from"./components/navbar";
import Reviews from"./components/reviews";
import Services from "./components/services";

function App() {
  return (
    <div>
      <Navbar />
      <Description />
      <About />
      <Services />
      <Reviews />
      <Certificates />
      <Application/>
      <Contacts />
    </div>
  );
}

export default App;
