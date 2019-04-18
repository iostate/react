import { Responsive, WidthProvider } from 'react-grid-layout';
import React, { Component } from 'react';
import Styles from './styles.css';

const NavTavs = WidthProvider(Responsive);

class NavTabs extends Component {


	render() {
		return (
			<div>
				<p>
					Test
				</p>
			</div>
		);
	}
}

export default NavTabs;