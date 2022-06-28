import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './views/Header'
import Home from './views/Home'
import Acerca from './views/Acerca'
import Portafolio from './views/Portafolio'
import Contacto from './views/Contacto'
import Footer from './views/Footer'
import Favicon from 'react-favicon';
import logo from './assets/favicon.ico';
import './App.css'

export default function App() {
  return (
    <div className="app">
      <Favicon url={logo}/>
      <Header />
      <Home />
      <Acerca />
      {/*<Portafolio />*/}
      <Contacto />
      <Footer />
    </div>
  );
}
