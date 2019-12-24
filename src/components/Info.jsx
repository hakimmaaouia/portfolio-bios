import React from 'react';
import style from './styles/Info.module.scss'
const Info =() => {
   
    var obj={"list":[{"skill":"Coffee","desc":["Black hot drink1","Black hot drink2","Black hot drink3"]},{"skill":"Coffee","desc":["Black hot drink","Black hot drink","Black hot drink"]},{"skill":"Coffee","desc":["Black hot drink","Black hot drink","Black hot drink"]}]}

    const  map = obj.list.map((element,i)=><div key={i} className={style.gridcontainer}><dl><dt>{element.skill}</dt>{element.desc.map((e,j)=><dd key={j}>{e}</dd>)}</dl></div>);
var href="#"
    return(
        <div className={style.aze}>
 <div className={style.container}>
     aetatet
     <div className={style.grid}> 
     {map}
    
         </div>
         <a href={href}>teyeyeyey</a>
     </div>
    
        </div>
    )
}
export default Info