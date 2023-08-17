import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Draggable from 'react-draggable';
import backgroundPicture from "./assets/pictures/background.jpg"
import HomePage from './components/Introduction/homePage';
import WindowFrame from './components/Windows/windowFrame';

function App() {
  return (
    <div style = {{height: "100vh"}} className = "select-none">
      <img src = {backgroundPicture} className='fixed object-cover pointer-events-none select-none' style={{zIndex: -1, width: "100vw", height: "100vh"}}></img>
      <Navbar/>
      <div className='p-2'></div>
      <div className='p-2 mt-2 ml-10 select-text'><HomePage/></div>
      <WindowFrame height = "200px" width = "500px" title = "example.exe">
        <div>Hello</div>
      </WindowFrame>
      <WindowFrame height = "200px" width = "500px" title = "example.exe">
        <div>Hello</div>
      </WindowFrame>
      <WindowFrame height = "200px" width = "500px" title = "example.exe">
        <div>Hello</div>
      </WindowFrame>
    </div>
  );
}

export default App;
