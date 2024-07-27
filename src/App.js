import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import Ebd from './pages/EBD/Ebd';
import { register } from 'swiper/element/bundle'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
register();

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Exemplo isso é para mudar para a página correta */}
          <Route path='/' element={<Home />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/projects' element={<Projects />}/>
          <Route path='/ebd' element={<Ebd />}/>
        </Routes>
      </BrowserRouter>

    </>
  );
}
export default App;
