const loginForm = document.getElementById('login-form')
const emailInput = document.getElementById('email')
const passwordInput = document.getElementById('password')
const organizerPage = document.getElementById('organizer-page')
const userPage = document.getElementById('user-page')
const eventsContainer = document.getElementById('events-container')
const eventsList = document.getElementById('events-list')
const createEventForm = document.getElementById('create-event-form')
const searchEventForm = document.getElementById('search-event-form')
const eventNameInput = document.getElementById('event-name')
const eventDateInput = document.getElementById('event-date')
const eventDescriptionInput = document.getElementById('event-description')
const searchEventNameInput = document.getElementById('search-event-name')

const events = [
  {
    id: 1,
    name: 'Event 1',
    date: '2023-03-01',
    description: 'Description 1',
    organizer: 'admin@ex.com',
  },
  {
    id: 2,
    name: 'Event 2',
    date: '2023-03-02',
    description: 'Description 2',
    organizer: 'admin@ex.com',
  },
]

let organizer = null

const login = (email, password) => {
  if (email === 'admin@ex.com' && password === 'pass') {
    organizer = { email }
    showOrganizerPage()
  } else {
    user = { email }
    showUserPage()
  }
}

const createEvent = (eventName, eventDate, eventDescription) => {
  const event = {
    id: events.length + 1,
    name: eventName,
    date: eventDate,
    description: eventDescription,
    organizer: organizer.email,
  }
  events.push(event)
  createEventForm.reset()
  showOrganizerPage()
}

const updateEvent = (eventId, eventName, eventDate, eventDescription) => {
  const event = events.find((event) => event.id === eventId)
  if (event) {
    event.name = eventName
    event.date = eventDate
    event.description = eventDescription
  }
}

const searchEvent = (eventName) => {
  if (eventName) {
    const filteredEvents = events.filter(
      (event) => event.name.toLowerCase().indexOf(eventName.toLowerCase()) > -1
    )
    displayEvents(filteredEvents)
  } else {
    displayEvents(events)
  }
}

const displayEvents = (events) => {
  eventsContainer.innerHTML = ''
  eventsList.innerHTML = ''
  events.forEach((event) => {
    if (event.organizer === organizer.email) {
      const eventCard = document.createElement('div')
      eventCard.classList.add('event-card')
      eventCard.addEventListener('click', () => {
        updateEvent(event.id, event.name, event.date, event.description)
      })
      eventCard.innerHTML = `
        <p>Name: ${event.name}</p>
        <p>Date: ${event.date}</p>
        <p>Description: ${event.description}</p>
      `
      eventsContainer.appendChild(eventCard)
    } else {
      const eventCard = document.createElement('div')
      eventCard.classList.add('event-card')
      eventCard.addEventListener('click', () => {
        // you can add the functionality to attend the event here
      })
      eventCard.innerHTML = `
        <p>Name: ${event.name}</p>
        <p>Date: ${event.date}</p>
        <p>Description: ${event.description}</p>
      `
eventsList.appendChild(eventCard)
    }
  })
}

const showOrganizerPage = () => {
  loginForm.style.display = 'none'
  organizerPage.style.display = 'flex'
  createEventForm.addEventListener('submit', (e) => {
    e.preventDefault()
    createEvent(
      eventNameInput.value,
      eventDateInput.value,
      eventDescriptionInput.value
    )
  })
  searchEventForm.addEventListener('submit', (e) => {
    e.preventDefault()
    searchEvent(searchEventNameInput.value)
  })
  displayEvents(events)
}

const showUserPage = () => {
  loginForm.style.display = 'none'
  userPage.style.display = 'flex'
  searchEventForm.addEventListener('submit', (e) => {
    e.preventDefault()
    searchEvent(searchEventNameInput.value)
  })
  displayEvents(
    events.filter((event) => event.organizer !== organizer.email)
  )
}

loginForm.addEventListener('submit', (e) => {
  e.preventDefault()
  login(emailInput.value, passwordInput.value)
})