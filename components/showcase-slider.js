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
  constructor(props) {
    super(props)

    this.state = {
      src: undefined,
      image: props.image,
      phClassName: 'placeholder',
      srcClassName: 'src'
    }
  }

  componentWillMount() {
    if (typeof window !== 'undefined') {
      this.load()
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.image.src !== this.state.image.src) {
      this.setState({
        image: nextProps.image,
        phClassName: 'placeholderd',
        srcClassName: 'src'
      });
      setTimeout(() => {
        if (typeof window !== 'undefined') {
          this.load()
        }
      }, 100);
    }
  }

  load() {
    const img = new Image()
    img.onload = () => {
      this.setState({
        src: this.state.image.src,
        phClassName: 'placeholder loaded',
        srcClassName: 'src loaded'
      })
    }
    img.src = this.state.image.src
  }

  render() {
    return (
      <div>
        <img src={this.state.image.data} className={this.state.phClassName} />
        <img src={this.state.src} className={this.state.srcClassName} />
        <style jsx>{`
          img {
            width: 100%;
            min-height: 0;
            box-shadow: 0 30px 40px rgba(0, 0, 0, 0.12);
          };
          img.src {
            opacity: 0;
            position: absolute;
            left: 0;
          };
          img.src.loaded {
            opacity: 1;
            transition: opacity 2s ease-in-out;
          }
          img.placeholder {
            opacity: 1;
            transition: opacity 2s ease-in-out;
          };
          img.placeholder.loaded {
            opacity: 0;
            transition: opacity 2s ease-in-out;
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

    this.state = {
      current: 0,
      currentImage: Manifest.manifest[0],
      prevImage: Manifest.manifest[Manifest.prev(0)],
      nextImage: Manifest.manifest[Manifest.next(0)]
    }
  }

  change(current) {
    this.setState({
      current: current,
      currentImage: Manifest.manifest[current],
      prevImage: Manifest.manifest[Manifest.prev(current)],
      nextImage: Manifest.manifest[Manifest.next(current)]
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
              <LazyImage image={this.state.prevImage} />
            </Navigation>
          </div>
          <div className='slide center'>
            <div className='image'>
              <LazyImage ref={this.current} image={this.state.currentImage} />
            </div>
          </div>
          <div className='slide next'>
            <Navigation next onClick={this.next}>
              <LazyImage image={this.state.nextImage} />
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
          };
          .slide.prev {
            width: 160px;
            min-width: 160px;
            height: 180px;
          };
          .slide.next {
            width: 160px;
            min-width: 160px;
            height: 180px;
          };
          @media (max-width: 1600px) {
            .image {
              width: 1024px;
              height: 587px;
            }
          };
          @media (max-width: 1360px) {
            .image {
              width: 720px;
              height: 413px;
            }
          };
          @media (max-width: 1060px) {
            .image {
              width: 470px;
              height: 270px;
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
