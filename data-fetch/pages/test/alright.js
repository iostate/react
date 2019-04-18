import React from 'react';
import Link from 'next/link';
import 'isomorphic-unfetch';

export default class Alright extends React.Component {
  static async getInitialProps() {
    const res = await fetch(
      'http://reduxblog.herokuapp.com/api/posts?key=PAPERCLIP2134'
    );
    const json = await res.json();
    return {post: json};
  }



  render() {
    return (
      <div>
        <p>Alright has {this.props.post.map( {id} => {
            <p>id</p>;          
        }
        )}</p>
      </div>
    );
  }
}
