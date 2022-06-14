import Header from './views/Header';
import Home from './views/Home';
import Acerca from './views/Acerca';
import Contacto from './views/Contacto';
import Footer from './views/Footer';
import './App.css';

export default function App() {
  return (
    <div className="app">
      <Header />
      <Home />
      <div class="section-separator"></div>
      <Acerca />
      <div class="section-separator"></div>
      <Contacto />
      <Footer />
    </div>
  );
}
