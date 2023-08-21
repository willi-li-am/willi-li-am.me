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
      <img loading='lazy' src = {backgroundPicture} className='fixed object-cover pointer-events-none select-none' style={{zIndex: -1, width: "100vw", height: "100vh"}}></img>
      <Navbar folderChange = {folderChange} folderSelect = {folderSelect} zIndexFolders = {zIndexFolders}/>
      <WindowFrame position = {{x: 100, y: 20}} windowChange = {windowChange} zIndexWindows = {zIndexWindows} windowSelect = {windowSelect} height = "330px" width = "600px" title = "About Me">
        <AboutMe></AboutMe>
      </WindowFrame>
      <WindowFrame position = {{x: 800, y: 500}} windowChange = {windowChange} zIndexWindows = {zIndexWindows} windowSelect = {windowSelect}  height = "200px" width = "500px" title = "Projects">
        <div>Hello</div>
      </WindowFrame>
      <WindowFrame windowChange = {windowChange} zIndexWindows = {zIndexWindows} windowSelect = {windowSelect}  height = "200px" width = "500px" title = "Example.exe">
        <div>Hello</div>
      </WindowFrame>
    </div>
  );
}

export default App;
