import {GenericLink} from './text/link'
import NextLogo from '../icons/next-logo'

export default function Header () {
  return (
    <header>
      <GenericLink href="/">
        <a className="logo">
          <NextLogo />
        </a>
      </GenericLink>

      <style jsx>{`
        header {
          position: fixed;
          z-index: 1000;
          top: 0;
          display: flex;
          align-items: center;
          height: 144px;
          padding: 0 56px;
        }

        .logo :global(svg) {
          height: 50px;
        }
      `}</style>
    </header>
  )
}
