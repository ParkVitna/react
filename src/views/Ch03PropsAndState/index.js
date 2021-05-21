//교재 방식
// const Ch03PropsAndState = () => {
//   return(
//     <>
//     </>
//   );
// };

import { Route, Switch } from "react-router-dom";
import Exam01Props from "./Exam01Props";
import Exam02State from "./Exam02State";

function Ch03PropsAndState(props) {
  return(
    <div className="card">
      <div className="card-header">
        Ch03PropsAndState
      </div>
      <div className="card-body">
        <Switch>
          <Route path={`${props.match.url}/exam01`} exact component={Exam01Props}/>
          <Route path={`${props.match.url}/exam02`} exact component={Exam02State}/>
        </Switch>
      </div>
    </div>
  );
}

export default Ch03PropsAndState;