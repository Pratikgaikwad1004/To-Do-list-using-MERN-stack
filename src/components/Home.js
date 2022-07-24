import React from "react";
import { Link } from "react-router-dom";

function Home() {
  const myfunc = () => {
    console.log("check")
  }
  return (
    <>
      <section className="home-container">
        <div className="home-container-2">
          <div className="home-heading">
            <i className="fa-solid fa-list-check"></i>&nbsp;&nbsp;Task List
          </div>
          <div className="home-table">
            <table className="table" id="myTable">
              <thead>
                <tr>
                  <th scope="col">Task</th>
                  <th scope="col">Status</th>
                  <th scope="col">Priority</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </td>
                  <td>Completed</td>
                  <td id="prio">Middle</td>
                  <td>
                    <i className="fa-solid fa-check" onClick={myfunc}></i>&nbsp;&nbsp;
                    <i className="fa-solid fa-trash-can"></i>
                  </td>
                </tr>
                <tr>
                  <td>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </td>
                  <td>Completed</td>
                  <td id="prio">Middle</td>
                  <td>
                    <i className="fa-solid fa-check"></i>&nbsp;&nbsp;
                    <i className="fa-solid fa-trash-can"></i>
                  </td>
                </tr>
                <tr>
                  <td>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </td>
                  <td>Completed</td>
                  <td id="prio">Middle</td>
                  <td>
                    <i className="fa-solid fa-check"></i>&nbsp;&nbsp;
                    <i className="fa-solid fa-trash-can"></i>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bottom">
            <div className="home-logout-btn btm-div">
              <Link to="/login" className="home-logout-button">
                Logout
              </Link>
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
                      <div class="mb-3">
                        <label
                          for="exampleFormControlTextarea1"
                          class="form-label"
                        >
                          Enter Description
                        </label>
                        <textarea
                          class="form-control"
                          id="exampleFormControlTextarea1"
                          rows="3"
                        ></textarea>
                      </div>
                      <select
                        class="form-select"
                        aria-label="Default select example"
                      >
                        <option selected>Select Priority</option>
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
                      <button className="home-modal-add-button">ADD</button>
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
