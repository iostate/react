import _ from 'lodash';
import React, { Component } from 'react';
import GridLayout from 'react-grid-layout';
import styles from '../NonResponsiveLayout/styles.css';

class NonResponsiveLayout extends Component {

  gridLayoutDivKeyGen(styles) {

    return _.map(_.range(97, 123), function(i) {
      var genKey = String.fromCharCode(i);
      return (
        <div key={genKey} className={styles.a}>
          <p className={styles.items}>{genKey}</p>
        </div>
      );
    })
  }

	render() {
    // layout is an array of objects, see the demo for more complete usage
    var layout = [
      {i: 'a', x: 0, y: 2, w: 3, h: 8},
      {i: 'b', x: 3, y: 2, w: 3, h: 8, minW: 2, maxW: 4},
      {i: 'c', x: 6, y: 2, w: 3, h: 8},
      {i: 'd', x: 0, y: 4, w: 3, h: 8},
      {i: 'e', x: 3, y: 4, w: 3, h: 8},
      {i: 'f', x: 6, y: 4, w: 3, h: 8},
    ];
    
    return (
      <GridLayout styles={styles} className="layout" layout={layout} cols={12} rowHeight={30} width={1200}>
        {this.gridLayoutDivKeyGen(styles)}
    {/* 
      <div key="a" className={styles.a}>
        <p className={styles.items}> a </p>
      </div>
      <div key="b" className={styles.a}>
        <p className={styles.items}>  </p>
      </div>
      <div key="c" className={styles.a}>
        <p className={styles.items}>  </p>
      </div>
      <div key="d" className={styles.a}>
        <p className={styles.items}>  </p>
      </div>
      <div key="e" className={styles.a}>
        <p className={styles.items}>  </p>
      </div>
      <div key="f" className={styles.a}>
        <p className={styles.items}>  </p>
      </div> 
    */}
      </GridLayout>
    )
  }
}

export default NonResponsiveLayout;