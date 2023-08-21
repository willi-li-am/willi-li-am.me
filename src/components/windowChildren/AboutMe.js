import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import waterlooIcon from "../../assets/pictures/waterloo.png"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

//<img loading="lazy" className="ml-6" style={{width: "4rem", height: "4rem"}} src={waterlooIcon}></img>
export default function AboutMe(){
    return(
        <div className="ml-2 flex flex-col justify-center">
            <div className="font-semibold" style={{fontSize: "2rem"}}>Hi, I'm William Li!</div>
            <div className="flex flex-row space-x-2">
                <a className="ml-2 mt-2" href="https://github.com/willi-li-am" target="_blank"><FontAwesomeIcon style={{width: '1.5rem', height: "1.5rem"}} icon={faGithub}/></a>
                <a className="mt-2" href="https://www.linkedin.com/in/willi-li-am/" target="_blank"><FontAwesomeIcon style={{width: '1.5rem', height: "1.5rem"}} icon={faLinkedin}/></a>
            </div>
            <div className="flex flex-row items-center text-lg mt-4"><div><span className="font-semibold">Software Engineer</span> student at the <a className="text-selected font-semibold" href = "https://uwaterloo.ca/future-students/programs/software-engineering" target="_blank">University of Waterloo</a></div></div>
            <div className="ml-2 text-sm">In my free time I enjoy Rock Climbing, Weightlifting, Learning new Technologies and Making Useful or Fun Projects!</div>
            <div className="text-sm mt-10 font-semibold">*This website works like a desktop, you can drag around windows and minimize them. To open them back up use the navbar on the left.</div>
        </div>
    )
}