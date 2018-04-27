import {Component} from 'react'
import Link from 'next/link'
import Icons from '../components/icons'
import Manifest from '../components/showcase-manifest'

const Navigation = ({children, prev, onClick}) => (
  <div className={`button ${prev ? 'prev' : 'next'}`} onClick={onClick}>
    <div className='thumbnail'>
      {children}
    </div>
    <div className='inner'></div>
    <div className='arrow'>
      {prev ? <Icons.ArrowPrevWhite /> : <Icons.ArrowNextWhite />}
    </div>
    <style jsx>{`
      .button {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        position: relative;
        overflow: hidden;
        box-shadow: 0 30px 40px rgba(0, 0, 0, 0.12);
      };
      .inner {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.2);
      };
      .thumbnail {
        position: absolute;
        width: 200%;
        top: 0;
        left: 0;
      };
      .prev .thumbnail {
        left: -100%;
      }
      .arrow {
        position: absolute;
      }
    `}</style>
  </div>
)

class LazyImage extends Component {
  state = {
    src: '',
    preloadSrc: '',
    image: this.props.image,
    phClassName: 'placeholder',
    srcClassName: 'src'
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.image.title !== prevState.image.title) {
      return {
        preloadSrc: nextProps.image.src,
        image: nextProps.image,
        phClassName: 'placeholder',
        srcClassName: 'src'
      }
    }

    return {
      phClassName: 'placeholder',
      srcClassName: 'src'
    }
  }

  constructor(props) {
    super(props)

    this.onLoad = this.onLoad.bind(this)
  }

  onLoad() {
    this.setState({
      src: this.state.image.src,
      phClassName: 'placeholder fadeout',
      srcClassName: 'src fadein'
    })
  }

  componentDidMount() {
    this.setState({
      preloadSrc: this.state.image.src,
    })
  }


  render() {
    return (
      <div className='container'>
        <img src={this.state.image.data} className={this.state.phClassName} />
        <img src={this.state.src} className={this.state.srcClassName} />
        <img src={this.state.preloadSrc} className='preload' onLoad={this.onLoad}/>
        <style jsx>{`
          img {
            width: 100%;
            min-height: 0;
            box-shadow: 0 30px 40px rgba(0, 0, 0, 0.12);
          };
          img.src {
            opacity: 1;
            position: absolute;
            left: 0;
            z-index: -1;
          };
          img.src.fadeout {
            opacity: 0;
            transition: opacity 1s ease-in-out;
          };
          img.placeholder {
            opacity: 1;
          };
          img.placeholder.fadeout {
            opacity: 0;
            transition: opacity 1.5s ease-in-out;
          };
          img.preload {
            display: none;
          };
        `}</style>
      </div>
    )
  }
}

export default class Slider extends Component {
  constructor() {
    super()

    this.next = this.next.bind(this)
    this.prev = this.prev.bind(this)

    const images = Manifest.manifest.map(s => {
      return <LazyImage image={s} />
    })

    this.state = {
      current: 0,
      images: images,
      currentImage: images[0],
      prevImage: images[Manifest.prev(0)],
      nextImage: images[Manifest.next(0)]
    }
  }

  change(current) {
    this.setState({
      current: current,
      currentImage: this.state.images[current],
      prevImage: this.state.images[Manifest.prev(current)],
      nextImage: this.state.images[Manifest.next(current)]
    })
  }

  next() {
    this.change(Manifest.next(this.state.current))
  }

  prev() {
    this.change(Manifest.prev(this.state.current))
  }

  render() {
    return (
      <div className='container'>
        <div className='slides'>
          <div className='slide prev'>
            <Navigation prev onClick={this.prev}>
              {this.state.prevImage}
            </Navigation>
          </div>
          <div className='slide center'>
            <div className='image'>
              {this.state.currentImage}
            </div>
          </div>
          <div className='slide next'>
            <Navigation next onClick={this.next}>
              {this.state.nextImage}
            </Navigation>
          </div>
        </div>
        <style jsx>{`
          .container {
            display: block;
            margin: 0 auto;
            padding: 20px 0;
          };
          .slides {
            padding: 25px 0 25px 0;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            will-change: opacity;
          };
          .image {
            width: 1280px;
            height: 734px;
            display: block;
            position: relative;
            overflow: hidden;
            border-radius: 5px;
          };
          .slide {
            box-shadow: 0 8px 10px rgba(0, 0, 0, 0.12);
          };
          .slide.prev {
            width: 160px;
            min-width: 160px;
            height: 180px;
            overflow: hidden;
            border-top-right-radius: 5px;
            border-bottom-right-radius: 5px;
          };
          .slide.next {
            width: 160px;
            min-width: 160px;
            height: 180px;
            overflow: hidden;
            border-top-left-radius: 5px;
            border-bottom-left-radius: 5px;
          };
          @media (max-width: 1600px) {
            .image {
              width: 1024px;
              height: 587px;
              overflow: hidden;
              border-radius: 6px;
            }
          };
          @media (max-width: 1360px) {
            .image {
              width: 720px;
              height: 413px;
              overflow: hidden;
              border-radius: 6px;
            }
          };
          @media (max-width: 1060px) {
            .image {
              width: 470px;
              height: 270px;
              overflow: hidden;
              border-radius: 3px;
            }
          };
          @media (max-width: 900px) {
            .slide.prev {
              width: 0;
              min-width: 0;
            };
            .slide.next {
              width: 0;
              min-width: 0;
            };
            .slides {
              width: 90%;
              margin: 0 auto;
            }
            .image {
              width: 100%;
              height: auto;
            }
          }
        `}</style>
      </div>
    )
  }
}
