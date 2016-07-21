/* eslint-disable new-cap, react/prop-types, max-len, arrow-body-style, no-underscore-dangle */

import React from 'react';
// import axios from 'axios';

export default class Polkamon extends React.Component {
  constructor(props) {
    super(props);
    this.update = this.update.bind(this);
    this.create = this.create.bind(this);
    this.state = { polkamons: [] };
  }

//   componentDidMount() {
//   }

//   componentWillReceiveProps(props) {
//     this.setState({ board: props.board, current: props.current });
//   }

  componentWillMount() {
    this.update();
  }

  update() {
    const uri = 'http://localhost:3333/api/polkamons';
    fetch(uri)
   .then((response) => response.text())
   .then((responseText) => {
     const jsonifiedData = JSON.parse(responseText);
     this.setState({ polkamons: jsonifiedData.polkamons });
   });
  }

  create(e) {
    const name = this.refs.name.value;
    const image = this.refs.url.value;
    const body = JSON.stringify({ name, image });
    fetch('//localhost:3333/api/polkamons', { method: 'post', body, headers: { 'Content-Type': 'application/json' } })
    .then(r => r.json())
    .then(() => this.update());
    e.preventDefault();
  }

  render() {
    console.log(this.state.polkamons);
    let showHtml = '';
    if (this.state.polkamons.length === 0) {
      showHtml = (<div>Nothing to see here!</div>);
    } else {
      showHtml = (<div>{this.state.polkamons.map(p => <p key={p._id}>{p.name}<img role="presentation" src={p.image} width="80px" /></p>)}</div>);
    }
    return (
      <div>
        <p></p>
        <form>
          <div className="form-group">
            <label>Name</label>
            <input className="form-control" ref="name" type="text" />
          </div>
          <div className="form-group">
            <label>URL</label>
            <input className="form-control" ref="url" type="text" />
          </div>
          <button className="btn btn-primary" onClick={this.create}>Create</button>
        </form>
        {showHtml}
      </div>
    );
  }
}
