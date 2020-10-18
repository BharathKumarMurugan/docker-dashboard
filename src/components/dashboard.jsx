import React, { Component } from "react";

class Dashboard extends Component {
  state = {
    containers: [{ running: 3 }, { stopped: 1 }],
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="card border-0 shadow-sm p-3 mb-3 bg-white rounded">
              <table className="table table-borderless m-2">
                <tbody>
                  <tr className="row">
                    <td className="col-sm-3">Endpoint</td>
                    <td className="col-sm-9">Local</td>
                  </tr>
                  <tr className="row">
                    <td className="col-sm-3">URL</td>
                    <td className="col-sm-9">/var/run/docker.sock</td>
                  </tr>
                  <tr className="row">
                    <td className="col-sm-3">System Info</td>
                    <td className="col-sm-9">
                      RAM, Docker Version, Disk free space
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="row">
          {/* Docker Container Details */}
          <div className="col-sm-3">
            <div
              className="card border-0 shadow-sm bg-white rounded m-2"
              style={{ "max-width": "18rem", height: "6rem" }}
            >
              <div className="card-body text-secondary">
                <h4 className="card-title center">
                  Containers <span className="float-right">#3</span>
                </h4>
                <small className="text-muted float-left">Running #2</small>
                <small className="text-muted float-right">Stopped #1</small>
              </div>
            </div>
          </div>
          {/* Docker Image Details */}
          <div className="col-sm-3">
            <div
              className="card border-0 shadow-sm bg-white rounded m-2"
              style={{ "max-width": "18rem", height: "6rem" }}
            >
              <div className="card-body text-secondary">
                <h4 className="card-title center">
                  Images <span className="float-right">#3</span>
                </h4>
                <small className="text-muted float-right">
                  Total Size #150MiB
                </small>
              </div>
            </div>
          </div>
          {/* Docker Volume Details */}
          <div className="col-sm-3">
            <div
              className="card  border-0 shadow-sm bg-white rounded m-2"
              style={{ "max-width": "18rem", height: "6rem" }}
            >
              <div className="card-body text-secondary">
                <h4 className="card-title center">
                  Volumes <span className="float-right">#3</span>
                </h4>
              </div>
            </div>
          </div>
          {/* Docker Network Details */}
          <div className="col-sm-3">
            <div
              className="card  border-0 shadow-sm bg-white rounded m-2"
              style={{ "max-width": "18rem", height: "6rem" }}
            >
              <div className="card-body text-secondary">
                <h4 className="card-title center">
                  Networks <span className="float-right">#3</span>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
