import Draggable from "react-draggable";
import { useRef, useState, useEffect } from "react";
import WindowTop from "./windowTop";

export default function WindowFrame(props) {
    const windowRef = useRef()
    const [clicked, setClicked] = useState(false)

    useEffect(() => {
        const clickAway =  (event) => {
          if(clicked && !windowRef.current.contains(event.target)){
            setClicked(false)
          }
        }
        document.addEventListener("mousedown", clickAway)
    
        return () => {
          // Cleanup the event listener
          document.removeEventListener("mousedown", clickAway)
        }
      }, [clicked])

    return(
        <Draggable id = {props.title} handle="#topWindow" bounds = "body" onDrag={() => {setClicked(true)}}>
            <div ref={windowRef} onClick={() => {setClicked(true)}} className="absolute flex flex-col select-text" style={{zIndex: 0, width: props.width, height: props.height, boxShadow: "2px 2px 5px black", borderWidth: "2px"}}>
                <WindowTop width = {props.width} clicked = {clicked} title = {props.title}></WindowTop>
                <div className="bg-white p-2" style={{height: "calc(" + props.height + " - 30px)"}}>
                    {props.children}
                </div>
            </div>
        </Draggable>
    )
}