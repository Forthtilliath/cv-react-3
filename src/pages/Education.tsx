import { Link } from "react-router-dom";

const certificates = [
  {
    name: "Web Developement",
    date: "Jan 2018",
  },
  {
    name: "Web Developement",
    date: "Jan 2018",
  },
  {
    name: "Web Developement",
    date: "Jan 2018",
  },
  {
    name: "Web Developement",
    date: "Jan 2018",
  },
];

function Education() {
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
            {certificates.map((certificate, key) => (
              <tr key={key}>
                <td>{certificate.name}</td>
                <td>{certificate.date}</td>
                <td>
                  <Link to="#" className="btn blue lighten-2">
                    View
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Education;
