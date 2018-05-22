import PropTypes from 'prop-types'
import React from 'react'

class Screen extends React.Component {
  render() {
    const {
      id,
      children,
      fullWidth = true,
      offset = null
    } = this.props
    return (
      <div
        id={id}
        className={`screen`}
        style={{
          minHeight: offset != null ? `calc(100vh - ${offset}px)` : ''
        }}
      >
        <div className="wrap">{children}</div>
        <style jsx>{`
          .screen {
            display: flex;
            min-height: 100vh;
            align-items: center;
          }
          .wrap {
            margin: auto;
            width: ${fullWidth ? '100%' : 'auto'};
          }
        `}</style>
      </div>
    )
  }
}

export default Screen