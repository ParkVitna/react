import { useCallback, useMemo, useState } from "react";
import BoardListItem from "./BoardListItem";

function getBoards() {
  const boards = [];
  for(var i=5; i>=1; i--) {
    boards.push({bno:i, btitle:"제목"+i});
  }
  return boards;
}

function BoardList(props) {
  const [btitle, setBtitle] = useState("");
  const [boards, setBoards] = useState(getBoards);
  const [bno, setBno] = useState(6);

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

  //3단계 성능향상
  //상태변수(bno, btitle, boards)를 다 제거함 ~> 정적 ~> 상태변수가 바뀌었을 때 재선언될 필요 없음
  const addBoard = useCallback((argBno, argBtitle) => {
    const newBoard = { bno:argBno, btitle:argBtitle };
    setBoards(prevBoards => {
      const newBoards = prevBoards.concat(newBoard);
      newBoards.sort((a, b) => {return b.bno - a.bno});
      console.log(newBoard);
      return newBoards;
    });
    setBno(prevBno => prevBno + 1);
    setBtitle("");
  }, []); //마운트 될 때만 재선언

  //3단계 성능향상
  const changeBoard = useCallback((bno) => {
    setBoards(prevBoards => {
      const newBoards = prevBoards.map(board => {
        if(board.bno === bno) {
          const newBoard = {...board, btitle: board.btitle+ "(변경)"};
          return newBoard;
        } else {
          return board;
        }
      });
      return newBoards;
    });
  },[]);

  //3단계 성능향상
  const removeBoard = useCallback((bno) => {
    setBoards(prevBoards => {
      const newBoards = prevBoards.filter(board => board.bno !== bno);
      return newBoards;
    });
  }, []);

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
            <button className="btn btn-info btn-sm ml-3" onClick={() => addBoard(bno, btitle)}>추가</button>
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