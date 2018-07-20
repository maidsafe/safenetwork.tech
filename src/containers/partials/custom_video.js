import React from 'react'

export default class PageEnd extends React.Component {
  render() {
    const { links } = this.props;
    if (!links) {
      return null;
    }

    return (
      <div className="custom-video">
        <video controls>
          {links.mp4 ? <source src={links.mp4} type="video/mp4" /> : null}
          {links.ogv ? <source src={links.ogv} type="video/ogg" /> : null}
          {links.webm ? <source src={links.webm} type="video/webm" /> : null}
          Your browser does not support HTML5 video.
      </video>
      </div>
    )
  }
}
