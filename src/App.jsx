import './App.css';
import React, {Component} from 'react';
import {Calendar, momentLocalizer} from 'react-big-calendar';
import moment from 'moment';

import './App.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

class App extends Component {
  state = {
    events: [
      {
        start: moment().toDate(),
        end: moment().add(1, 'days').toDate(),
        title: 'Some title',
      },
    ],
  };

  render() {
    return (
      <div className="App">
        <Calendar
          localizer={localizer}
          defaultDate={new Date()}
          defaultView="month"
          events={this.state.events}
          style={{height: '100vh'}}
        />
      </div>
    );
  }
}

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
