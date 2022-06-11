import Header from './views/Header';
import Home from './views/Home';
import Acerca from './views/Acerca';
import Contacto from './views/Contacto';
import './App.css';

export default function App() {
  return (
    <div className="app">
      <Header />
      <Home />
      <Acerca />
      <Contacto />
    </div>
  );
}
