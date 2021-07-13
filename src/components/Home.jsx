import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchData } from '../actions';
import { Link } from 'react-router-dom';
import '../styles/Home.scss';
import logo from '../assets/images/logo.svg';
import '../styles/Global.scss';
import Header from './Header';
class Home extends Component {
  constructor() {
    super();
    this.state = {
      search: '',
    }
    this.handleInput = this.handleInput.bind(this);
    this.requestUser = this.requestUser.bind(this);
    // this.changeTheme = this.changeTheme.bind(this);
  }

  handleInput({ target }) {
    const { value } = target;
    this.setState({
      search: value,
    })
  }

  // changeTheme() {
  //   const $html = document.querySelector('html');
  //   $html.classList.toggle('dark-mode');
  // }

  requestUser() {
    const { search } = this.state;
    const { findUser } = this.props;
    search === '' ? alert('Please type a search term') : findUser(search);
  }

  render() {
    const { users } = this.props;
    return (
      <div className="home">
        <Header />
        <div className="search-div">
          <img className="logo" src={logo} alt="Github logo" />
          <label htmlFor="user">Search for a GitHub user:
            <input id="user" type="text" onChange={this.handleInput} />
          </label>
          <button className="button" type="button" onClick={this.requestUser}>Pesquisar</button>
        </div>
        <div className="users">
          { users.length !== 0 && users.items.map((user) => 
          <Link to={`/details/${user.id}`}>
            <p>{user.login}</p>
            <img src={user.avatar_url} alt={user.login} />
          </Link>) }
        </div>
      </div>
    )
  }
}

const MapStateToProps = (state) => ({
  users: state.user.users,
})

const MapDispatchToProps = (dispatch) => ({
  findUser: (user) => dispatch(fetchData(user)),
})

export default connect(MapStateToProps, MapDispatchToProps)(Home);
