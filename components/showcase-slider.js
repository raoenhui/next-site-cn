import {Component} from 'react'
import Icons from '../components/icons'

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
        width: 160px;
        height: 180px;
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

export default class Slider extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className='container'>
        <div className='slides'>
          <div className='slide prev'>
            <div className='viwer'>
              <Navigation prev>
                <img src='/static/images/showcases/magic-leap.png' />
              </Navigation>
            </div>
          </div>
          <div className='slide center'>
            <div className='viwer'>
              <img src='/static/images/showcases/magic-leap.png' />
            </div>
          </div>
          <div className='slide next'>
            <div className='viwer'>
              <Navigation>
                <img src='/static/images/showcases/magic-leap.png' />
              </Navigation>
            </div>
          </div>
        </div>
        <style jsx>{`
          .container {
            width: 100%;
            height: auto;
            min-height: 400px;
          };
          .slides {
            display: flex;
            justify-content: center;
            align-items: center;
          };
          .slide {
            display: flex;
          }
          .slide.center {
            margin: 0 25px;
            flex: 2.2;
            box-shadow: 0 30px 40px rgba(0, 0, 0, 0.12);
          };
          .slide.prev {
            justify-content: flex-start;
            align-items: center;
            flex: 0.6;
          };
          .slide.next {
            justify-content: flex-end;
            align-items: center;
            flex: 0.6;
          };
          img {
            width: 100%
          }
        `}</style>
      </div>
    )
  }
}
