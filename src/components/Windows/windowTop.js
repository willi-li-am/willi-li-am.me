import { useState } from "react"

export default function WindowTop(props) {
    const [hover, setHover] = useState(false)

    return(
        <div id = "topWindow" className="flex flex-row justify-between hover:cursor-grab select-none topWindow" style={{height: "30px", padding: "2.5px", paddingLeft: "15px", paddingRight: 0}}>{/** top window part with buttons and shit */}
            <div className="text-white font-semibold" style={{zIndex: 1}}>{props.title}</div>
            <div onMouseEnter={() => {setHover(true)}} onMouseLeave={() => {setHover(false)}} className="flex justify-center text-white hover:cursor-pointer" style={{zIndex: 2, width: "30px"}}>{/**triple buttons */}
                X
            </div>
            <div className="absolute hover:cursor-pointer" style={{backgroundColor: props.clicked || hover? "#DC143C" : "grey", height: "30px", width: "30px", marginTop: "-2.5px", opacity: props.clicked? "1": "70%", marginLeft: "calc(" + props.width + " - 49px)", zIndex: 1, borderBottomWidth: "2px"}}></div>
            <div className={"absolute"} style={{backgroundColor: props.clicked? "#006CFF" : "black", height: "30px", width: "calc(" + props.width + " - 34px)", marginLeft: "-15px", marginTop: "-2.5px", opacity:props.clicked? "1" : "70%", borderBottomWidth: "2px"}}></div>
        </div> 
    )
}