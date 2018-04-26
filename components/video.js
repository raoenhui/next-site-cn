import {Component} from 'react'

export default class Video extends Component {
  constructor(props) {
    super(props)

    this.state = {
      className: this.props.mobile ? 'mobile' : ''
    }
    this.video = React.createRef()
    this.play = this.play.bind(this)
  }

  play() {
    this.video.current.style.backgroundImage = 'none'
    this.video.current.style.width = '100%';
    this.video.current.style.height = '100%';
    this.video.current.play()
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
        <source src="/static/videos/hnpwa-next.mp4" type="video/mp4" />
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
