import React, { useState, useEffect } from 'react'
import moment from 'moment'

import firebase from '../firebase'
import Nav from './Nav'

const today = new Date() //todo store in ref

function Facts() {

  const [facts, setFacts] = useState([])
  const [cursor, setCursor] = useState({})

  useEffect(() => {
    if (facts.length === 0) {
      updateFacts()
    }
  }, [])

  const updateFacts = () => {
    const query = firebase.firestore().collection('facts')
      .where('approved', '==', true)
      .where('displayDate', '<=', today)
      .orderBy('displayDate', 'desc')
      .limit(10)

    query.get().then(facts => {
      setFacts(facts.docs)
      setCursor(0)
    })
  }

  const goOlder = () => {
    if (cursor < facts.length - 1) {
      setCursor(cursor + 1)
    }
  }

  const goNewer = () => {
    if (cursor > 0) {
      setCursor(cursor - 1)
    }
  }

  const addFact = () => {
    firebase.firestore().collection('facts').add({
      text: "This is an interesting fact" + Math.random(),
      submitted: today,
      approved: true
    })
  }

  return (
    <section className="hero is-fullheight">
      <Nav />
      <div className="hero-body">
        <div className="container">
          <div className="columns is-vcentered">
            <div className="column">
              <h1 className="title" onClick={goOlder}>{"<"}</h1>
            </div>
            {facts[cursor] && <Fact data={facts[cursor].data()} />}
            {/* <button className="button" onClick={addFact}>Add fact</button> */}
            <div className="column">
              <h1 className="title" onClick={goNewer}>{">"}</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Fact(props) {
  const {displayDate, text} = props.data
  return (
    <div className="column is-four-fifths">
      <h1 className="title">{text}</h1>
      <h2 className="subtitle">{moment(displayDate.toMillis()).format("dddd, MMMM Do YYYY")}</h2>
    </div>
  )
}

export default Facts;
