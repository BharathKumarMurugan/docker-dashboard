import React, { Component } from "react";

class Container extends Component {
  state = {
    data: [
      {
        id: "checkbox1",
        name: "container1",
        status: "running",
        image: "busybox",
        date: "12-12-2020",
        ip: "172.168.0.3",
        port: "3000:3000",
      },
      {
        id: "checkbox2",
        name: "container2",
        status: "running",
        image: "ubuntu",
        date: "12-12-2020",
        ip: "172.168.0.1",
        port: "3001:3001",
      },
      {
        id: "checkbox3",
        name: "container3",
        status: "stopped",
        image: "nodejs",
        date: "12-12-2020",
        ip: "172.168.0.2",
        port: "3002:3002",
      },
    ],
  };
  render() {
    return (
      <table className="table table-bordered m-2">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Status</th>
            <th scope="col">Image</th>
            <th scope="col">Creation Date</th>
            <th scope="col">IP</th>
            <th scope="col">Published Port</th>
          </tr>
        </thead>
        <tbody>
          {this.state.data.map((container, index) => {
            return (
              <tr key={index}>
                <td>
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheck"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customCheck"
                    >
                      {container.name}
                    </label>
                  </div>
                </td>
                <td className={this.containerStateClass()}>
                  {container.status}
                </td>
                <td>{container.image}</td>
                <td>{container.date}</td>
                <td>{container.ip}</td>
                <td>{container.port}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }

  containerStateClass() {
    let classes = "";
    classes +=
      this.state.data.status === "running" ? "text-success" : "text-danger";
    return classes;
  }
}

export default Container;
