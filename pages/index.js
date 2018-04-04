import Head from 'next/head'
import Link from 'next/link'

const Header = () => (
  <header>
    <nav>
      <div className='left'>
        <Link href='/'><a className='logo next-logo'></a></Link>
      </div>
      <div className='mid'>
        <Link href='/'><a>Docs</a></Link>
        <Link href='/'><a>About</a></Link>
        <Link href='/'><a>Showcase</a></Link>
        <Link href='/'><a>Github</a></Link>
        <Link href='/'><a>Enterprise</a></Link>
        <Link href='/'><a>Learn</a></Link>
      </div>
      <div className='right'>
        <Link href='/'><a className='logo zeit-logo'></a></Link>
      </div>
    </nav>
    <style jsx>{`
      header {
        display: flex;
        width: 100%;
        height: 70px;
        justify-content: center;
        align-items: center;
        box-shadow: 0 2px 4px rgba(73, 60, 60, 0.12)
      }
      nav {
        display: flex;
        width: 1000px;
        height: 50px;
        justify-content: center;
        align-items: center;
      };
      nav .left {
        margin-right: 180px;
      };
      nav .mid {
        flex-direction: row;
      };
      nav .mid a {
        font-size: 14px;
        color: #999999;
        margin-right: 34px;
        text-decoration: none;
      };
      nav .right {
        margin-left: 180px;
      };
      .logo {
        display: block;
        position: relative;
        background-size: contain;
        background-repeat: no-repeat;
      }
      .next-logo {
        width: 82px;
        height: 50px;
        background-image: url('/static/images/logotype-nextjs.png')
      };
      .zeit-logo {
        width: 18px;
        height: 16px;
        background-image: url('/static/images/logotype-white.png')
      };
      nav:hover .zeit-logo {
        background-image: url('/static/images/logotype-black.png')
      };
      nav:hover .mid a {
        color: #000000
      }
    `}</style>
  </header>
)

const Hero = () => (
  <section>
    <aside className='title'>
      <h1>Minimalistic Framework for Server-Rendered React Applications</h1>
      <p><span className='highlight'>Next 5 is out!</span> — Universal Webpack, CSS Imports, Plugins and Zones</p>
    </aside>
    <aside className='hero'>
      <img src="/static/images/video.png" alt="demo video"/>
    </aside>
    <style jsx>{`
      section {
        display: flex;
        flex-direction: column;
      };
      aside {
        display: flex;
        justify-content: center;
      };
      aside.title {
        flex-direction: column;
        justify-content: center;
      };
      aside.title p {
        border: 1px solid #EAEAEA;
        border-radius: 30px;
        height: 24px;
        margin: 41px auto 0 auto;
        font-size: 14px;
        color: #666666;
        line-height: 26px;
        background-image: url('/static/images/rectangle.png');
        background-repeat: no-repeat;
        background-position: 11px 7px;
        padding: 0px 11px 1px 31px;
      };
      aside.title h1 {
        width: 772px;
        height: 116px;
        text-align: center;
        font-size: 50px;
        font-weight: 100;
        margin: 68px auto 0 auto;
      }
      aside.hero {
        margin: 106px 0 0 0;
      };
      .highlight {
        color: black;
      };
    `}</style>
  </section>
)

export default () => (
  <div>
    <Head>
      <title>Next.js</title>
    </Head>
    <main>
      <Header />
      <Hero />
    </main>
    <footer>
    </footer>
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
    `}</style>
  </div>
)