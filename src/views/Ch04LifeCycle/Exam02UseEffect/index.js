import { useState } from "react";
import FunType from "./FunType";

function Exam02UseEffect(props) {
  const [startNum, setStartNum] = useState(0);

  const handleChange = (event) => {
    setStartNum(parseInt(event.target.value)); //입력받은 문자열을 숫자로 바꿔줌
  };

  return (
    <div className="card">
      <div className="card-header">
        Exam02UseEffect
      </div>
      <div className="card-body">
        <div className="mb-2">
          <input type="number" name="startNum" value={startNum} onChange={handleChange}/>
        </div>
        <FunType startNum={startNum}/>
      </div>
    </div>
  );
}

export default Exam02UseEffect;