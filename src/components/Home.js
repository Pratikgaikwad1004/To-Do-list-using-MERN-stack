import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EventContext from "../context/Events/EventContext";
function Home(props) {
  const context = useContext(EventContext);
  const {
    events,
    addEvent,
    deleteEvent,
    getAllEvent,
    markAsCompletedEvent,
    sortCompleted,
    sortPending
  } = context;
  const [event, setEvent] = useState({ task: "", status: false, priority: "" });
  const status = true;
  let history = useNavigate();
  useEffect(() => {
    if (localStorage.getItem('token')) {
      getAllEvent();
    } else {
      history('/login');
    }
  }, []);

  const addEventClient = (e) => {
    e.preventDefault();
    addEvent(event.task, event.status, event.priority);
    props.showAlert("Event added successfully", "success");
  };

  const onChange = (e) => {
    setEvent({ ...event, [e.target.name]: e.target.value });
  };

  const logout = () => {
    localStorage.removeItem("token");
    history("/login");
    props.showAlert("Loggedout successfully", "success")
  }
  return (
    <>
      <section className="home-container">
        <div className="home-container-2">
          <div className="home-heading">
            <i className="fa-solid fa-list-check"></i>&nbsp;&nbsp;Task List
          </div>
          <div className="sort">
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Sort By Status
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li>
                  <button className="dropdown-item" onClick={sortCompleted}>Completed</button>
                </li>
                <li>
                  <button className="dropdown-item" onClick={sortPending}>Pending</button>
                </li>
              </ul>
            </div>
          </div>
          <div className="home-table">
            <table className="table" id="myTable">
              <thead>
                <tr key="9">
                  <th key="5" scope="col">
                    Task
                  </th>
                  <th key="6" scope="col">
                    Status
                  </th>
                  <th key="7" scope="col">
                    Priority
                  </th>
                  <th key="8" scope="col">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {events.map((event) => {
                  return (
                    <tr>
                      <td key="1">{event.task}</td>
                      <td key="2">
                        {event.status ? (
                          <i className="fa-solid fa-check status"></i>
                        ) : (
                          <i className="fa-solid fa-xmark status"></i>
                        )}
                      </td>
                      <td key="3" id="prio">
                        {event.priority === "1"
                          ? "High Priority"
                          : event.priority === "2"
                          ? "Middle Priority"
                          : "Low Priority"}
                      </td>
                      <td key="4">
                        <i
                          className="fa-solid fa-check"
                          onClick={() => {
                            markAsCompletedEvent(event._id, status);
                            props.showAlert("Event completed", "success");
                          }}
                        ></i>
                        &nbsp;&nbsp;
                        <i
                          className="fa-solid fa-trash-can"
                          onClick={() => {
                            deleteEvent(event._id);
                            props.showAlert("Event deleted", "danger");
                          }}
                        ></i>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="bottom">
            <div className="home-logout-btn btm-div">
              <button onClick={logout} className="home-logout-button">
                Logout
              </button>
            </div>
            <div className="home-add-btn btm-div">
              <button
                className="home-add-button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                ADD
              </button>
              <div
                className="modal fade"
                id="exampleModal"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">
                        Add Event
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <div className="mb-3">
                        <label htmlFor="task" className="form-label">
                          Enter Description
                        </label>
                        <textarea
                          className="form-control"
                          name="task"
                          id="task"
                          rows="3"
                          minLength={5}
                          onChange={onChange}
                          required
                        ></textarea>
                      </div>
                      <select
                        className="form-select"
                        aria-label="Default select example"
                        id="priority"
                        name="priority"
                        onChange={onChange}
                      >
                        <option defaultValue>Priority</option>
                        <option value="1">High</option>
                        <option value="2">Middle</option>
                        <option value="3">Low</option>
                      </select>
                    </div>
                    <div className="modal-footer">
                      <button
                        className="home-modal-add-button"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button
                        className="home-modal-add-button"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                        onClick={addEventClient}
                        disabled={event.task.length < 5}
                      >
                        ADD
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
