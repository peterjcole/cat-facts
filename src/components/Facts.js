import React from 'react'

import firebase from '../firebase'
import Nav from './Nav'

function App() {
  return (
    <section className="hero is-fullheight">
      <Nav />
      <div className="hero-body">
        <div className="container">
          <div className="columns is-vcentered">
            <div className="column">
              <h1 className="title">{"<"}</h1>
            </div>
            <div className="column is-four-fifths">
              <h1 className="title">The oldest known pet cat existed 9,500 years ago.</h1>
              <h2 className="subtitle">Wednesday, 20th May 2020</h2>
            </div>
            <div className="column">
              <h1 className="title">{">"}</h1>
            </div>
          </div>


        </div>
      </div>
    </section>



  );
}

export default App;
