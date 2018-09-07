import React from 'react';
import { add } from '@utils/utils';
import './test';
import './About.scss';

class About extends React.Component {
  render() {
    const sum = add(12, 3);
    return (
      <div className="page-about">
        <h1>About Page</h1>
        <div> 12 plus 3 equals {sum}</div>
      </div>
    );
  }
}
export default About;
