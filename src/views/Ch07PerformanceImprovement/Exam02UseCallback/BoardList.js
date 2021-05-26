import { useCallback, useMemo, useState } from "react";
import BoardListItem from "./BoardListItem";

function getBoards() {
  const boards = [];
  for(var i=1000; i>=1; i--) {
    boards.push({bno:i, btitle:"제목"+i});
  }
  return boards;
}

function BoardList(props) {
  const [btitle, setBtitle] = useState("");
  const [boards, setBoards] = useState(getBoards);
  const [bno, setBno] = useState(1001);

  // const getLength = () => {
  //   console.log("getLength() 실행");
  //   return boards.length;
  // };

  const getLength = useMemo(() => {
    console.log("getLength() 실행");
    return boards.length;
  }, [boards]); //boards가 변경되었을 때만 실행

  //함수형 컴포넌트가 재실행 될때마다 함수가 같이 재실행되어서 state가 변경됨

  const handleBtitleChange = useCallback((event) => {
    setBtitle(event.target.value);
  }, []); //props, state가 사용되지 않음

  const addBoard = useCallback((event) => {
    const newBoard = {bno, btitle};
    const newBoards = boards.concat(newBoard);
    newBoards.sort((a, b) => {return b.bno - a.bno});
    setBoards(newBoards);
    setBno(bno + 1);
    setBtitle("");
  }, [bno, btitle, boards]); //bno, btitle, boards의 상태가 사용됨 ~> props이 바뀔 때는 선언될 필요X

  const changeBoard = useCallback((bno) => {
    const newBoards = boards.map(board => { 
      if(board.bno === bno) {
        const newBoard = {...board, btitle:board.btitle + "(변경)"};
        return newBoard;
      } else {
        return board;
      }
    });
    setBoards(newBoards); //하나의 board만 바꾸더라도 상태(boards) 전체를 새로운 상태로 제공하면서 바꿔야함
  }, [boards]); //bno는 매개값(state 아님)

  const removeBoard = useCallback((bno) => {
    const newBoards = boards.filter(board => board.bno !== bno);
    setBoards(newBoards);
  }, [boards]);

  return (
    <div className="card">
      <div className="card-header">
        BoardList
      </div>
      <div className="card-body">
        <div>
          <span className="mr-2">게시물 수:</span> 
          {/* <span className="text-danger">{getLength()}</span> */}
          <span className="text-danger">{getLength}</span>

          <div className="d-flex align-items-center mt-2 mb-3">
            <span className="mr-2">제목:</span>
            <input type="text" value={btitle} onChange={handleBtitleChange}/>
            <button className="btn btn-info btn-sm ml-3" onClick={addBoard}>추가</button>
          </div>
        </div>

        <div className="d-flex bg-info">
          <span className="border" style={{width:"80px"}}>번호</span>
          <span className="border flex-fill">제목</span>
        </div>

        {boards.map(board => {
          return (
            <BoardListItem key={board.bno} board={board} changeBoard={changeBoard} removeBoard={removeBoard}/>
          );
        })}


      </div>
    </div>
  );
}

export default BoardList;