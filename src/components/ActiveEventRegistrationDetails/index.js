import {Component} from 'react'

import './index.css'

const yetTo = 'https://assets.ccbp.in/frontend/react-js/events-register-img.png'
const registered =
  'https://assets.ccbp.in/frontend/react-js/events-regestered-img.png'
const restistationsClosed =
  'https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png'

const eventConstants = {
  initial: 'INITIAL',
  yetToRegister: 'YET_TO_REGISTER',
  registeredView: 'REGISTERED',
  registrationsClosedView: 'REGISTRATIONS_CLOSED',
}

class ActiveEventRegistrationDetails extends Component {
  yetToRegister = () => (
    <div className="status-container">
      <div className="content-container">
        <img src={yetTo} alt="yet to register" className="yet-img" />
        <p className="yet-description">
          A live performance brings so much to your relationship with dance.
          Seeing dance live can often make you fall totally in love with this
          beautiful art form.
        </p>
        <button type="button" className="reg-button">
          Register Here
        </button>
      </div>
    </div>
  )

  registered = () => (
    <div className="registered-container">
      <img src={registered} alt="registered" className="reg-img" />
      <h1 className="reg-description">
        You have already registered for the event
      </h1>
    </div>
  )

  restistationsClosed = () => (
    <div className="reg-closed-container">
      <div className="reg-content-container ">
        <img
          src={restistationsClosed}
          alt="registrations closed"
          className="reg-closed-img"
        />
        <h1 className="reg-closed-heading">Registrations Are Closed Now!</h1>
        <p className="reg-closed-des">
          Stay tuned. We will reopen the registrations soon!
        </p>
      </div>
    </div>
  )

  initialView = () => (
    <div className="initial-div">
      <p className="initial">
        Click on an event, to view its registration details
      </p>
    </div>
  )

  render() {
    const {type} = this.props
    console.log(type)
    switch (type) {
      case eventConstants.initial:
        return this.initialView()
      case eventConstants.yetToRegister:
        return this.yetToRegister()
      case eventConstants.registeredView:
        return this.registered()
      case eventConstants.registrationsClosedView:
        return this.restistationsClosed()
      default:
        return null
    }
  }
}
export default ActiveEventRegistrationDetails
