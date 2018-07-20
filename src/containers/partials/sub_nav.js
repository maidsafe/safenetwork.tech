import React from 'react'
import ClassNames from 'classnames';

// sub navigation
export default class SubNav extends React.Component {
  genStyleClasses(data) {
    let windowScrollY = 0;
    if (typeof window !== 'undefined') windowScrollY = window.scrollY;
    const classes = {};
    for(let key in data) {
      const item = data[key];
      const result = item.last ? (windowScrollY >= item.top) : (windowScrollY >= item.top) && (windowScrollY < item.top + item.height);
      if (classes[item.colr]) {
        classes[item.colr] = classes[item.colr] || result;
        continue;
      }
      classes[item.colr] = result;
    }
    return classes;
  }

  render() {
    const subNavClasses = this.genStyleClasses(this.props.scrollPos);
    return (
      <div id="SubNav" className={ClassNames(`sub-nav ${this.props.at || ''}`, {fixed: this.props.isScrolling, ...subNavClasses})}>
        <div className="sub-nav-b">
          <nav>
            {
              this.props.scrollPos ? Object.keys(this.props.scrollPos).map((key, i) => {
                const data = this.props.scrollPos[key];
                return (<a key={`dataLink-${i}`} className="lnk-underline grey" href={`#${data.id}`}>{data.name}</a>);
              }) : null
            }
          </nav>
        </div>
      </div>
    );
  }
}
