import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'
import NProgress from 'nprogress'
import debounce from 'lodash.debounce'
import RouterEvents from '../lib/router-events'
import {trackPageview} from '../lib/analytics'

const start = debounce(NProgress.start, 200)
RouterEvents.on('routeChangeStart', start)
RouterEvents.on('routeChangeComplete', (url) => {
  trackPageview(url)
  start.cancel()
  NProgress.done()
})
RouterEvents.on('routeChangeError', () => {
  start.cancel()
  NProgress.done()
})

export default ({children}) => (
  <div>
    <Head>
      <title>Next.js</title>
    </Head>
    <Header />
    <main>
      {children}
    </main>
    <Footer />
    <style jsx global>{`
      html {
        height: 100%;
        box-sizing: border-box;
        font-size: 62.5%;
      }

      *,
      *:before,
      *:after {
        box-sizing: inherit;
      }

      body {
        position: relative;
        min-height: 100%;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
        text-rendering: optimizeLegibility;
        line-height: 1.5;
        font-size: 1.6rem;
      }

      a {
        -webkit-tap-highlight-color: rgba(0,0,0,0);
      }

      html, body {
        background-color: #FFF;
        color: #000;
      }

      ::selection {
        background-color: #000;
        color: #FFF;
      }

      .prevent-scroll {
        overflow: hidden;
      }

      #nprogress {
        pointer-events: none;
      }
      #nprogress .bar {
        position: fixed;
        z-index: 2000;
        top: 0;
        left: 0;
        width: 100%;
        height: 2px;
        background: black;
      }
    `}</style>
    <style jsx global>{`
      .slick-slider
      {
          position: relative;
      
          display: block;
          box-sizing: border-box;
      
          -webkit-user-select: none;
             -moz-user-select: none;
              -ms-user-select: none;
                  user-select: none;
      
          -webkit-touch-callout: none;
          -khtml-user-select: none;
          -ms-touch-action: pan-y;
              touch-action: pan-y;
          -webkit-tap-highlight-color: transparent;
      }
      
      .slick-list
      {
          position: relative;
      
          display: block;
          overflow: hidden;
      
          margin: 0;
          padding: 0;
      }
      .slick-list:focus
      {
          outline: none;
      }
      .slick-list.dragging
      {
          cursor: pointer;
          cursor: hand;
      }
      
      .slick-slider .slick-track,
      .slick-slider .slick-list
      {
          -webkit-transform: translate3d(0, 0, 0);
             -moz-transform: translate3d(0, 0, 0);
              -ms-transform: translate3d(0, 0, 0);
               -o-transform: translate3d(0, 0, 0);
                  transform: translate3d(0, 0, 0);
      }
      
      .slick-track
      {
          position: relative;
          top: 0;
          left: 0;
      
          display: block;
      }
      .slick-track:before,
      .slick-track:after
      {
          display: table;
      
          content: '';
      }
      .slick-track:after
      {
          clear: both;
      }
      .slick-loading .slick-track
      {
          visibility: hidden;
      }
      
      .slick-slide
      {
          display: none;
          float: left;
      
          height: 100%;
          min-height: 1px;
      }
      [dir='rtl'] .slick-slide
      {
          float: right;
      }
      .slick-slide img
      {
          display: block;
      }
      .slick-slide.slick-loading img
      {
          display: none;
      }
      .slick-slide.dragging img
      {
          pointer-events: none;
      }
      .slick-initialized .slick-slide
      {
          display: block;
      }
      .slick-loading .slick-slide
      {
          visibility: hidden;
      }
      .slick-vertical .slick-slide
      {
          display: block;
      
          height: auto;
      
          border: 1px solid transparent;
      }
      .slick-arrow.slick-hidden {
          display: none;
      }
      
    `}</style>
  </div>
)
