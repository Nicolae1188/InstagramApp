import React, { Component } from "react";
import "./AvatarSmall.css";
import Username from "./Username"

const AvatarSmall = () => {
    
    return(
        <div className="Post-user-avatar">
            <img src="https://scontent-lht6-1.cdninstagram.com/vp/e2c94cacf60c6511b2cbe1a99999eb28/5DA1F964/t51.2885-19/s320x320/14596696_1806049626330886_8739327968465125376_a.jpg?_nc_ht=scontent-lht6-1.cdninstagram.com" alt="Chris" />
            <Username />
        </div>
    )
}

export default AvatarSmall;