import React from "react";
const Block = (props) => {
    return(
      <div style={{color:props.color, fontSize:props.size}}>{props.text}</div>
    )    
}

export default Block;