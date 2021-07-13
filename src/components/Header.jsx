import React, { Component } from 'react'

export default class Header extends Component {
  constructor() {
    super();
    this.changeTheme = this.changeTheme.bind(this);
  }

  changeTheme() {
    const $html = document.querySelector('html');
    $html.classList.toggle('dark-mode');
  }

  render() {
    return (
      <header>
        <button className="button" type="button" onClick={this.changeTheme}>Change theme</button>
      </header>
    )
  }
}
