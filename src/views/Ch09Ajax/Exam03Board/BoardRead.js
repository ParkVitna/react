import React, { useEffect, useState } from 'react';
import qs from 'qs';
import { Link } from 'react-router-dom';
import { deleteBoard, readBoard } from 'apis/boards';

const BoardRead = (props) => {
  const bno = parseInt(props.match.params.bno);
  const queryString = qs.parse(props.location.search, {ignoreQueryPrefix: true});
  const pageNo = parseInt(queryString.pageNo);

  // 삭제 버튼 눌렀을 때 
  const handleRemove = async (event) => {
    try{  
      await deleteBoard(bno);
      props.history.goBack();
    }catch(error){
      console.log(error);
      // 에러 페이지로 넘기는거는 
      // history.push('/error');
    }
  };

  const [board, setBoard] = useState({});
  useEffect(() => {
    const work = async () => {
      try{
        const response = await readBoard(bno);
        setBoard(response.data);
      }catch(error){
        console.log(error);
      }
    };
    work();
  }, [bno]); //bno만 바꼈을 때 재실행 but, bno는 바뀔 리 없음 // 조횟수 1번만 ,, 이 함수가 한번만 실행됨 

  // REST API - 비동기 호출 
  /*
   * 비동기로 디비 작업하니까, 처음 랜더링될때는 보드 내용이 안들어가니까 
   * board에 디비 내용 들어오면 
   * 다시 리랜더링될수 있또록 보드를 상태로 만들어주는 것이다. 
  */ 

  return (
    <div className="card">
    <div className="card-header">
      BoardRead
    </div>
    <div className="card-body">
      {board &&
        <>
          <div>
            <p>bno: {board.bno}</p>
            <p>btitle: {board.btitle}</p>
            <p>bcontent: {board.bcontent}</p>
            <p>bwriter: {board.bwriter}</p>
            <p>bdate: {new Date(board.bdate).toLocaleDateString()}</p>
            <p>bhitcount: {board.bhitcount}</p>
            <p>battachoname: {board.battachoname}</p>
            <p>battachsname: {board.battachsname}</p>
            <p>battachtype: {board.battachtype}</p>
          </div>
          <div>
            <Link to={"/ch09/exam03?pageNo=" + pageNo} className="btn btn-info btn-sm mr-2">목록</Link>
            <Link to={`/ch09/exam03/${board.bno}/updateForm`} className="btn btn-info btn-sm mr-2">수정</Link>
            <button className="btn btn-info btn-sm mr-2" onClick={handleRemove}>삭제</button>
          </div>
        </>
      }
    </div>
  </div>
    
  );
};

export default BoardRead;