import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
// import { BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <>
    <Navbar title="My Utils" />
      <TextForm title="My Utils"/>
      {/* <BrowserRouter>
      
      <Routes>
      <Route path="/" element={<TextForm title="Utils" />} />
        <Route path="/home" element={<TextForm title="My Utils"/>} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter> */}
    </>
  );
}

export default App;
