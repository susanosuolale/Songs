import React, { Component } from "react";
import { selectSong } from "../actions";
import { connect } from "react-redux";

class SongList extends Component {
  renderList() {
    return this.props.songs.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => this.props.selectSong(song)}
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }
  render() {
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}


// getting data from redux store

const mapStateToProps = (state) => {
  // taking redux store/state and passing it down as a props to SongList
  console.log(state);
  return { songs: state.songs };
  //  props that is passed down
};

export default connect(mapStateToProps, {
  selectSong: selectSong,
})(SongList);
// first argument: passing state data as props
// second Argument: passing action creator as props. when called, takes the action that is returned and automatically dispatches it to the reducers
