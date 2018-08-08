import React, { Component } from 'react';
import AbilityIntroduction from './components/AbilityIntroduction';
import AblityItems from './components/AblityItems';
import BrandDisplay from './components/BrandDisplay';

export default class Page3 extends Component {
  static displayName = 'Page3';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="page3-page">
        <AbilityIntroduction />
        <AblityItems />
        <BrandDisplay />
      </div>
    );
  }
}
