import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { Switch, Route } from 'react-router-dom';

import store, { history } from './store';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Admin from './pages/Admin';
import Help from './pages/Help';
import Home from './pages/Home';

ReactDOM.render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<Switch>
				<Route key={'/'} exact path="/" component={Home} />
				<Route key={'/help'} exact path="/help" component={Help} />
				<Route key={'/admin'} exact path="/admin" component={Admin} />
			</Switch>
		</ConnectedRouter>
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();
