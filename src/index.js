import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import configureStore from './redux-config';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { ConnectedRouter } from 'react-router-redux';
import getRoutes from './routes';

import './index.css';

const history = createBrowserHistory();
const store = configureStore(history);

const Root = () => (
    <Provider store={store}>
        <ConnectedRouter history={history}>{getRoutes()}</ConnectedRouter>
    </Provider>
);

ReactDOM.render(<Root />, document.getElementById('root'));

serviceWorker.unregister();
