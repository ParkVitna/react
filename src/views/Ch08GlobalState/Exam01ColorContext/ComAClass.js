import React from "react";
import ColorContext from "./ColorContext";
import ComBFun from "./ComBFun";

class ComAClass extends React.Component {
  //정적 속성
  static contextType = ColorContext; //static contextType 바꾸면 X, 밑에 this.context 가 참조하는 것

  //생성자
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = (event) => {
    this.context.setColor("red");
  };

  //인스턴스 메소드
  render() {
    return(
      <div className="card">
        <div className="card-header">
          ComAClass
        </div>
        <div className="card-body">
          <button className="btn btn-info btn-sm mb-3" onClick={this.handleChange}>색깔 변경</button>
          <div style={{backgroundColor:this.context.color}}>
            내용
          </div>

          {/* 제일 가까운 provider를 찾기 때문에 ComAClass와 같은 provider 사용, 따라서 색깔(context) 바뀜 */}
          <ComBFun/>
        </div>
      </div>
    );
  }
}

export default ComAClass;