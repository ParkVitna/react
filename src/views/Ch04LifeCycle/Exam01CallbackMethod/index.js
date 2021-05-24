import { useState } from "react";
import ClassType from "./ClassType";

function Exam01CallbackMethod(props) {
  const [startNum, setStartNum] = useState(0);

  const handleChange = (event) => {
    setStartNum(parseInt(event.target.value)); //입력받은 문자열을 숫자로 바꿔줌
  };

  return (
    <div className="card">
      <div className="card-header">
        Exam01CallbackMethod
      </div>
      <div className="card-body">
        <div className="mb-2">
          <input type="number" name="startNum" value={startNum} onChange={handleChange}/>
        </div>
        <ClassType startNum={startNum}/>
      </div>
    </div>
  );
}

export default Exam01CallbackMethod;