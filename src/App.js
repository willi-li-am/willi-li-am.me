import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Draggable from 'react-draggable';
import backgroundPicture from "./assets/pictures/background.jpg"
import HomePage from './components/Introduction/homePage';
import WindowFrame from './components/Windows/windowFrame';
import { useEffect, useState } from 'react';
import { Rnd } from 'react-rnd';
import AboutMe from './components/windowChildren/AboutMe';

function App() {
  const [zIndexWindows, setZIndexWindows] = useState([])
  const [zIndexFolders, setZIndexFolders] = useState([])
  const [folderChange, setFolderChange] = useState(false)
  const [windowChange, setWindowChange] = useState(false)

  const [mousePos, setMousePos] = useState({});

  const windowSize = [window.innerWidth, window.innerHeight]

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };

    setInterval(()=>{window.addEventListener('mousemove', handleMouseMove)}, 1000)

    return () => {
      window.removeEventListener(
        'mousemove',
        handleMouseMove
      );
    };
  }, []);

  const indexSelect = (stateArr, title, setFunction) => {
    let arr = stateArr

    const index = arr.indexOf(title);

    if (index !== -1) {
      arr.splice(index, 1);
      arr.push(title);
    }
    else {
      arr.push(title)
    }

    setFunction(arr)
  }

  const folderSelect = (title) => {
    indexSelect(zIndexFolders, title, setZIndexFolders)
    setFolderChange(!folderChange)
  }

  const windowSelect = (title) => {
    indexSelect(zIndexWindows, title, setZIndexWindows)
    setWindowChange(!windowChange)
  }

  return (
    <div style = {{height: "100vh"}} className = "select-none">
      <div className='fixed object-cover pointer-events-none select-none duration-1000' style={{zIndex: -1, width: "100vw", height: "100vh", backgroundImage: "url(" + backgroundPicture+")", backgroundSize: "120vw 120vh", backgroundPositionX: (mousePos["x"] * 20/windowSize[0]) + "%", backgroundPositionY: (mousePos["y"] * 20/windowSize[1])+"%", transitionTimingFunction: "cubic-bezier(0,.25,.6,1)"}}></div>
      <Navbar folderChange = {folderChange} folderSelect = {folderSelect} zIndexFolders = {zIndexFolders}/>
      <WindowFrame position = {{x: 100, y: 20}} windowChange = {windowChange} zIndexWindows = {zIndexWindows} windowSelect = {windowSelect} height = "330px" width = "600px" title = "About Me">
        <AboutMe></AboutMe>
      </WindowFrame>
      <WindowFrame windowChange = {windowChange} zIndexWindows = {zIndexWindows} windowSelect = {windowSelect}  height = "200px" width = "500px" title = "Example.exe">

      </WindowFrame>
    </div>
  );
}

export default App;
