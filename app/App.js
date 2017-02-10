import React from 'react';
import loading from './loading.gif';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello React!</h1>
        <img src={loading} alt="Loading..." />
      </div>
    );
  }
}
