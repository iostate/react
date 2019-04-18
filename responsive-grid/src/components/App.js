import React, { Component } from 'react';
import NonResponsiveLayout from '../components/NonResponsiveLayout';

// Stylesheets for react-grid-layout
import '../../node_modules/react-grid-layout/css/styles.css';
import '../../node_modules/react-resizable/css/styles.css';

class App extends Component {
	render() {
		return(
			<div className="app">
				<NonResponsiveLayout />
			</div>
		);
	}
}

export default App;