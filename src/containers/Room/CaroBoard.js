// import React from 'react';
import './CaroBoard.scss';
import { connect } from 'react-redux';
// import { Redirect } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
// import oImg from 
import { useState } from 'react';
// import BoardImage from '../../assets/images/background.png';
import XImage from '../../assets/images/X_modified-100×100-red.png';
import { path } from '../../utils';
import OImage from '../../assets/images/O_modified-100×100-blue.png';
// import io from 'socket.io-client';
import React, { useEffect ,useRef } from 'react';
import { update_board, make_move, reset_room } from '../../store/actions/userActions';

// import { useDispatch } from 'react-redux';

function CaroBoard(props) {
  const [socket, setSocket] = useState(null);
  const [currentPlayer, setCurrentPlayer] = useState(null);
  const [board, setBoard] = useState(Array(16).fill(Array(16).fill(null)));
  const [winner, setWinner] = useState(null);
  const room_id = localStorage.getItem('roomId');
  const resetRoomRef = useRef();
  console.log('board: ',board)
  useEffect(() => {
    resetRoomRef.current = props.reset_room;

    const handleBeforeUnload = () => {
      resetRoomRef.current(room_id);
    };
    
    window.addEventListener('beforeunload', handleBeforeUnload);  // Thêm sự kiện nghe cho trình duyệt

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);  // Loại bỏ sự kiện khi component unmounts
    };
  }, [props, room_id]);

  const fetchBoard = React.useCallback(async () => {
    try {
      const boardData = await props.update_board(room_id);
      
        const boardArray = JSON.parse(boardData.board);
        setBoard(boardArray);
        setWinner(boardData.winner);
      
    } catch (error) {
      console.error(error);
    }
  }, [props]);
  
  React.useEffect(() => {
    fetchBoard();
  }, [fetchBoard]);

  function handleClick(row, col) {
    
    if (board[row][col] === null || board[row][col] === 0) {
      const move_type=props.make_move(room_id, row, col)
    }
    props.update_board(room_id)
    .then(boardData => {
      
      if (boardData && boardData.board) {
        const boardArray = JSON.parse(boardData.board.replace(/'/g, '"'));
        setBoard(boardArray);
      }
      
      })
  }


  function renderCell(row, col) {
    // update_board();
    // props.update_board(room_id)
    const cellValue = board[row][col];
    let cellImage = null;

    if (cellValue === 'X') {
      cellImage = <img src={XImage} alt="X" />;
      // setCurrentPlayer("0");
    } else if (cellValue === 'O') {
      cellImage = <img src={OImage} alt="O" />;
      // setCurrentPlayer("X");
    }
    
    return (

      <div
        key={`${row},${col}`}
        className="cell"
        onClick={() => handleClick(row, col)}
        style={{ backgroundColor: cellValue ? 'transparent' : 'white' }}
      >
        {cellImage}
      </div>
      
    );
  }

  function renderBoard() {
    props.update_board(room_id)
    .then(boardData => {
      
      if (boardData && boardData.board) {
        const boardArray = JSON.parse(boardData.board.replace(/'/g, '"'));
        setBoard(boardArray);
      }
      if (boardData && boardData.winner !== null){
        props.reset_room(room_id);
        alert(`Người chơi có id ${boardData.winner} đã chiến thắng!`);
        window.location.href=path.ROOM;
      }
      
      })
    return (
      <div className="board">
        {board.map((row, i) => (
          <div key={`row${i}`} className="row">
            {row.map((col, j) => renderCell(i, j))}
          </div>
        ))}
      </div>
    );
    // console.log(board)
  }

  return (
    <div className='board-background'>
        <div className='board-container'>
            <div className='board-content row'>
                <div className='col-12 text-board'>
                    Game Caro
                </div>
                <div>
                {renderBoard()}
                </div>          
            </div>
        </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  isLoggedIn: state.user.isLoggedIn,
});

export default connect(mapStateToProps,{update_board,make_move,reset_room})(withRouter(CaroBoard));
