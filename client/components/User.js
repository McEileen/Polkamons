/* eslint-disable new-cap, react/prop-types, max-len, arrow-body-style, no-underscore-dangle */

import React from 'react';
import { browserHistory } from 'react-router';
// import axios from 'axios';

export default class Polkamon extends React.Component {
  constructor(props) {
    super(props);
    this.create = this.create.bind(this);
    this.state = { user: [] };
  }

  create(e) {
    e.preventDefault();
    console.log('test1234');
    const email = this.refs.email.value;
    const thingy = this.refs.thingy.value;
    const body = JSON.stringify({ email, password: thingy });
    console.log(body);
    fetch('//localhost:3333/api/register', { method: 'post', body, headers: { 'Content-Type': 'application/json' } })
    .then(() => browserHistory.push('/login'));
  }

  render() {
    return (
      <div>
        <p></p>
        <form>
          <div className="form-group">
            <label>email</label>
            <input className="form-control" ref="email" type="text" />
          </div>
          <div className="form-group">
            <label>Thingy</label>
            <input className="form-control" ref="thingy" type="text" />
          </div>
          <button className="btn btn-primary" onClick={this.create}>Create</button>
        </form>
      </div>
    );
  }
}
