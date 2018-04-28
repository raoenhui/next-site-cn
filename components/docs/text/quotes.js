export const Blockquote = ({ children, ...props }) => (
  <blockquote {...props}>
    { children }

    <style jsx>{`
      blockquote {
        padding: 14px 0;
        border-left: 6px solid #000;
        margin-left: 0;
        padding-left: 32px;
      }

      blockquote :global(p) {
        margin: 0;
      }
    `}</style>
  </blockquote>
)

