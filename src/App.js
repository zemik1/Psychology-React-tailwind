import '../src/index.css'
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import MainBody from "./components/MainBody";
import Footer from "./components/Footer";

function App() {
    return (
        <div>
            <NavBar/>
            <Hero/>
            <MainBody/>
            <Footer/>
        </div>
    );
}

export default App;
