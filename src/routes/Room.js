import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import RoomTable from './RoomTable';
import { path } from '../utils';
import './Room.scss';

function RoomList(props) {
  const [rooms, setRooms] = React.useState([
    { id: 1, status: 'waiting', player1: 'John', player2: '' },
    { id: 2, status: 'start', player1: 'Mary', player2: 'Peter' },
    { id: 3, status: 'waiting', player1: 'Alice', player2: '' },
    { id: 4, status: 'waiting', player1: '', player2: '' },
  ]);

  const handleRoomClick = (room) => {
    if (room.status === 'waiting') {
      // Chuyển đến trang chơi game
      if (!props.isLoggedIn) {
        props.history.push(path.LOGIN);
      } else {
        props.history.push(path.HOME);
      }
    }
  };

  return (
    // <div class="background">
    //   <div>
    //   <h1 class="title">Room List</h1>
      
    //   </div>
      
    // </div>
    <div className='background'>
    <div className='container'>
        {/* <div className='content row'> */}
            <div className='col-12 title'>
                Room List
            </div>
            
            <div><RoomTable rooms={rooms} onRoomClick={handleRoomClick} /></div>

            
            
            
            
        {/* </div> */}
    </div>
</div>
  );
}

const mapStateToProps = (state) => ({
  isLoggedIn: state.user.isLoggedIn,
});

export default connect(mapStateToProps)(withRouter(RoomList));
