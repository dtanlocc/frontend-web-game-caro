import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import caro from '../../src/assets/images/caro.png'
import './Home.scss';
class Home extends Component {

    render() {
        // const { isLoggedIn } = this.props;
        // let linkToRedirect = isLoggedIn ? '/room' : '/login';

        return (
            <div className="homepage">
                <div className="homepage__image-container">
                    <img className="homepage__image" src={caro} alt="Caro" />
                </div>
                <div className="homepage__description">
                    <h1>Chào mừng bạn đến với trang chủ của trò chơi Caro</h1>
                    <p>
                        Trò chơi Caro là một trò chơi dân gian phổ biến ở Việt Nam và nhiều
                        quốc gia khác. Trò chơi này thường được chơi trên một bảng vuông với
                        các ô vuông. Hai người chơi sẽ lần lượt đánh dấu vào các ô vuông để
                        tạo thành một hàng ngang, dọc hoặc chéo liên tiếp.
                    </p>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
