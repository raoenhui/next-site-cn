import Link from 'next/link'

export default ({children, color, href}) => (
  <Link href={href}>
    <a className={color} style={{'textDecoration': 'none'}}>
      <span>{children}</span>
      <style jsx>{`
        a {
          display: flex;
          justify-content: center;
          align-content: center;
          align-items: center;
          width: 200px;
          height: 50px;
          border-radius: 50px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12);
          cursor: pointer;
        };
        span {
          font-size: 14px;
          line-height: 16px;
          height: 16px;
        };
        .white {
          background-color: #FFFFFF;
          color: #000000;
          transition: all .2s ease;
        };
        .black {
          background-color: #000000;
          color: #FFFFFF;
          transition: all .2s ease;
        };
        a.white:hover {
          background-color: #000000;
          color: #FFFFFF;
          transition: all .2s ease;
        };
        a.black:hover {
          background-color: #FFFFFF;
          color: #000000;
          transition: all .2s ease;
        };
    `}</style>
    </a>
  </Link>
)
