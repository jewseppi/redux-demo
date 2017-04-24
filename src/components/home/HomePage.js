import React from 'react';
import {Link} from 'react-router';

// bootstrap integration
import css from 'react-css-modules';
import bootstrap from '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

// modular css
import styleable from 'react-styleable';
import styles from '../bootstrap.css'; // eslint-disable-line

class HomePage extends React.Component {
  render() {
    return (
      <div styleName="container">
        <div styleName="jumbotron" className={styles.jumbotron}>
          <h1>LifeTales Beta</h1>
          <p>React, Redux and React Router in ES6 for ultra-responsive web apps.</p>
          <Link to="about" styleName="btn btn-primary btn-lg">Learn more</Link>
        </div>
      </div>
    );
  }
}

export default styleable(styles)(css(HomePage, bootstrap, {allowMultiple: true}));
