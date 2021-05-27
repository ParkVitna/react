import { useDispatch, useSelector, useStore} from "react-redux";
import { createSetColorAction } from "redux/color-reducer";

function ComBFun(props) {
  // const color = useSelector((state) => {
  //   return state.colorReducer.color
  // });
  const color = useSelector((state) =>  state.colorReducer.color);
  const dispatch = useDispatch();

  //store 바로 얻기
  // const store = useStore();
  // const color = store.state.colorReducer.color;
  // const dispatch = store.dispatch;

  const handleChange = (event) => {
    dispatch(createSetColorAction("green")); //공동사용되기 편하도록 함수(createSetColorAction ~> color-reducer.js)로 만들어서 사용
    //dispatch({type:"color/setColor", color:"green"}); 이렇게 상태통보(action객체) 할 수도 있지만,
  };

  return (
    <div className="card">
      <div className="card-header">
        ComBFun
      </div>
      <div className="card-body">
        <button className="btn btn-info btn-sm mb-3" onClick={handleChange}>색깔 변경</button>
        <div style={{backgroundColor:color}}>
          내용
        </div>
      </div>
    </div>
  );
}

export default ComBFun;