import React, { Component } from 'react';
import DownloadCard from './components/DownloadCard';

export default class Page4 extends Component {
  static displayName = 'Page4';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="page4-page">
        <DownloadCard />
      </div>
    );
  }
}
