import './index.css'

const EventItem = props => {
  const {event, eventType} = props
  const {imageUrl, name, location, registrationStatus} = event

  const getEvent = () => {
    eventType(registrationStatus)
  }

  return (
    <li className="card">
      <button type="button" className="event-img" onClick={getEvent}>
        <img src={imageUrl} alt="event" className="img" />
      </button>
      <p className="card-heading">{name}</p>
      <p className="card-para">{location}</p>
    </li>
  )
}
export default EventItem
