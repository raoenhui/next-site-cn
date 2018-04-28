import Icons from './icons'

export default () => (
  <footer>
    <div className="container">
      <span className="license">
        MIT Licensed. Copyright © 2018 ZEIT, Inc. All rights reserved.
      </span>
      <a className="github" href="https://github.com/zeit/next.js">
        <Icons.GithubCI />
      </a>
    </div>
    <style jsx>{`
      footer {
        background-color: #FAFAFA;
        border-top: 1px solid #EAEAEA;
        border-bottom: 1px solid #EAEAEA;
      }

      .container {
        width: 1000px;
        margin: 0 auto;
        display: flex;
        padding: 62px 0;
      }

      .license {
        color: #999999;
        font-size: 14px;
      }

      .github {
        margin-left: auto;
        opacity: 0.4;
        transition: .2s ease-out;
      }

      .github:hover {
        opacity: 1.0;
        cursor: pointer;
        transition: .2s ease-out;
      }

      .github :global(svg) {
        -webkit-backface-visibility: hidden;
      }

      @media (max-width: 999px) {
        .container {
          width: 100%;
          padding: 64px 0;
          flex-direction: column;
          align-items: center;
        }

        .github {
          margin: 0;
          margin-top: 24px;
        }
      }
    `}</style>
  </footer>
)
