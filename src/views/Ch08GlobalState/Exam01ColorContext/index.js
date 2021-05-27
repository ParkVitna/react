import { ColorContextProvider } from "./ColorContext";
import ComAClass from "./ComAClass";
import ComBFun from "./ComBFun";

function Exam01ColorContext(props) {
  return (
    <div className="card">
      <div className="card-header">
        Exam01ColorContext
      </div>
      <div className="card-body">
        <ColorContextProvider>
          <ComAClass/>
          <ComBFun/>
        </ColorContextProvider>

        {/* 밖에 있으면 provider 제공X 따라서 기본값만 적용, 색깔(context) 안바뀜
        <ComBFun/> */}
      </div>
    </div>
  );
}

export default Exam01ColorContext;