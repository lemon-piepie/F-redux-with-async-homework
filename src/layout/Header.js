import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setUserInfo, clearUserInfo, fetchInfo} from '../actions';
import './Header.scss';

class Header extends Component {

  handleOnClick = () => {
    if(this.props.userInfo.logged){
      this.props.handleSignOut()
    }else{
      this.props.handleFetchInfo()
    }
  }

  render() {
    return (
      <header className="header">
        <div className="header-wrapper">
          {this.props.userInfo.logged && (
            <>
              <img src="https://avatars2.githubusercontent.com/u/40817605" alt="头像" />
              <span className="username">Kevin</span>
            </>
          )}

          <a className="sign" onClick={this.handleOnClick}>
            {this.props.userInfo.logged ? 'Sign out' : 'Sign in'}
          </a>
        </div>
      </header>
    );
  }
}

const mapStateToProps = ({ userInfo }) => ({
  userInfo
});

const mapDispatchToProps = dispatch => ({
  handleSignIn: info => setUserInfo(info),
  handleSignOut: () => clearUserInfo(),
  handleFetchInfo () {
    dispatch(fetchInfo())
  },
  handleSignOut () {
    dispatch(clearUserInfo())
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
