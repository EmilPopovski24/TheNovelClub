import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
          <Route path='/home' element={<Home />} />
      </Routes>
      < Footer />
    </div>
  );
}

export default App;
