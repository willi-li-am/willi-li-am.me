import { click } from "@testing-library/user-event/dist/click"
import { useEffect, useRef, useState } from "react"
import Draggable from "react-draggable"

export default function Link(props){
    const [clicked, setClicked] = useState(false)
    const folderRef = useRef()
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const clickAway =  (event) => {
          if(clicked && !folderRef.current.contains(event.target)){
            setClicked(false)
          }
        }
        document.addEventListener("mousedown", clickAway)
    
        return () => {
          // Cleanup the event listener
          document.removeEventListener("mousedown", clickAway)
        }
      }, [clicked])

    const select = () => {
        setClicked(true)
    }

    useEffect(() => {
        const index = props.zIndexFolders.indexOf(props.title);
        
        if (index !== -1) {
            setIndex(index + 1);
        }
    }, [props.folderChange]);
    

    return (
        <Draggable onStart={() => {select(); props.folderSelect(props.title)}} bounds = "parent" defaultPosition={props.position}>
            <div ref={folderRef} onDoubleClick={() => {props.setDirectory(props.title)}} onClick = {() => {select(); props.folderSelect(props.title)}} className={"absolute flex flex-col justify-around items-center hover:cursor-pointer"} style={{zIndex: index, width: "80px", padding: "5px", paddingBottom: "5px", paddingTop: "10px"}}>
                <img className="z-10 object-contain " src = {props.image} style={{height: "60px", pointerEvents: "none"}}></img>
                <div className="z-10 text-center" style={{fontSize: "12px", marginTop: "2px", color: clicked? "white" : "black"}}>{props.title}</div>
                {clicked? <div className="absolute z-0" style={{borderWidth: "1px",borderColor: "#003EFF ", width: "80px", height: "calc(100%)", backgroundColor: "#006CFF ", padding: "12px", opacity: "70%"}}></div> : <div></div>}
            </div>
        </Draggable>
    )
}