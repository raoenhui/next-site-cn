import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'

export default ({children}) => (
  <div>
    <Head>
      <title>Nextjs.org</title>
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
      .slick-list {
        box-shadow: 0 30px 40px rgba(0, 0, 0, 0.12);
      }
    `}</style>
  </div>
)
