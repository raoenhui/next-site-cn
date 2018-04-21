export default ({children, color}) => (
  <div className={color}>
    <span>{children}</span>
    <style jsx>{`
      div {
        display: flex;
        justify-content: center;
        align-content: center;
        align-items: center;
        width: 200px;
        height: 50px;
        border-radius: 50px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12);
      };
      div > span {
        font-size: 14px;
        line-height: 16px;
        height: 16px;
      };
      div.white {
        background-color: #FFFFFF;
        color: #000000;
      };
      div.black {
        background-color: #000000;
        color: #FFFFFF;
      };
    `}</style>
  </div>
)
