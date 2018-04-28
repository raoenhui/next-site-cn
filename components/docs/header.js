import Icons from '../icons'

export default function Header () {
  return (
    <header>
      <a className="logo" href="/">
        <Icons.Next />
      </a>

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
