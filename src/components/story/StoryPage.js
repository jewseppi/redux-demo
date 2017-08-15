import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as storyActions from '../../actions/storyActions';
import StoryImage from './StoryImage';
import css from 'react-css-modules';
import react from '../../styles/react.css';

class StoryPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const {story} = this.props;
    return (
      <div styleName="container">
        <StoryImage story={story}/>
      </div>
    );
  }
}

StoryPage.propTypes = {
  story: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    story: state.story
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(storyActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(css(StoryPage, react));
