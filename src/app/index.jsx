import React from 'react';
import ReactDOM from 'react-dom';

import { HashRouter, Route, Switch } from 'react-router-dom';

import { Home } from './pages/main.jsx';
import { About } from './pages/about.jsx';
import { Testimonials } from './pages/testimonials.jsx';
import { Contact } from './pages/contact.jsx';
import { Coaching } from './pages/coaching.jsx';


class App extends React.Component {
	render() {
		return (
			<HashRouter>
				<Switch>
					<Route exact path='/' component={Home}/>
					<Route path='/about' component={About}/>
					<Route path='/coaching' component={Coaching}/>
                    <Route path='/testimonials' component={Testimonials}/>
                    <Route path='/contact'  component={Contact}/>
                </Switch>
			</HashRouter>
        );
	}
}

ReactDOM.render(<App />, document.getElementById('app'));