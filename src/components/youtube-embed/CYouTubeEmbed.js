import React, { Component } from 'react';
import YouTube from 'react-youtube';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  compositionInfo: state.ccardInfo.ccard_info
});

class CYouTubeEmbed extends Component {
  videoOnReady(event) {
    event.target.pauseVideo();
  }

  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: { 
        autoplay: 1
      }
    };

    const { compositionInfo } = this.props;
    {console.log(compositionInfo)}
    return (
      <YouTube
        videoId={compositionInfo.youtube}
        opts={opts}
        onReady={this.videoOnReady}
      />
    );
  }
}

export default connect(mapStateToProps)(CYouTubeEmbed);