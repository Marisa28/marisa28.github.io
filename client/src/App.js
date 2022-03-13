import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
       <Header/>
       <Navbar/>
       <main className= "main">
         <About/>
         < Projects/>
       </main>
       <Footer/>
    </div>
  );
}

export default App;
