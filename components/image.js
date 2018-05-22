import React, { Component } from 'react'
import PropTypes from 'prop-types'


// This component might look a little complex
// because one could argue that keeping the aspect ratio
// of an image can be solved with `height: auto`,
// but it's actually not that easy if you want to prevent
// element flickering

// Because if you want to do that, you need to set the aspect
// ratio of the image's container BEFORE the image loads

class Image extends Component {
  static propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired
  }

  render() {
    const {
      caption,
      width,      
      height,
      margin = 40,
      video = false,
      captionSpacing = null,
      renderImage,
      ...rest
    } = this.props

    const aspectRatio = String(height / width * 100) + '%'

    return (
      <figure>
        <main style={{ width }}>
          <div style={{ paddingBottom: aspectRatio }}>
            {video && <video
              muted={true}
              autoPlay={true}
              loop={true}
              playsInline={true}
              {...rest}              
            />}
            {!video && !renderImage && <img {...rest} />}
            {renderImage && renderImage(rest)}
          </div>

          {caption && (
            <p style={captionSpacing ? { marginTop: captionSpacing } : {}}>
              {caption}
            </p>
          )}
        </main>

        <style jsx>{`
          figure {
            display: block;
            text-align: center;
            margin: ${margin}px 0;
            max-width: 100%;
          }
          main {
            margin: 0 auto;
            max-width: 100%;
          }
          div {
            position: relative;
          }
          figure :global(img),
          figure :global(video) {
            height: 100%;
            left: 0;
            position: absolute;
            top: 0;
            width: 100%;
          }
          p {
            color: #999;
            font-size: 12px;
            margin: 0;
            text-align: center;
          }
        `}</style>
      </figure>
    )
  }
}

export const Video = props => <Image {...props} video />

export default Image