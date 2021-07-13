import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/Details.scss';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.svg';
import '../styles/Global.scss';
import Header from './Header';


class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      repos: [],
      followers: 0,
      loading: true,
    }
    this.fetchRepositories = this.fetchRepositories.bind(this);
    this.fetchFollowers = this.fetchFollowers.bind(this);
    this.getUser = this.getUser.bind(this);
  }

  componentDidMount() {
    this.getUser();
  }

  getUser() {
    const { match: { params: { id } }, listOfUsers: { items } } = this.props;
    const foundUser = items.find((user) => user.id === parseInt(id, 10));
    this.setState({
      user: foundUser,
    }, () => this.fetchRepositories(foundUser))
  }

  fetchFollowers(user) {
    return fetch(`https://api.github.com/users/${user}`)
    .then((result) => result.json())
    .then(({followers, following, name, location, bio, public_repos}) => this.setState({
      followers,
      following,
      name,
      location,
      bio,
      public_repos,
      loading: false,
    }))
  }

  fetchRepositories(foundUser) {
    return fetch(`${foundUser.repos_url}`)
    .then((result) => result.json())
    .then((data) => this.setState({
      repos: data,
    }, () => this.fetchFollowers(foundUser.login)));
  }

  render() {
    const { loading, user: { login, avatar_url, html_url }, followers, following, name, location, bio, public_repos, repos } = this.state;
    if (loading) {
      return (<div>Loading...</div>);
    }
    return (
      <div>
        <Header />
        <div className="details">
          <h1>{name}</h1>
          <h2>{login}</h2>
          <img src={avatar_url} alt={login} />
          <div className="text-details">
            <p><strong>Location: </strong>{`${location}`}</p>
            <p><strong>Followers: </strong>{`${followers}`}</p>
            <p><strong>Following:</strong>{`${following}`}</p>
            <p><strong>Bio: </strong>{`${bio}`}</p>
            <p><strong>Public repos: </strong>{`${public_repos}`}</p>
            <strong>Main repositories:</strong>
            <ol>
              { repos.slice(0, 3).map((repo) => <li><a href={repo.html_url} target="_blank" rel="noopener noreferrer">{repo.full_name}</a></li>) }
            </ol>
          </div>
          <a target="_blank" rel="noopener noreferrer" href={html_url}>
            <img className="logo" src={logo} alt="GitHub logo"></img>
          </a>
          <Link to="/"><button className="button" type="button">Home</button></Link>
        </div>
      </div>
    )
  }
}

const MapStateToProps = (state) => ({
  listOfUsers: state.user.users,
});

export default connect(MapStateToProps)(Details);
