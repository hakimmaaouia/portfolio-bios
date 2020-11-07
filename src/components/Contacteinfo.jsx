import React from "react"
import style from "./styles/Contacteinfo.module.scss"

const Contacteinfo  = () => {
    
    return(
<div className={style.container}>
<div>@ :<span><a>Hakimmaaouia@gmail.com</a></span></div>

<div>Facebook :<span ><a href={"https://www.facebook.com/hakim.maaouia.1"} >/hakim.maaouia.1</a></span></div>
<div>Linkedin :<span><a href={"http://gg.gg/g3n68"}>gg.gg/g3n68</a></span></div>
<div>Tell :<span><a>(+216) 29554915</a></span></div>
</div>
    );
}
export default Contacteinfo ;