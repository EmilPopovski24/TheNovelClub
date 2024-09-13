import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { Footer } from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
          <Route path='/' element={<Home />} />
      </Routes>
      < Footer />
    </div>
  );
}

export default App;
