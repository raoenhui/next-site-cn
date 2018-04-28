import {Component} from 'react'

export default class Video extends Component {
  constructor(props) {
    super(props)

    this.state = {
      className: this.props.mobile ? 'mobile' : ''
    }
    this.video = React.createRef()
    this.play = this.props.mobile ? this.play.bind(this) : () => {}
  }

  play() {
    const video = this.video.current

    video.style.backgroundImage = 'none'
    video.style.width = '100%'
    video.style.height = '100%'
    video.play()
    this.enterFullscreen()
  }

  enterFullscreen() {
    const video = this.video.current

    if (typeof(video.requestFullscreen) != "undefined") {
      video.requestFullscreen();
    } else if (typeof(video.webkitRequestFullscreen)  != "undefined") {
        video.webkitRequestFullscreen();
    } else if (typeof(video.mozRequestFullScreen)  != "undefined") {
        video.mozRequestFullScreen();
    }
  }

  render() {
    return (
      <video
        ref={this.video}
        className={this.state.className}
        autoPlay={!this.props.mobile}
        onClick={this.play}
        preload={this.props.mobile ? 'none' : 'auto'}
        muted
        loop>
        <source src="/static/videos/hnpwa-next-v2.mp4" type="video/mp4" />
        <style jsx>{`
          .mobile {
            width: 276px;
            height: 191px;
            background: url("/static/images/video-poster-mobile.png");
            background-repeat: no-repeat;
            background-position: 50% 50%;
            background-size: 100%;
          };
      `}</style>
      </video>
    )
  }
}
