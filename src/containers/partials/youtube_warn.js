import React from 'react';
import ClassNames from 'classnames';

import CONST from '../../constants';

export default class YouTubeWarn extends React.Component {
  constructor() {
    super();
    this.state = {
      id: null,
      parsedData: [],
      isVisible: false,
      isSet: false
    };
  }
  componentWillMount() {
    const plain = `${this.props.location}-${this.props.name}`;
    const hexEncode = (str) => {
      let hex, i;

      let result = "";
      for (i = 0; i < str.length; i++) {
        hex = str.charCodeAt(i).toString(16);
        result += ("000" + hex).slice(-4);
      }
      return result
    }
    this.setState({ id: hexEncode(plain) });
    let localData;
    if (typeof window !== 'undefined') {
      localData = window.localStorage.getItem(CONST.localStorage.youtubeWarn);
    }
    if (localData && typeof localData === 'string') {
      this.setState({ parsedData: JSON.parse(localData) })
    }
  }

  onClickAgree(e) {
    if (this.state.parsedData.indexOf(this.state.id) === -1) {
      this.state.parsedData.push(this.state.id);
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(CONST.localStorage.youtubeWarn, JSON.stringify(this.state.parsedData))
      }
    }
    this.setState({ isSet: true });
    const iframe = document.querySelector('iframe');
    iframe.src += '?&autoplay=1';
  }

  onClickToggleWarn(e) {
    e.preventDefault();
    this.setState({isVisible: !this.state.isVisible})
  }

  render() {
    if (this.state.parsedData && this.state.parsedData.indexOf(this.state.id) !== -1) {
      return null;
    }
    return (
      <div className={ClassNames('utube-warn', {
        show: this.state.isVisible
      })} onClick={this.onClickToggleWarn.bind(this)}>
        <div className="utube-warn-b">
          <div className="utube-warn-ib">
            <h2 className="utube-warn-h">YouTube Privacy Warning</h2>
            <p className="utube-warn-desc">YouTube does not allow videos to be watched anonymously. Watching this video here will be tracked by Google.</p>
            <div className="utube-warn-opt">
              <button onClick={this.onClickAgree.bind(this)}>Play</button>
              <button className="btn-cancel" onClick={this.onClickToggleWarn.bind(this)}>Cancel</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
