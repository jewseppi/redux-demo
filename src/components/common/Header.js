/*eslint-disable import/default */
import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import logo from './logo.svg';
import LoadingDots from './LoadingDots';
import styles from '../App.css'; // eslint-disable-line
import styleable from 'react-styleable';
import css from 'react-css-modules';
import bootstrap from '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Header = ({loading}) => {
  return (
    <div className={styles.appHeader}>
      <nav styleName="navbar navbar-inverse">
        <div styleName="container-fluid">
          <div styleName="navbar-header">
            <IndexLink to="/" styleName="navbar-brand" activeClassName="active">
              <img src={logo} styleName="pull-left" className={styles.appLogo} alt="logo" />
              <div styleName="pull-left">LifeTales</div>
            </IndexLink>
          </div>
          <ul styleName="nav navbar-nav">
            <li><Link to="/" activeClassName="active">Home</Link></li>
            <li><Link to="/courses" activeClassName="active">Courses</Link></li>
            <li><Link to="/about" activeClassName="active">About</Link></li>
            {/* <li>{loading && <LoadingDots interval={100} dots={20}/>}</li> */}
          </ul>
        </div>
      </nav>
    </div>
  );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default styleable(styles)(css(Header, bootstrap, {allowMultiple: true}));

