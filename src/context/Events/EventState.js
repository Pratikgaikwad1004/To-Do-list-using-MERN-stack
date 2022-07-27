import EventContext from "./EventContext";
import React, { useState } from "react";

const EventState = (props) => {
  const URL = "http://localhost:8000";
  const events_a = [];
  const [events, setEvents] = useState(events_a);

  // Get all event
  const getAllEvent = async () => {
    const response = await fetch(`${URL}/api/list/fetchallevents`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":localStorage.getItem('token')
      },
    });
    const json = await response.json();
    setEvents(json);
  };

  // Add event
  const addEvent = async (task, status, priority) => {
    const response = await fetch(`${URL}/api/list/addevent`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":localStorage.getItem('token')
      },
      body: JSON.stringify({ task, status, priority }),
    });
    let myEvent = {
      _id: "62ded64a674e33fce47c2cf2",
      user: "62dd81c76c3c41644fb3aeb9",
      task: task,
      status: status,
      priority: priority,
      date: "2022-07-25T17:43:38.012Z",
      __v: 0,
    };
    await response.json();
    setEvents(events.concat(myEvent));
  };

  // Delete event
  const deleteEvent = async (id) => {
    const response = await fetch(`${URL}/api/list/deleteevent/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":localStorage.getItem('token')
      },
    });
    await response.json();
    const new_events = events.filter((event) => {
      return event._id !== id;
    });
    setEvents(new_events);
  };

  // Mark as complete to event
  const markAsCompletedEvent = async (id, status) => {
    if (status) {
      status = "completed";
    }
    const response = await fetch(`${URL}/api/list/updateevent/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":localStorage.getItem('token')
      },
      body: JSON.stringify({ status: status }),
    });
    await response.json();
    //const json = response.json();
    let newEvent = JSON.parse(JSON.stringify(events));
    for (let index = 0; index < newEvent.length; index++) {
      const element = newEvent[index];
      if (element._id === id) {
        newEvent[index].status = true;
        break;
      }
    }
    setEvents(newEvent);
  };

    // Sort completed event
    const sortCompleted = async () => {
      const new_events = events.filter((event) => {
        return event.status !== false;
      });
      setEvents(new_events);
    };

    // Sort completed event
    const sortPending = async () => {
      const new_events = events.filter((event) => {
        return event.status !== true;
      });
      setEvents(new_events);
    };
  return (
    <EventContext.Provider
      value={{
        events,
        setEvents,
        addEvent,
        deleteEvent,
        markAsCompletedEvent,
        getAllEvent,
        sortCompleted,
        sortPending
      }}
    >
      {props.children}
    </EventContext.Provider>
  );
};

export default EventState;
