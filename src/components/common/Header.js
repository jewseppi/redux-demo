/*eslint-disable import/default */
import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import logo from './logo.svg';
import LoadingDots from './LoadingDots';

const Header = ({loading}) => {
  return (
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <nav>
        <IndexLink to="/" activeClassName="active">Home</IndexLink>
        {" | "}
        <Link to="/courses" activeClassName="courses">Courses</Link>
        {" | "}
        <Link to="/about" activeClassName="active">About</Link>
        {loading && <LoadingDots interval={100} dots={20}/>}
      </nav>
    </div>
  );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Header;
