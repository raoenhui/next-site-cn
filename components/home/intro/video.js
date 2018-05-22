import {Component} from 'react'
import Image, {Video} from '../../image'

export default class IntroVideo extends Component {
  state = {
    loaded: false,
    shouldAutoPlay: true
  }
  componentDidMount() {
    let shouldAutoPlay = true

    if(window.matchMedia) {
      shouldAutoPlay = window.matchMedia('(min-width: 767px)').matches
    }

    this.setState(() => ({
      loaded: true,
      shouldAutoPlay
    }))
  }
  render() {
    const {shouldAutoPlay, loaded} = this.state
    if(!loaded) {
      return <Image width={1220} height={524} src="/static/videos/video-poster.png" />
    }

    return (
      <Video
        width={1220}
        height={524}
        autoPlay={shouldAutoPlay}
        muted
        controls
        preload="none"
        poster="/static/videos/video-poster.png"
        src="/static/videos/hnpwa-next-v2.mp4"
        caption="See an app created in minutes."
      />
    )
  }
}
