import Header from './views/Header';
import Home from './views/Home';
import Acerca from './views/Acerca';
import './App.css';

export default function App() {
  return (
    <div className="app">
      <Header />
      <Home />
      <Acerca />
    </div>
  );
}
