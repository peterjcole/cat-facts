import React, { useState, useEffect } from 'react'
import firebase from '../firebase'
import Nav from './Nav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router-dom'


function Add() {

  const [formData, setFormData] = useState({ text: "", email: "" })
  const history = useHistory();

  const handleChange = e => {
    const editFormData = { ...formData }
    editFormData[e.target.name] = e.target.value
    setFormData(editFormData)
  }

  const handleSubmit = e => {
    e.preventDefault()
    const fact = {
      text: formData.text,
      email: formData.email,
      userId: firebase.auth().currentUser.uid,
      approved: false
    }

    console.log(fact)
    firebase.firestore().collection('facts').add(fact)
      .then(() => {
        history.push('/')
      })
      .catch(error => console.log(error))
  }

  return (
    <section className="hero is-fullheight">
      <Nav />
      <div className="hero-body">
        <div className="container">
          <form onSubmit={handleSubmit}>
            <div className="field">
              <label className="label">Your fact here:</label>
              <div className="control">
                <textarea className="textarea" name="text" placeholder="Put interesting stuff about cats here" value={formData.text} onChange={handleChange}></textarea>
              </div>
            </div>
            <div className="field">
              <label className="label">Email address <small>(optional, if you want to be notified if your fact goes live)</small></label>
              <div className="control has-icons-left has-icons-right">
                <input className="input" type="email" name="email" placeholder="cantHugEveryCat@example.com" value={formData.email} onChange={handleChange}></input>
                <span className="icon is-small is-left">
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
              </div>
            </div>
            <div className="field">
              <div className="control">
                <button type="submit" className="button is-primary">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}


export default Add;
