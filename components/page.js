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
      body {
        padding: 0;
        margin: 0;
        min-height: 100%;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
        text-rendering: optimizeLegibility;
        -moz-osx-font-smoothing:  antialiased;
        -webkit-font-smoothing: antialiased;
      };
      * {
        min-height: 0;
        min-width: 0;
      };
    `}</style>
  </div>
)
