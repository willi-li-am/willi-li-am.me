import File from "../Windows/file"
import reactJsPicture from "../../assets/pictures/reactjs.png"
import tailwindPicture from "../../assets/pictures/tailwindCSS.jpeg"
import expressPicture from "../../assets/pictures/expressjs_logo.png"
import mongoDBPicture from "../../assets/pictures/mongodb.png"
import nodePicture from "../../assets/pictures/node.png"
import swiftUIPicture from "../../assets/pictures/swiftui.png"
import htmlPicture from "../../assets/pictures/html.png"
import cssPicture from "../../assets/pictures/css.png"
import jsPicture from "../../assets/pictures/js.png"
import tsPicture from "../../assets/pictures/ts.png"
import pyPicture from "../../assets/pictures/python.png"
import dataPicture from "../../assets/pictures/dataparse.png"
import webPicture from "../../assets/pictures/webscrape.webp"
import apiPicture from "../../assets/pictures/api.png"
import gitPicture from "../../assets/pictures/git.png"

const link = "../../assets/pictures/"

export default function Skills(props){
    return(
        <div className="">
            <File folderChange = {props.folderChange} folderSelect = {props.folderSelect} zIndexFolders = {props.zIndexFolders} position = {{x: 0, y: 0}} image = {reactJsPicture} title = "ReactJS"></File>
            <File folderChange = {props.folderChange} folderSelect = {props.folderSelect} zIndexFolders = {props.zIndexFolders} position = {{x: 90, y: 0}} image = {tailwindPicture} title = "TailwindCSS"></File>
            <File folderChange = {props.folderChange} folderSelect = {props.folderSelect} zIndexFolders = {props.zIndexFolders} position = {{x: 180, y: 0}} image = {expressPicture} title = "ExpressJS"></File>
            <File folderChange = {props.folderChange} folderSelect = {props.folderSelect} zIndexFolders = {props.zIndexFolders} position = {{x: 270, y: 0}} image = {mongoDBPicture} title = "MongoDB"></File>
            <File folderChange = {props.folderChange} folderSelect = {props.folderSelect} zIndexFolders = {props.zIndexFolders} position = {{x: 360, y: 0}} image = {nodePicture} title = "NodeJS"></File>
            <File folderChange = {props.folderChange} folderSelect = {props.folderSelect} zIndexFolders = {props.zIndexFolders} position = {{x: 450, y: 0}} image = {swiftUIPicture} title = "SwiftUI"></File>
            <File folderChange = {props.folderChange} folderSelect = {props.folderSelect} zIndexFolders = {props.zIndexFolders} position = {{x: 0, y: 120}} image = {htmlPicture} title = "HTML"></File>
            <File folderChange = {props.folderChange} folderSelect = {props.folderSelect} zIndexFolders = {props.zIndexFolders} position = {{x: 90, y: 120}} image = {cssPicture} title = "CSS"></File>
            <File folderChange = {props.folderChange} folderSelect = {props.folderSelect} zIndexFolders = {props.zIndexFolders} position = {{x: 180, y: 120}} image = {jsPicture} title = "JavaScript"></File>
            <File folderChange = {props.folderChange} folderSelect = {props.folderSelect} zIndexFolders = {props.zIndexFolders} position = {{x: 270, y: 120}} image = {tsPicture} title = "TypeScript"></File>
            <File folderChange = {props.folderChange} folderSelect = {props.folderSelect} zIndexFolders = {props.zIndexFolders} position = {{x: 360, y: 120}} image = {pyPicture} title = "Python"></File>
            <File folderChange = {props.folderChange} folderSelect = {props.folderSelect} zIndexFolders = {props.zIndexFolders} position = {{x: 0, y: 240}} image = {dataPicture} title = "Data Parsing"></File>
            <File folderChange = {props.folderChange} folderSelect = {props.folderSelect} zIndexFolders = {props.zIndexFolders} position = {{x: 90, y: 240}} image = {webPicture} title = "Web Scraping"></File>
            <File folderChange = {props.folderChange} folderSelect = {props.folderSelect} zIndexFolders = {props.zIndexFolders} position = {{x: 180, y: 240}} image = {apiPicture} title = "API Integration"></File>
            <File folderChange = {props.folderChange} folderSelect = {props.folderSelect} zIndexFolders = {props.zIndexFolders} position = {{x: 270, y: 240}} image = {gitPicture} title = "Git"></File>
        </div>
    )
}