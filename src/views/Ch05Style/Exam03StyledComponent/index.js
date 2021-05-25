import Box from "./Box";
import Button from "./Button";

function Exam03StyledComponent(props) {
  return (
    <div className="card">
      <div className="card-header">
        Exam03StyledComponent
      </div>
      <div className="card-body">
        <Box>
          Box 컴포넌트 입니다.
          <Button>버튼1</Button>
          <Button inverted={true}>버튼2</Button>
        </Box>
      </div>
    </div>
  );
}

export default Exam03StyledComponent;