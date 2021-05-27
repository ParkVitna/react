import React from "react";
import { connect } from "react-redux";
import { createSetColorAction } from "redux/color-reducer";

class ComAClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.setColor("red");
  }

  render() {
    return(
      <div className="card">
        <div className="card-header">
          ComAClass
        </div>
        <div className="card-body">
          <button className="btn btn-info btn-sm mb-3" onClick={this.handleChange}>색깔 변경</button>
          <div style={{backgroundColor:this.props.color}}>
            내용
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    color: state.colorReducer.color
  }
};
// const mapStateToProps = (state) => ({
//   color: state.colorReducer.color
// });

const mapDispatchToProps = (dispatch) => {
  return {
    setColor: (color) => dispatch(createSetColorAction(color))
  }
};

//store ~> index.js(App)
//ComAClass에서 props으로 color( store 에 있는 state)와 setColor(Dispatch로)를 넣어준다
export default connect(mapStateToProps, mapDispatchToProps)(ComAClass); //connect가 리턴하는 함수를 다시 호출 ~> 연결해라