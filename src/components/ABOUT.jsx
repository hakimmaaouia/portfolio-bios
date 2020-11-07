import React from "react"
import style from "./styles/ABOUT.module.scss"
import Contacteinfo from './Contacteinfo.jsx'
import Contacteform from './Contacteform.jsx'
const ABOUT = () => {
    return(
        <div className={style.container}>
        <h1>##Contact##</h1>
        <div className={style.grid}>
       <Contacteinfo/>
        <Contacteform />
        </div>
            </div>
    )
}




export default ABOUT