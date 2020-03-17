import React, { Component } from 'react';
import YouTube from 'react-youtube';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  songInfo: state.pcardInfo.pcard_info
});

class PYouTubeEmbed extends Component {
  videoOnReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };

    const { songInfo } = this.props;
    return (
      <YouTube
        videoId={songInfo.youtube}
        opts={opts}
        onReady={this.videoOnReady}
      />
    );
  }
}

export default connect(mapStateToProps)(PYouTubeEmbed);
