 import React from "react";
 
 const UserButton = (props) => {
    return(
        <div>
            <button><a href={props.link}>{props.icon}</a>{props.nameLink}</button> 
        </div>
    )
 }

export default UserButton;