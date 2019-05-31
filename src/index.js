import React from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill'

import './styles/shared/main.sass'

// Your top level component
import App from './App';

// Export your top level component as JSX (for static rendering)
export default App;

// Render your app
if (typeof document !== 'undefined') {
  const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate || ReactDOM.render;
  const render = Comp => {
    renderMethod(<Comp />, document.getElementById('root'));
  }

  // Render!
  render(App)
}
