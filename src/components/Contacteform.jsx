import React from "react"
import style from "./styles/Contacteform.module.scss"

const Contacteform  = () => {
    return(
<div className="container"><form>
<label>Contact form
</label>
<br/>
<input type="email" placeholder="Your e-mail"  ></input>
<input type="text" placeholder="Message" ></input>
<button>{"<<submit>>"}</button>

</form>
</div>
    );
}
export default Contacteform ;