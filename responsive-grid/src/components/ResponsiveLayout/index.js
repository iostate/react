import _ from 'lodash';
import { Responsive, WidthProvider } from 'react-grid-layout';
import React, { Component } from 'react';

const ResponsiveGridLayout = WidthProvider(Responsive);

class ResponsiveGrid extends Component {

	constructor(props) {
		super(props);

		this.state = {
			items: this.renderCells(),
			layout: this.genLayout()
		};
	}

	renderCells() {
		return _.map(_.range(97, 123), function(i) {
			var genKey = String.fromCharCode(i);
			return (
				<div key={genKey}>
					<span>
						{genKey}
					</span>
				</div>
			);
		});
	}

	genLayout() {
		const p = this.props;
		return _.map(new Array(p.items), function(item, i) {
			const y = _.result(p, "y") || Math.ceil(Math.random() * 4) + 1;
			return {
				x: (i * 2) % 12,
				y: Math.floor(i / 6) * y,
				w: 2,
				h: y,
				i: i.toString()
			};
		});
	}

	render() {
		// layout is an array of objects, see the demo for more complete usage
    var layout = [
      {i: 'a', x: 0, y: 2, w: 2, h: 4},
      {i: 'b', x: 3, y: 2, w: 2, h: 4},
      {i: 'c', x: 6, y: 2, w: 2, h: 4},
      {i: 'd', x: 0, y: 8, w: 3, h: 8},
      {i: 'e', x: 3, y: 8, w: 3, h: 8},
      {i: 'f', x: 6, y: 8, w: 3, h: 8}
    ];
		
		return (
			<ResponsiveGridLayout className="layout" layouts={layout}
			breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
			cols={{lg: 12, md: 10, sm: 6, xs: 4, xxs: 2}}
			rowHeight={150} width={30}
			>
				{this.state.items}
			</ResponsiveGridLayout>
		)
	}
}

export default ResponsiveGrid;