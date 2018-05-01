import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'
import NProgress from 'nprogress'
import debounce from 'lodash.debounce'
import RouterEvents from '../lib/router-events'

const start = debounce(NProgress.start, 200)
RouterEvents.on('routeChangeStart', start)
RouterEvents.on('routeChangeComplete', () => {
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
        padding-bottom: 6rem;
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
    `}</style>
  </div>
)
