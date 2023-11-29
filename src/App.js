import '../src/index.css'
import NavBar from "./components/pages/NavBar";
import Hero from "./components/pages/Hero";
import MainBody from "./components/pages/MainBody";
import Footer from "./components/pages/Footer";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import About from "./components/pages/About";

function App() {
    return (
        <div>
            <Router>
                <NavBar/>
                <Routes>
                    <Route path='/Main' element={<Hero/>}/>
                    <Route path='/About' element={<MainBody/>}/>
                    <Route path='/Contacts' element={<About/>}/>
                    <Route path='*' element={<Hero/>}></Route>
                </Routes>
                <Footer/>
            </Router>
        </div>
    );
}

export default App;
