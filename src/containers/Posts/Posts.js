import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "./actions";
import Photo from "../../components/Photo";

class PhotoGrid extends React.Component {
  render() {
    return (
      <div className="photo-grid">
        {this.props.posts.map((post, i) => (
          <Photo {...this.props} key={i} i={i} post={post} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { posts, comments } = state;
  return {
    posts,
    comments
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actions, dispatch);
};

const PhotoGridContainer = connect(mapStateToProps, mapDispatchToProps)(
  PhotoGrid
);

export default PhotoGridContainer;
