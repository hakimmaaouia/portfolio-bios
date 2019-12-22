import React from 'react';
import style from "./styles/Nav.module.scss"

const Nav = (e) => {
    let hrefLink = '#'
    
    return(
        <div className={style.navcontainer}>
     
      <ul className={style.stul}>
          <li>Hakim Design x86</li>
          <li  >etytey</li>
          <li  >tyey</li>
          <li  >teyet</li>
          <li  > 
          jfjhfj
           <div className={style.dropdowncontent}>
     
<a href={hrefLink}>zryzry</a>
<a href={hrefLink} > zryzry</a>
<a href={hrefLink} >zryzry</a>
<hr></hr>
<a href={hrefLink} >zryzry</a>

         </div> 

          </li>
      </ul>

            </div>
    )
}
export default Nav ;