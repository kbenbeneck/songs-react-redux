import React, { Component } from 'react';
import { connect } from 'react-redux';

class SongList extends Component {
  render() {
      return <div>SongList</div>
  }  
};
const mapState = state => {
    return { songs: state.songs };
};

export default connect(mapState)(SongList);