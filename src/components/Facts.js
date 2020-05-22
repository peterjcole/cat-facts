import React, { useState, useEffect } from 'react'
import moment from 'moment'

import firebase from '../firebase'
import Nav from './Nav'

const today = new Date() //todo store in ref

function Facts() {

  const [facts, setFacts] = useState([])
  const [cursor, setCursor] = useState(0)

  useEffect(() => {
    if (facts.length === 0) {
      getMoreFacts()
    }
  }, [])

  const getMoreFacts = () => {
    const query = firebase.firestore().collection('facts')
      .where('approved', '==', true)
      .where('displayDate', '<=', today)
      .orderBy('displayDate', 'desc')
      .limit(10)

    const fullQuery = facts.length ? query.startAfter(facts[facts.length - 1]) : query

    fullQuery.get().then(newFacts => {
      setFacts((oldFacts) => {
        return oldFacts.concat(newFacts.docs)
      })
    })
  }

  const goOlder = () => {
    if (cursor === facts.length - 2) {
      getMoreFacts()
    }

    if (!isOldestFact()) {
      setCursor(cursor + 1)
    }
  }

  const goNewer = () => {
    if (!isNewestFact()) {
      setCursor(cursor - 1)
    }
  }

  const isOldestFact = () => cursor === facts.length - 1

  const isNewestFact = () => cursor === 0

  return (
    <section className="hero is-fullheight">
      <Nav />
      <div className="hero-body">
        <div className="container">
          <div className="columns is-vcentered">
            <div className="column">
              {!isOldestFact() && <h1 className="title" onClick={goOlder}>{"<"}</h1>}
            </div>
            {facts[cursor] &&
              <Fact data={facts[cursor].data()} />
            }
            <div className="column">
              {!isNewestFact() && <h1 className="title" onClick={goNewer}>{">"}</h1>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Fact(props) {
  const { displayDate, text } = props.data
  return (
    <div className="column is-four-fifths">
      <h1 className="title">{text}</h1>
      <h2 className="subtitle">{moment(displayDate.toMillis()).format("dddd, MMMM Do YYYY")}</h2>
    </div>
  )
}

export default Facts;
