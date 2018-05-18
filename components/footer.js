import ZeitLogo from './zeit-logo'

export default () => (
  <footer>
    <div className="container">
      <nav>
        <a href="https://github.com/zeit/next.js/releases">Changelog</a>
        <a className="github" href="https://github.com/zeit/next.js">GitHub</a>
        <span>
          License: <strong>MIT</strong>
        </span>
      </nav>
      <ZeitLogo />      
    </div>
    <style jsx>{`
      footer {
        background-color: #FAFAFA;
        border-top: 1px solid #EAEAEA;
        border-bottom: 1px solid #EAEAEA;
        color: #999999;
        font-size: 14px;
      }

      a {
        text-decoration: none;
        color: #999999;
      }

      a, span {
        margin-left: 10px;        
      }

      a:first-child {
        margin-left: 0;
      }

      .container {
        display: flex;
        justify-content: space-between;
        width: 1000px;
        margin: 0 auto;
        padding: 62px 0;
      }

      @media (max-width: 999px) {
        .container {
          width: 100%;
          padding: 64px 0;
          flex-direction: column;
          align-items: center;
        }
      }
    `}</style>
  </footer>
)
