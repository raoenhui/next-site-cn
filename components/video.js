import {Component} from 'react'

export default class Video extends Component {
  render() {
    return (
      <video
        autoPlay
        muted
        controls
        poster="/static/videos/video-poster.png"
      >
        <source src="/static/videos/hnpwa-next-v2.mp4" type="video/mp4" />
        <style jsx>{`
          video {
            width: 80%;
            height: 100%;
            max-width: 1220px;
          }
        `}</style>
      </video>
    )
  }
}
