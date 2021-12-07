import React from "react";
import {getimgurimg} from './Utils.js'

export default function Avatar({person, img}){return(
    <div style={{padding:'24px'}}>
        <img
        className='avatar'
        alt={person.name}
        src={getimgurimg(img)}
        width={img.wnh}
        height={img.wnh}
        />
    </div>
)}