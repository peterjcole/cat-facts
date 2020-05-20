import React from 'react'

function Nav() {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="/"><h4 className="title is-4">Cat Facts</h4></a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item">Home</a>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a className="button is-primary">
                <strong>Add a fact</strong>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>

  )
}

export default Nav