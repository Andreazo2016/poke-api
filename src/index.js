import React from 'react';
import ReactDOM from 'react-dom';
import Routers from './routers/routers'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Routers/>, document.getElementById('root'));
registerServiceWorker();
