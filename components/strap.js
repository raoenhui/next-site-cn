import Icons from '../components/icons'

export default () => (
  <div className='button'>
    <div className='arrow top'><Icons.Arrow /></div>
    <div className='arrow bottom'><Icons.Arrow color='white' /></div>
    <style jsx>{`
      .button {
        width: 50px;
        height: 50px;
        border-radius: 50px;
        border: 1px solid #333333;
        margin: 97px auto 75px auto;
        cursor: pointer;
        overflow: hidden;
        transition: background-color 0.2s;
        position: relative;
      };
      .button:hover {
        background-color: #333333;
      };
      .arrow {
        position: absolute;
        left: 0;
        right: 0;
        margin: 0 auto;
        transition: top 0.2s ease-in-out;
        text-align: center;
        padding: 0;
      };
      .button .top {
        top: 12px;
      };
      .button:hover .top {
        top: -20px;
      };
      .button .bottom {
        top: 50px;
      };
      .button:hover .bottom {
        top: 12px;
      };
    `}</style>
  </div>
)
