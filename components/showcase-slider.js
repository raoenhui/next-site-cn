import {Component} from 'react'
import SlickSlider from 'react-slick'
import Icons from '../components/icons'

const Null = () => <div></div>

const SliderNav = ({prev, bg, onClick}) => (
  <div style={{backgroundImage: `url("${bg}")`}} className={`button ${prev ? 'next' : 'prev'}`} onClick={onClick}>
    <div className='inner'></div>
    {prev ? <Icons.ArrowPrevWhite /> : <Icons.ArrowNextWhite />}
    <style jsx>{`
      .button {
        width: 160px;
        height: 180px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-repeat: no-repeat;
        background-size: 200%;
        background-position: 100% 0;
        cursor: pointer;
        position: relative;
      };
      .button.next {
        background-position: 50% 0;
      };
      .inner {
        position: absolute;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.2);
      };
    `}</style>
  </div>
)

class LazyLoad extends Component {
  constructor(props) {
    super(props);

    this.imgSrc = React.createRef()
    this.placeholder = React.createRef()

    this.state = {
      isShow: ''
    }

    this.onLoad = this.onLoad.bind(this)
  }

  onLoad() {
    console.log('load')
    this.setState({
      isShow: 'show'
    })
  }

  render() {
    return (
      <div className='container'>
        <div className={`placeholder ${this.state.isShow}`}>
          {this.props.placeholder}
        </div>
        <div ref={this.imgSrc} className={`image ${this.state.isShow}`}>
          <img className={`image ${this.state.isShow}`} src={this.props.src} onLoad={this.onLoad}/>
        </div>
        <style jsx>{`
          .container {
            position: relative;
            height: 728px;
          };
          .placeholder {
            position: absolute;
            opacity: 1;
          };
          .placeholder.show {
            display: none
          }
          .image {
            position: absolute;
            opacity: 0;
            transition: opacity 1s ease;
          };
          .image.show {
            opacity: 1;
          }
        `}</style>
      </div>
    )
  }
}


export default class Slider extends Component {
  constructor({images}) {
    super()

    this.state = {
      images: images,
      prevBg: images[images.length - 1].src,
      nextBg: images[1].src
    }

    this.slider = React.createRef()
    this.prev = this.prev.bind(this)
    this.next = this.next.bind(this)

    this.settings = {
      customPaging: <Null />,
      beforeChange: (oldIndex, newIndex) => {
        const images = this.state.images
        this.setState({
          prevBg: images[(newIndex - 1 + images.length) % images.length].src,
          nextBg: images[(newIndex + 1) % images.length].src
        })
      },
      nextArrow: <Null />,
      prevArrow: <Null />,
      dots: false,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0
    };
  }

  next() {
    this.slider.current.slickNext()
  }

  prev() {
    this.slider.current.slickPrev()
  }

  render() {
    return (
      <div className='container'>
        <div className='nav prev'>
          <SliderNav prev bg={this.state.prevBg} onClick={this.prev} />
        </div>
        <div className='slider'>
          <SlickSlider {...this.settings} ref={this.slider}>
            {
              this.state.images.map(image => {
                // return <img key={image} src={`${image.src}`} />
                // return <div>{image.placeholder}</div>
                return <LazyLoad key={image.src} src={image.src} placeholder={image.placeholder} />
              })
            }
          </SlickSlider>
        </div>
        <div className='nav next'>
          <SliderNav bg={this.state.nextBg} onClick={this.next} />
        </div>
        <style jsx>{`
          .container {
            display: flex;
            min-height: 0;
            min-width: 0;
            justify-content: space-between;
            align-items: center;
          }
          .slider {
            flex: 1;
            margin: 0 25px;
          };
          .nav {
            flex: 0.3;
            display: none;
          };
          .nav.next {
            justify-content: flex-end;
          };
          @media (min-width: 1000px) {
            .nav {
              display: flex;
            };
          };
          @media (min-width: 1280px) {
            .nav {
              display: flex;
            };
          };
        `}</style>
      </div>
    )
  }
}
