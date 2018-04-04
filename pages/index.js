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

const Strap = () => (
  <div>
      <i className='arrow top'></i>
      <i className='arrow bottom'></i>
      <style jsx>{`
        div {
          width: 50px;
          height: 50px;
          border-radius: 50px;
          border: 1px solid #333333;
          margin: 97px auto 75px auto;
          cursor: pointer;
          overflow: hidden;
          transition: background-color 0.2s;
        };
        div:hover {
          background-color: #333333;
        };
        i {
          display: block;
          position: relative;
          border: solid black;
          border-width: 0 2px 2px 0;
          padding: 2px;
          transition: top 0.2s ease-in-out;
        };
        i.top {
          top: 18px;
          border-color: #333333;
        };
        div:hover i.top {
          top: -50px
        };
        i.bottom {
          top: 50px;
          border-color: #FFFFFF;
        };
        div:hover i.bottom {
          top: 5px
        };
        .arrow{
          width: 6px;
          height: 6px;
          border-width: 2px 2px 0 0;
          transform:translateX(19px) rotate(134deg);
         };
      `}</style>
  </div>
)

export default () => (
  <div>
    <Head>
      <title>Next.js</title>
    </Head>
    <main>
      <Header />
      <Hero />
      <Strap />
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