import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter as Router } from 'connected-react-router';
import { history } from '../redux'
import { ToastContainer } from 'react-toastify';


import { userIsAuthenticated,  } from '../hoc/authentication';

import { path } from '../utils'

import Home from '../routes/Home';
// import Login from '../routes/Login';
import Login from './Auth/Login';
// import Register from './Auth/Register';

import Header from './Header/Header';
import Room from '../routes/Room';
import Layout from '../hoc/Layout';
import { CustomToastCloseButton } from '../components/CustomToast';
import ConfirmModal from '../components/ConfirmModal';
import Register from './Auth/Register';
import Repassword from './Auth/Repassword';
import ConfrimResetPassword from './Auth/ConfrimResetPassword';
import Activate from './Auth/Activate';

class App extends Component {

    handlePersistorState = () => {
        const { persistor } = this.props;
        let { bootstrapped } = persistor.getState();
        if (bootstrapped) {
            if (this.props.onBeforeLift) {
                Promise.resolve(this.props.onBeforeLift())
                    .then(() => this.setState({ bootstrapped: true }))
                    .catch(() => this.setState({ bootstrapped: true }));
            } else {
                this.setState({ bootstrapped: true });
            }
        }
    };

    componentDidMount() {
        this.handlePersistorState();
    }

    render() {
        return (
            <Fragment>
                
                <Router history={history}>
                <Layout>
                    <div className="main-container">
                        <ConfirmModal />
                        {/* {this.props.isLoggedIn && <Layout />} */}

                        <span className="content-container">
                            <Switch>
                                <Route path={path.HOME} exact component={(Home)} />
                                <Route path={path.LOGIN} component={(Login)} />
                                <Route path={path.REGISTER} component={(Register)} />
                                <Route path={path.REPASS} component={(Repassword)} />
                                <Route path={path.CONFIRM_REPASS} component={(ConfrimResetPassword)} />
                                <Route path={path.ACTIVATION} component={(Activate)} />
                                <Route path={path.ROOM} component={(Room)} />
                                {/* <Route path={path.USER} component={(Room)} /> */}
                            </Switch>
                            
                        </span>

                        <ToastContainer
                            className="toast-container" toastClassName="toast-item" bodyClassName="toast-item-body"
                            autoClose={false} hideProgressBar={true} pauseOnHover={false}
                            pauseOnFocusLoss={true} closeOnClick={false} draggable={false}
                            closeButton={<CustomToastCloseButton />}
                        />
                    </div>
                    </Layout>
                </Router>
                
                
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        started: state.app.started,
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);