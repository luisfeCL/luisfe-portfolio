import './App.css';
import Header from './components/header/header';
import Home from './components/home/home';
import Projects from './components/projects/projects';
import About from './components/about/about';
import Footer from './components/footer/footer';
import { Route, Routes } from 'react-router-dom';


function App() {
    return (
    <>
        <Header logo={"{ LF  }"} />
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/projects' element={<Projects />}></Route>
            <Route path='/about' element={<About />}></Route>
        </Routes>
        <Footer/>
    </>
    );
}

export default App;
