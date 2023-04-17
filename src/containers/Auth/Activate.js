// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// // import { Link } from 'react-router-dom';
// // import { ConnectedRouter as Router } from 'connected-react-router';
// // import { path } from '../../utils'
// // import { verify } from '../../store/actions';

import './Activate.scss';
// import { verify } from '../../store/actions';



// class activate extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             uid: '',
//             token: '',
//             verified: false ,
//         }
//     }

//     render() {


//         return (
//             <div className='activate-background'>
//                 <div className='activate-container'>
//                     <div className='activate-content row'>
//                         <div className='col-12 text-activate'>
//                             Bạn đã kích hoạt tài khoản thành công...
//                         </div>
                        
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }

// const mapStateToProps = state => {
//     return {
//         language: state.app.language
//     };
// };


// export default connect(mapStateToProps)(activate);
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { verify } from '../../store/actions';

const Activate = ({ verify, match }) => {
    const [verified, setVerified] = useState(false);

    const verify_account = e => {
        const uid = match.params.uid;
        const token = match.params.token;

        verify(uid, token);
        setVerified(true);
    };

    if (verified) {
        return <Redirect to='/' />
    }
    
    return (
        //         return (
            <div className='activate-background'>
                <div className='activate-container'>
                    <div className='activate-content row'>
                        <div className='col-12 text-activate'>
                            Verify yourt email!!
                        </div>
                    <div>
                    <button
                    onClick={verify_account}
                    style={{ marginTop: '50px' }}
                    type='button'
                    className='btn btn-primary'
                >
                    Verify
                </button>
                    </div>
                        
                        
                    </div>
                </div>
            </div>
        )
                
            
    
    
};

export default connect(null, { verify })(Activate);