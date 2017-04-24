import React, {PropTypes} from 'react';
import Header from './common/Header';
import {connect} from 'react-redux';

// modular css
import styleable from 'react-styleable';
import styles from './App.css'; // eslint-disable-line

class App extends React.Component {
  render() {
    const {loading, children} = this.props;
    return (
      <div className={styles.root}>
        <Header
          loading={loading}
        />
        {children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object, //removed .isRequired to silence react-router error.
  loading: PropTypes.bool.isRequired
  //css: PropTypes.object // required to silence ESLint css modules error.
};

function mapStateToProps(state, ownProps) {
  return {
    loading: state.ajaxCallsInProgress > 0
  };
}

export default styleable(styles)(connect(mapStateToProps)(App));
