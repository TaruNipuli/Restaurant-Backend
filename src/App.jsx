import './App.css';
import {React, useState} from 'react';
import {Calendar, momentLocalizer} from 'react-big-calendar';
import moment from 'moment';

import './App.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const App = () => {
  let events = [
    {
      start: moment().toDate(),
      end: moment().add(2, 'hours').toDate(),
      title: 'Table 2 reservation',
    },
  ];
  const [myEvents, setEvents] = useState(events);

  /*events: [
      {
        start: moment().toDate(),
        end: moment().add(1, 'days').toDate(),
        title: 'Some title',
      },
      {
        start: moment().toDate(),
        end: moment().add(2, 'days').toDate(),
        title: 'Table 2 reserved',
      },
    ],*/

  return (
    <>
      <div className="App">
        <Calendar
          localizer={localizer}
          defaultDate={new Date()}
          defaultView="week"
          events={myEvents}
          style={{height: '100vh'}}
        />
      </div>
      <div>
        <input type="text"></input>
        <input type="text"></input>
        <button
          onClick={(events) => {
            console.log(typeof events);
            console.log(typeof myEvents);
            let event = {
              start: moment().toDate(),
              end: moment().add(5, 'hours').toDate(),
              title: 'Table 2 reservation',
            };
            events.push(event);
            setEvents(myEvents);
          }}
          type="button"
        >
          Reservation
        </button>
      </div>
    </>
  );
};

/*
import {Calendar, momentLocalizer} from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/sass/styles';

const localizer = momentLocalizer(moment); // or globalizeLocalizer

const App = () => {
  return (
    <div className="myCustomHeight">
      <Calendar
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
      />
    </div>
  );
};

// Setup the localizer by providing the moment (or globalize, or Luxon) Object
// to the correct localizer.
const localizer = momentLocalizer(moment); // or globalizeLocalizer

const MyCalendar = (props) => (
  <div className="myCustomHeight">
    <Calendar
      localizer={localizer}
      events={myEventsList}
      startAccessor="start"
      endAccessor="end"
    />
  </div>
);*/

export default App;
