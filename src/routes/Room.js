import React from 'react';
import { connect } from 'react-redux';
// import { Redirect } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import RoomTable from './RoomTable';
import { path } from '../utils';
import './Room.scss';
import { show_list_room } from '../store/actions/userActions';
import { useSelector } from "react-redux";

function RoomList(props) {
  const [rooms, setRooms] = React.useState([
    // { id: 1, status: 'waiting', player1: 'John', player2: '' },
    // { id: 2, status: 'start', player1: 'Mary', player2: 'Peter' },
    // { id: 3, status: 'waiting', player1: 'Alice', player2: '' },
    // { id: 4, status: 'waiting', player1: '', player2: '' },
  ]);
  
  React.useEffect(() => {
    async function fetchRooms() {
      try {
        const roomData = await props.show_list_room()
        // console.log(roomData);
        const tempRooms = roomData.map(room => ({
          id: room.id,
          status: room.status,
          player1: room.user1,
          player2: room.user2
        }));
        setRooms(tempRooms);
      } catch (error) {
        console.error(error);
      }
    }
    fetchRooms();
  }, [props]);
  


  const handleRoomClick = (room) => {
    if (room.status === 'waiting') {
      // Chuyển đến trang chơi game
      if (!props.isLoggedIn) {
        props.history.push(path.LOGIN);
        props.show_list_room()
      } else {
        props.history.push(path.HOME);
        props.show_list_room()
      }
    }
  };

  return (
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

export default connect(mapStateToProps,{show_list_room})(withRouter(RoomList));
