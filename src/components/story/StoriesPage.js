import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as storyActions from '../../actions/storyActions';
import StoryList from './StoryList';
import {browserHistory} from 'react-router';
import css from 'react-css-modules';
import bootstrap from '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class StoriesPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.redirectToAddStoryPage = this.redirectToAddStoryPage.bind(this);
  }

  storyRow(story, index) {
    return <div key={index}>{story.title}</div>;
  }

  redirectToAddStoryPage() {
    browserHistory.push('/story');
  }

  render() {
    const {stories} = this.props;
    return (
      <div styleName="container">
        <h1>Stories</h1>
        <input type="submit"
               value="Add Story"
               styleName="btn btn-primary"
               onClick={this.redirectToAddStoryPage}/>
        <StoryList stories={stories}/>
      </div>
    );
  }
}

StoriesPage.propTypes = {
  stories: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    stories: state.stories
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(storyActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(css(StoriesPage, bootstrap, {allowMultiple: true}));
