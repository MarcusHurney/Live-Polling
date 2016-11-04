import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import Speaker from './components/Speaker';
import Audience from './components/Audience';
import Board from './components/Board';
import Whoops from './components/common/Whoops';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={Audience} />
		<Route path="/board" component={Board} />
		<Route path="/speaker" component={Speaker} />
		<Route path="*" component={Whoops} />
	</Route>
);
