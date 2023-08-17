import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDoubleRight, faChevronRight } from "@fortawesome/free-solid-svg-icons"
import Link from "./NavLink"

export default function Navbar() {
    const NavbarOut = {top: "0", left: "0", height: "100vh", transitionDuration: ".3s", zIndex: 1}
    const NavbarIn = {top: "0", left: "-300px", height: "100vh", transitionDuration: ".3s", zIndex: 1}
    const [navbarState, setNavbarState] = useState(false)
    const [directory, setDirectory] = useState("")

    return(
        <div className="flex flex-row items-center fixed" style={navbarState? NavbarOut : NavbarIn}>
            <div className = "flex flex-col items-center bg-file text-black" style={{width: "300px", height: "100vh", boxShadow: navbarState? "1px 0px 10px black" : "1px 0px 5px black"}}>
                <div className="border-2 bg-white" style={{width: "280px", fontSize: "15px", padding: "5px", letterSpacing: "1.5px", marginTop: "12.5px"}}>C:\user\William_Li{directory == ""? "" : "\\"+directory}</div>
                <div className="" style={{height: "100%", paddingTop: "60px", width: "300px", paddingLeft: "10px", paddingRight: "10px"}}>
                    <Link setDirectory = {setDirectory} position = {{x: 35, y: 0}} image = "https://static-00.iconduck.com/assets.00/folder-icon-1024x820-za5s76tx.png" title = "Skills"></Link>
                    <Link setDirectory = {setDirectory} position = {{x: 160, y: 0}} image = "https://static-00.iconduck.com/assets.00/folder-icon-1024x820-za5s76tx.png" title = "Projects"></Link>
                    <Link setDirectory = {setDirectory} position = {{x: 35, y: 120}} image = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/1667px-PDF_file_icon.svg.png" title = "Resume"></Link>
                    <Link setDirectory = {setDirectory} position = {{x: 160, y: 120}} image = "https://upload.wikimedia.org/wikipedia/commons/d/d5/Contacts_%28iOS%29.png" title = "Contact Me"></Link>
                </div>
            </div>
            <div onClick={() => setNavbarState(!navbarState)} className= {navbarState? "flex items-center justify-end p-2 rounded-r-lg hover:cursor-pointer bg-white w-16 h-40 duration-200 hover:w-20" : "flex items-center justify-end rounded-r-lg hover:cursor-pointer bg-white w-16 h-40 duration-200 hover:w-20"} style={{zIndex: "-1", padding: navbarState? "12px" : "15px", boxShadow: "2px 2px 10px black", marginLeft: "-.75rem"}}>
                <FontAwesomeIcon style={ navbarState? {marginLeft: "10px", width: "35px", height: "35px", color: 'black', transitionDuration: ".3s",transitionTimingFunction: "cubic-bezier(0,.75,.75,1)", transform: "rotate(540deg)"} : {marginLeft: "10px", width: "35px", height: "35px", color: 'black', transitionDuration: ".3s", transitionTimingFunction: "cubic-bezier(0,.75,.75,1)"}} icon={faChevronRight} />
            </div>
        </div>
    )
}