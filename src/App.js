import React from "react";
import Block from "./components/Block";
import Num from "./components/Num";
const style = [
  {
      text:'',
      color:'blue',
      size:200,
  }
]
const App = () => {
    return(
      <>
          <Block
            text={style[0].text}
            color={style[0].color}
            size={style[0].size}
            
          />
          <Num/>
          
          
          
      </>             
      
    )    
}
export default App;