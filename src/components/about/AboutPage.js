import React from 'react';
import styleable from 'react-styleable';
import styles from '../bootstrap.css'; // eslint-disable-line
import css from 'react-css-modules';
import bootstrap from '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class AboutPage extends React.Component {
  render() {
    return (
      <div styleName="container">
        <div styleName="jumbotron" className={styles.jumbotron}>
          <h1>About</h1>
          <p>This application uses React, Redux, React Router and a variety of other helpful libraries</p>
        </div>
      </div>
    );
  }
}

export default styleable(styles)(css(AboutPage, bootstrap));
