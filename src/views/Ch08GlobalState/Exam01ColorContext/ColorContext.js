import React, { useState } from "react";

const ColorContext = React.createContext({
  color: "yellow",
  setColor: () => {} //setColor는 함수다 라는 표시만 해주면 됨. (함수호출 할 수 있는 형태로 사용)
  // setColor: function(color) {this.color = color;} //색을 바꾸고자 하는 것이 아님. 함수다 라는 것을 표시하는 기능으로 사용
});

export function ColorContextProvider(props) {
  const [color, setColor] = useState("yellow");
  const value = {
    color: color,
    setColor: setColor
    //생략가능
    // color,
    // setColor
  };

  return (
    <ColorContext.Provider value={value}>
      {props.children}
    </ColorContext.Provider>
  );
}

export default ColorContext;