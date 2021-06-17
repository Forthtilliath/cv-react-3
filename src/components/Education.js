import React, { Component } from 'react';
import { HashLink as Link } from "react-router-hash-link";

class Education extends Component {
  certificates = [
    {
          name: "Web Developement",
        date:'Jan 2018'
    },
    {
          name: "Web Developement",
        date:'Jan 2018'
    },
    {
          name: "Web Developement",
        date:'Jan 2018'
    },
    {
          name: "Web Developement",
        date:'Jan 2018'
    },
  ];
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h6>
            <strong>EDUCATION</strong>
          </h6>
          <table className="stripped">
            <thead>
              <tr>
                <th>Certificate</th>
                <th>Date</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {this.certificates.map((certificate, key) => (
                <tr key={key}>
                  <td>{certificate.name}</td>
                  <td>{certificate.date}</td>
                  <td>
                    <Link to="#" className="btn blue lighten-2">View</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Education;