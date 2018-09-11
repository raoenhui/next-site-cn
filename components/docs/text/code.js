export const Code = ({ children, syntax }) => (
  <pre className={(syntax ? ` ${syntax}` : '')}>
    <code>{children}</code>
    <style jsx>
      {`
        pre {
          border: 1px solid #eaeaea;
          padding: 20px;
          margin: 40px 0;
          white-space: pre;
          overflow: auto;
          -webkit-overflow-scrolling: touch;
        }

        code {
          color: #000000;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace,
            serif;
          font-size: 13px;
          line-height: 20px;
        }
      `}
    </style>
  </pre>
)

export const InlineCode = ({ children, noWrap }) => (
  <code className={noWrap && 'no-wrap'}>
    {children}
    <style jsx>
      {`
        code {
          color: #000000;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace,
            serif;
          font-size: 0.9em;
          white-space: pre-wrap;
          padding: 0.2em 0.4em;
          margin: 0;
          background-color: rgba(27,31,35,0.05);
          border-radius: 0.3em;
        }

        code.no-wrap {
          white-space: nowrap;
        }

      /*  code::before {
          content: '\`';
        }

        code::after {
          content: '\`';
        }*/
      `}
    </style>
  </code>
)
