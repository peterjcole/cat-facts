import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCat } from '@fortawesome/free-solid-svg-icons'

function Nav() {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="/"><h4 className="title is-4"><FontAwesomeIcon icon={faCat} color="#e76f51"/> Cat Facts</h4></a>
      </div>
      <div className="navbar-menu is-active">
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