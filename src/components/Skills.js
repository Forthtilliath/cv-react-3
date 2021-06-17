import React, { Component } from "react";

class Skills extends Component {
    skills = [
        {
            name: 'HTML',
            pourcent:'89%',
        },
        {
            name: 'Javascript',
            pourcent:'85%',
        },
        {
            name: 'JQuery',
            pourcent:'89%',
        },
        {
            name: 'PHP',
            pourcent:'65%',
        },
        {
            name: 'MySQL',
            pourcent:'75%',
        },
        {
            name: 'SASS',
            pourcent:'53%',
        },
    ]
  render() {
    return (
      <div>
        <div className="card">
          <div className="card-content">
            <h6>
              <strong>PROFESSIONEL SKILLS</strong>
            </h6>
            <div className="row mt-top">
              {this.skills.map((skill,key) => (
                <div className="col s6" key={key}>
                  <p>{skill.name}</p>
                  <div className="progress grey lighten-1">
                    <div
                      className="determinate blue"
                      style={{ width: skill.pourcent }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
