import './App.css';
import MainPage from './components/MainPage';
import Contact from './components/Contact';
import About from './components/About';
import Project from './components/Project'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path = "/" element = {<MainPage/>}/>
      <Route path = "/contact" element = {<Contact/>}/>
      <Route path = "/about" element = {<About/>}/>
      <Route path = "/projects" element = {<Project/>}/>


    </Routes>
    </BrowserRouter>
  );
}

export default App;
