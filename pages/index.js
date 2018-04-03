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

export default () => (
  <div>
    <Head>
      <title>Next.js</title>
    </Head>
    <main>
      <Header />
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
      };
    `}</style>
  </div>
)